// Enhanced demo data with more hospitals, doctors, and appointments
const demoHospitals = [
  { name: "City General Hospital", type: "Govt", city: "Delhi", verified: true },
  { name: "Metro Care Clinic", type: "Private", city: "Delhi", verified: true },
  { name: "Green Valley Hospital", type: "Private", city: "Mumbai", verified: false },
  { name: "Apollo Speciality", type: "Private", city: "Chennai", verified: true },
  { name: "Fortis Healthcare", type: "Private", city: "Mumbai", verified: true },
  { name: "Max Super Specialty", type: "Private", city: "Delhi", verified: true }
];

const demoDoctors = [
  { name: "Dr. A. Verma", specialty: "Cardiology", hospital: "City General Hospital", fee: 300, status: "Available" },
  { name: "Dr. P. Singh", specialty: "Cardiology", hospital: "Metro Care Clinic", fee: 600, status: "Available" },
  { name: "Dr. S. Nair", specialty: "Dermatology", hospital: "Green Valley Hospital", fee: 500, status: "Busy" },
  { name: "Dr. K. Rao", specialty: "General", hospital: "City General Hospital", fee: 200, status: "Available" },
  { name: "Dr. M. Iyer", specialty: "ENT", hospital: "Apollo Speciality", fee: 400, status: "On Leave" },
  { name: "Dr. V. Sharma", specialty: "Orthopedics", hospital: "Fortis Healthcare", fee: 700, status: "Available" }
];

const demoAppointments = [
  { time: "10:15", patient: "Riya Sharma", doctor: "Dr. A. Verma", hospital: "City General Hospital", fee: 300 },
  { time: "10:45", patient: "Arjun Patel", doctor: "Dr. P. Singh", hospital: "Metro Care Clinic", fee: 600 },
  { time: "11:30", patient: "Meera Desai", doctor: "Dr. S. Nair", hospital: "Green Valley Hospital", fee: 500 },
  { time: "12:15", patient: "Suresh Kumar", doctor: "Dr. K. Rao", hospital: "City General Hospital", fee: 200 },
  { time: "14:00", patient: "Priya Iyer", doctor: "Dr. M. Iyer", hospital: "Apollo Speciality", fee: 400 },
  { time: "15:30", patient: "Raj Malhotra", doctor: "Dr. V. Sharma", hospital: "Fortis Healthcare", fee: 700 }
];

const demoUsers = [
  { name: "Riya Sharma", email: "riya@example.com", role: "patient" },
  { name: "Arjun Patel", email: "arjun@example.com", role: "patient" },
  { name: "Meera Desai", email: "meera@example.com", role: "patient" },
  { name: "Dr. A. Verma", email: "dr.verma@example.com", role: "doctor" },
  { name: "Dr. P. Singh", email: "dr.singh@example.com", role: "doctor" },
  { name: "Admin User", email: "admin@example.com", role: "admin" }
];

function fillTable(tbodyId, rows) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;

  const table = tbody.closest('table');
  const thead = table.querySelector('thead tr');

  // Clear existing body
  tbody.innerHTML = "";

  if (rows.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    // Determine colSpan based on number of headers
    const colSpan = thead.querySelectorAll('th').length;
    td.setAttribute("colspan", colSpan);
    td.textContent = "No data available.";
    td.style.textAlign = "center";
    td.style.padding = "20px";
    td.style.color = "#7f8c8d";
    tr.appendChild(td);
    tbody.appendChild(tr);
    return;
  }

  // Fill rows
  rows.forEach(rowData => {
    const tr = document.createElement("tr");
    Object.values(rowData).forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Populate demo data tables
  fillTable("hospitalTable", demoHospitals);
  fillTable("doctorTable", demoDoctors);
  fillTable("appointmentTable", demoAppointments);

  // Update stats
  const hospitalCount = document.getElementById("hospitalCount");
  if (hospitalCount) hospitalCount.textContent = demoHospitals.length;

  const doctorCount = document.getElementById("doctorCount");
  if (doctorCount) doctorCount.textContent = demoDoctors.length;

  const appointmentsToday = document.getElementById("appointmentsToday");
  if (appointmentsToday) appointmentsToday.textContent = demoAppointments.length;

  const totalUsers = document.getElementById("totalUsers");
  if (totalUsers) totalUsers.textContent = demoUsers.length;
});
