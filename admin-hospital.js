// Enhanced Hospital Management with more features
class HospitalManager {
    constructor() {
        this.hospitals = JSON.parse(localStorage.getItem('quickcare_hospitals')) || [];
        this.currentEditId = null;
        this.initializeEventListeners();
        this.loadHospitals();
        this.initializeSampleData();
    }

    initializeEventListeners() {
        // Add hospital form
        document.getElementById('addHospitalForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAddHospital();
        });

        // Search functionality
        document.getElementById('hospitalSearch').addEventListener('input', (e) => {
            this.filterHospitals();
        });

        // Filter by type
        document.getElementById('filterType').addEventListener('change', (e) => {
            this.filterHospitals();
        });

        // Filter by verification
        document.getElementById('filterVerification').addEventListener('change', (e) => {
            this.filterHospitals();
        });

        // Clear form button
        document.querySelector('.btn.clear').addEventListener('click', () => {
            this.resetForm();
        });
    }

    initializeSampleData() {
        if (this.hospitals.length === 0) {
            const sampleHospitals = [
                {
                    id: '1',
                    name: 'City General Hospital',
                    type: 'Govt',
                    city: 'delhi',
                    verified: true,
                    createdAt: new Date().toISOString()
                },
                {
                    id: '2',
                    name: 'Metro Care Clinic',
                    type: 'Private',
                    city: 'delhi',
                    verified: true,
                    createdAt: new Date().toISOString()
                },
                {
                    id: '3',
                    name: 'Green Valley Multi-speciality',
                    type: 'Private',
                    city: 'mumbai',
                    verified: false,
                    createdAt: new Date().toISOString()
                },
                {
                    id: '4',
                    name: 'Apollo Speciality Hospital',
                    type: 'Private',
                    city: 'chennai',
                    verified: true,
                    createdAt: new Date().toISOString()
                },
                {
                    id: '5',
                    name: 'Fortis Healthcare',
                    type: 'Private',
                    city: 'mumbai',
                    verified: true,
                    createdAt: new Date().toISOString()
                },
                {
                    id: '6',
                    name: 'National Health Center',
                    type: 'Govt',
                    city: 'bengaluru',
                    verified: false,
                    createdAt: new Date().toISOString()
                }
            ];
            this.hospitals = sampleHospitals;
            this.saveHospitals();
            this.loadHospitals();
        }
    }

    handleAddHospital() {
        const formData = this.getFormData();

        if (!this.validateForm(formData)) {
            return;
        }

        if (this.currentEditId) {
            // Edit existing hospital
            this.updateHospital(this.currentEditId, formData);
        } else {
            // Add new hospital
            this.addHospital(formData);
        }

        this.resetForm();
    }

    getFormData() {
        return {
            name: document.getElementById('hospitalName').value.trim(),
            type: document.getElementById('hospitalType').value,
            city: document.getElementById('hospitalCity').value,
            verified: document.getElementById('hospitalVerified').value === 'true'
        };
    }

    validateForm(data) {
        // Clear previous errors
        this.clearErrors();

        let isValid = true;

        if (!data.name) {
            this.showError('hospitalName', 'Hospital name is required');
            isValid = false;
        }

        if (!data.type) {
            this.showError('hospitalType', 'Please select hospital type');
            isValid = false;
        }

        if (!data.city) {
            this.showError('hospitalCity', 'Please select a city');
            isValid = false;
        }

        // Check for duplicate hospital names
        if (!this.currentEditId && this.hospitals.some(h => h.name.toLowerCase() === data.name.toLowerCase())) {
            this.showError('hospitalName', 'A hospital with this name already exists');
            isValid = false;
        }

        return isValid;
    }

    showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        field.style.borderColor = '#e74c3c';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        
        field.parentNode.appendChild(errorDiv);
    }

    clearErrors() {
        document.querySelectorAll('input, select').forEach(el => {
            el.style.borderColor = '#e1e8ed';
        });
        document.querySelectorAll('.error-message').forEach(el => el.remove());
    }

    addHospital(hospitalData) {
        const newHospital = {
            id: Date.now().toString(),
            ...hospitalData,
            createdAt: new Date().toISOString()
        };

        this.hospitals.push(newHospital);
        this.saveHospitals();
        this.loadHospitals();
        this.showMessage('Hospital added successfully!', 'success');
    }

    updateHospital(id, updatedData) {
        const index = this.hospitals.findIndex(hospital => hospital.id === id);
        if (index !== -1) {
            this.hospitals[index] = {
                ...this.hospitals[index],
                ...updatedData,
                updatedAt: new Date().toISOString()
            };
            this.saveHospitals();
            this.loadHospitals();
            this.showMessage('Hospital updated successfully!', 'success');
        }
    }

    editHospital(id) {
        const hospital = this.hospitals.find(h => h.id === id);
        if (hospital) {
            document.getElementById('hospitalName').value = hospital.name;
            document.getElementById('hospitalType').value = hospital.type;
            document.getElementById('hospitalCity').value = hospital.city;
            document.getElementById('hospitalVerified').value = hospital.verified.toString();

            this.currentEditId = id;
            document.querySelector('.btn.add').textContent = 'Update Hospital';
        }
    }

    removeHospital(id) {
        if (confirm('Are you sure you want to remove this hospital?')) {
            this.hospitals = this.hospitals.filter(hospital => hospital.id !== id);
            this.saveHospitals();
            this.loadHospitals();
            this.showMessage('Hospital removed successfully!', 'success');
        }
    }

    loadHospitals() {
        const hospitals = this.hospitals;
        const tableBody = document.getElementById('hospitalListBody');
        
        if (hospitals.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="5" class="empty-state">
                        <h3>No hospitals found</h3>
                        <p>Add your first hospital to get started.</p>
                    </td>
                </tr>
            `;
            return;
        }

        tableBody.innerHTML = hospitals.map(hospital => `
            <tr>
                <td>${this.escapeHtml(hospital.name)}</td>
                <td>${this.escapeHtml(this.formatType(hospital.type))}</td>
                <td>${this.escapeHtml(this.formatCity(hospital.city))}</td>
                <td class="verified-${hospital.verified}">
                    ${hospital.verified ? '✅ Verified' : '⏳ Pending'}
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-edit" onclick="hospitalManager.editHospital('${hospital.id}')">Edit</button>
                        <button class="btn remove" onclick="hospitalManager.removeHospital('${hospital.id}')">Remove</button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    filterHospitals() {
        const searchTerm = document.getElementById('hospitalSearch').value.toLowerCase();
        const typeFilter = document.getElementById('filterType').value;
        const verificationFilter = document.getElementById('filterVerification').value;

        let filteredHospitals = this.hospitals;

        if (searchTerm) {
            filteredHospitals = filteredHospitals.filter(hospital =>
                hospital.name.toLowerCase().includes(searchTerm) ||
                hospital.city.toLowerCase().includes(searchTerm)
            );
        }

        if (typeFilter) {
            filteredHospitals = filteredHospitals.filter(hospital => hospital.type === typeFilter);
        }

        if (verificationFilter) {
            filteredHospitals = filteredHospitals.filter(hospital => hospital.verified.toString() === verificationFilter);
        }

        this.renderFilteredHospitals(filteredHospitals);
    }

    renderFilteredHospitals(hospitals) {
        const tableBody = document.getElementById('hospitalListBody');
        
        if (hospitals.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="5" class="empty-state">
                        <h3>No matching hospitals found</h3>
                        <p>Try adjusting your search criteria.</p>
                    </td>
                </tr>
            `;
            return;
        }

        tableBody.innerHTML = hospitals.map(hospital => `
            <tr>
                <td>${this.escapeHtml(hospital.name)}</td>
                <td>${this.escapeHtml(this.formatType(hospital.type))}</td>
                <td>${this.escapeHtml(this.formatCity(hospital.city))}</td>
                <td class="verified-${hospital.verified}">
                    ${hospital.verified ? '✅ Verified' : '⏳ Pending'}
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-edit" onclick="hospitalManager.editHospital('${hospital.id}')">Edit</button>
                        <button class="btn remove" onclick="hospitalManager.removeHospital('${hospital.id}')">Remove</button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    formatType(type) {
        const types = {
            'Govt': 'Government Hospital',
            'Private': 'Private Hospital',
            'Speciality': 'Speciality Clinic',
            'Multi-speciality': 'Multi-speciality Hospital'
        };
        return types[type] || type;
    }

    formatCity(city) {
        const cities = {
            'delhi': 'Delhi',
            'mumbai': 'Mumbai',
            'bengaluru': 'Bengaluru',
            'kolkata': 'Kolkata',
            'chennai': 'Chennai',
            'hyderabad': 'Hyderabad',
            'pune': 'Pune',
            'lucknow': 'Lucknow'
        };
        return cities[city] || city;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    resetForm() {
        document.getElementById('addHospitalForm').reset();
        this.clearErrors();
        this.currentEditId = null;
        document.querySelector('.btn.add').textContent = 'Add Hospital';
    }

    saveHospitals() {
        localStorage.setItem('quickcare_hospitals', JSON.stringify(this.hospitals));
    }

    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.padding = '1rem';
        messageDiv.style.borderRadius = '8px';
        messageDiv.style.marginBottom = '1rem';
        messageDiv.style.fontWeight = '500';

        if (type === 'success') {
            messageDiv.style.background = '#dcfce7';
            messageDiv.style.color = '#166534';
            messageDiv.style.border = '1px solid #bbf7d0';
        } else {
            messageDiv.style.background = '#fee2e2';
            messageDiv.style.color = '#991b1b';
            messageDiv.style.border = '1px solid #fecaca';
        }

        const container = document.querySelector('.hospital-management-section');
        container.insertBefore(messageDiv, container.firstChild);

        // Auto-remove message after 3 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 3000);
    }
}

// Initialize hospital manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.hospitalManager = new HospitalManager();
});
