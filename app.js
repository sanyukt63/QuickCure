/* =========================
   Enhanced Hospital and Doctor Data
   ========================= */
const mockHospitals = [
  {
    id: 1,
    name: "City General Hospital",
    type: "Govt",
    city: "delhi",
    image: "https://placehold.co/600x400/3498db/ffffff?text=City+General+Hospital&font=montserrat",
    rating: 4.5,
    reviews: 234,
    distanceKm: 2.8,
    address: "123 Main Street, Connaught Place",
    phone: "+91 11 2345 6789",
    doctors: [
      { id: 101, name: "Dr. Rajesh Verma", specialty: "cardiology", fee: 800, nextInMin: 15, experience: 12, rating: 4.8 },
      { id: 102, name: "Dr. Kavita Rao", specialty: "general", fee: 500, nextInMin: 25, experience: 8, rating: 4.6 },
      { id: 103, name: "Dr. Amit Patel", specialty: "orthopedics", fee: 1200, nextInMin: 40, experience: 15, rating: 4.9 }
    ]
  },
  {
    id: 2,
    name: "Green Valley Multi-speciality",
    type: "Private",
    city: "mumbai",
    image: "https://placehold.co/600x400/27ae60/ffffff?text=Green+Valley+Hospital&font=montserrat",
    rating: 4.7,
    reviews: 156,
    distanceKm: 4.2,
    address: "456 Marine Drive, Colaba",
    phone: "+91 22 9876 5432",
    doctors: [
      { id: 201, name: "Dr. Sunita Nair", specialty: "dermatology", fee: 1500, nextInMin: 30, experience: 10, rating: 4.7 },
      { id: 202, name: "Dr. Rohan Shah", specialty: "orthopedics", fee: 1800, nextInMin: 20, experience: 12, rating: 4.8 },
      { id: 203, name: "Dr. Meera Desai", specialty: "gynecology", fee: 1200, nextInMin: 35, experience: 9, rating: 4.6 }
    ]
  },
  {
    id: 3,
    name: "Metro Care Clinic",
    type: "Private",
    city: "delhi",
    image: "https://placehold.co/600x400/e74c3c/ffffff?text=Metro+Care+Clinic&font=montserrat",
    rating: 4.3,
    reviews: 89,
    distanceKm: 1.5,
    address: "789 MG Road, Karol Bagh",
    phone: "+91 11 8765 4321",
    doctors: [
      { id: 301, name: "Dr. Priya Singh", specialty: "cardiology", fee: 2000, nextInMin: 10, experience: 14, rating: 4.9 },
      { id: 302, name: "Dr. Lalit Gupta", specialty: "pediatrics", fee: 900, nextInMin: 15, experience: 7, rating: 4.5 },
      { id: 303, name: "Dr. Anjali Mehta", specialty: "ent", fee: 1100, nextInMin: 25, experience: 11, rating: 4.7 }
    ]
  },
  {
    id: 4,
    name: "National Health Center",
    type: "Govt",
    city: "bengaluru",
    image: "https://placehold.co/600x400/9b59b6/ffffff?text=National+Health+Center&font=montserrat",
    rating: 4.6,
    reviews: 312,
    distanceKm: 3.7,
    address: "321 Brigade Road, MG Road",
    phone: "+91 80 2345 6789",
    doctors: [
      { id: 401, name: "Dr. Mohan Iyer", specialty: "ent", fee: 600, nextInMin: 20, experience: 13, rating: 4.8 },
      { id: 402, name: "Dr. Tara Rao", specialty: "psychiatry", fee: 1300, nextInMin: 30, experience: 10, rating: 4.6 },
      { id: 403, name: "Dr. Suresh Kumar", specialty: "neurology", fee: 2200, nextInMin: 45, experience: 16, rating: 4.9 }
    ]
  },
  {
    id: 5,
    name: "Apollo Speciality Hospital",
    type: "Private",
    city: "chennai",
    image: "https://placehold.co/600x400/f39c12/ffffff?text=Apollo+Hospital&font=montserrat",
    rating: 4.8,
    reviews: 478,
    distanceKm: 5.1,
    address: "654 Greams Road, Thousand Lights",
    phone: "+91 44 9876 5432",
    doctors: [
      { id: 501, name: "Dr. Vijayalakshmi", specialty: "cardiology", fee: 2500, nextInMin: 25, experience: 18, rating: 4.9 },
      { id: 502, name: "Dr. Arvind Swamy", specialty: "oncology", fee: 3000, nextInMin: 40, experience: 15, rating: 4.8 },
      { id: 503, name: "Dr. Nalini Rajan", specialty: "pediatrics", fee: 1500, nextInMin: 15, experience: 12, rating: 4.7 }
    ]
  },
  {
    id: 6,
    name: "Fortis Healthcare",
    type: "Private",
    city: "mumbai",
    image: "https://placehold.co/600x400/2c3e50/ffffff?text=Fortis+Healthcare&font=montserrat",
    rating: 4.9,
    reviews: 345,
    distanceKm: 6.3,
    address: "987 Linking Road, Bandra West",
    phone: "+91 22 3456 7890",
    doctors: [
      { id: 601, name: "Dr. Sameer Khan", specialty: "neurology", fee: 2800, nextInMin: 35, experience: 14, rating: 4.9 },
      { id: 602, name: "Dr. Neha Sharma", specialty: "dermatology", fee: 1900, nextInMin: 20, experience: 9, rating: 4.7 },
      { id: 603, name: "Dr. Ravi Malhotra", specialty: "orthopedics", fee: 2100, nextInMin: 30, experience: 13, rating: 4.8 }
    ]
  }
];

function byEarliestAvailability(matches) {
  const flattened = [];
  matches.forEach(h => {
    h.doctors.forEach(d => {
      flattened.push({
        hospital: h,
        doctor: d,
        combinedScore: (d.nextInMin * 0.4) + (h.distanceKm * 0.3) + (d.fee * -0.001) + (d.rating * 0.2)
      });
    });
  });
  
  flattened.sort((a, b) => a.combinedScore - b.combinedScore);
  return flattened.map(item => ({
    hospital: item.hospital,
    doctor: item.doctor
  }));
}

function renderHospitalCards(flatList) {
  const container = document.getElementById("hospitalList");
  if (!container) return;
  container.innerHTML = "";

  if (flatList.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <img src="https://placehold.co/200x200/95a5a6/ffffff?text=😕&font=oswald" alt="No results found icon - sad face with magnifying glass" onerror="this.style.display='none'" />
        <h3>No matching hospitals found</h3>
        <p>Try selecting a different specialty or city</p>
      </div>
    `;
    return;
  }

  flatList.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "hospital-card";
    card.innerHTML = `
      <div class="hospital-image">
        <img src="${item.hospital.image}" alt="${item.hospital.name} - ${item.hospital.type} hospital in ${item.hospital.city}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/95a5a6/ffffff?text=🏥&font=montserrat'" />
        <div class="hospital-badge">#${index + 1} Recommendation</div>
      </div>
      
      <div class="hospital-content">
        <div class="hospital-header">
          <h3>${item.hospital.name}
            <span class="badge ${item.hospital.type.toLowerCase()}">${item.hospital.type}</span>
          </h3>
          <div class="hospital-rating">
            ⭐ ${item.hospital.rating} (${item.hospital.reviews} reviews)
          </div>
        </div>

        <div class="doctor-info">
          <div class="doctor-avatar">
            <img src="https://placehold.co/60x60/3498db/ffffff?text=👨‍⚕️&font=oswald" alt="Doctor ${item.doctor.name} profile picture" onerror="this.style.display='none'" />
          </div>
          <div class="doctor-details">
            <h4>${item.doctor.name}</h4>
            <p>${item.doctor.specialty.toUpperCase()} • ${item.doctor.experience} years exp • ⭐ ${item.doctor.rating}</p>
          </div>
        </div>

        <div class="hospital-meta">
          <div class="meta-item">
            <span class="icon">⏰</span>
            <span>Next available: ${item.doctor.nextInMin} min</span>
          </div>
          <div class="meta-item">
            <span class="icon">📍</span>
            <span>${item.hospital.distanceKm.toFixed(1)} km away</span>
          </div>
          <div class="meta-item">
            <span class="icon">💰</span>
            <span>₹${item.doctor.fee} consultation fee</span>
          </div>
        </div>

        <div class="hospital-contact">
          <p>📍 ${item.hospital.address}</p>
          <p>📞 ${item.hospital.phone}</p>
        </div>

        <div class="hcard-actions">
          <button class="btn book-btn">Book Appointment</button>
          <button class="btn view-btn">View Profile</button>
        </div>
      </div>
    `;
    
    card.querySelector(".book-btn").addEventListener("click", () => {
      alert(`✅ Appointment booked!\n\nHospital: ${item.hospital.name}\nDoctor: ${item.doctor.name}\nSpecialty: ${item.doctor.specialty}\nTime: ~${item.doctor.nextInMin} min\nFee: ₹${item.doctor.fee}`);
    });

    card.querySelector(".view-btn").addEventListener("click", () => {
      alert(`👨‍⚕️ Doctor Profile\n\nName: ${item.doctor.name}\nSpecialty: ${item.doctor.specialty}\nExperience: ${item.doctor.experience} years\nRating: ⭐ ${item.doctor.rating}\nFee: ₹${item.doctor.fee}\n\nHospital: ${item.hospital.name}`);
    });

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("nextBtn");
  const bookingStep = document.getElementById("bookingStep");
  const hospitalSection = document.getElementById("hospitalSection");

  if (nextBtn && bookingStep && hospitalSection) {
    nextBtn.addEventListener("click", () => {
      const spec = (document.getElementById("specialty").value || "").toLowerCase();
      const city = (document.getElementById("city").value || "").toLowerCase();

      if (!spec || !city) {
        alert("⚠️ Please select both Specialty and City.");
        return;
      }

      // Filter by city and specialty
      const candidateHospitals = mockHospitals
        .filter(h => h.city === city)
        .map(h => ({
          ...h,
          doctors: h.doctors.filter(d => d.specialty === spec)
        }))
        .filter(h => h.doctors.length > 0);

      const ranked = byEarliestAvailability(candidateHospitals);

      bookingStep.style.display = "none";
      hospitalSection.style.display = "block";
      renderHospitalCards(ranked);
    });
  }
});
