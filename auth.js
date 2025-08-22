// WARNING: This is DEMO-ONLY. Do NOT use in production.
// Replace with a real backend or Supabase/Firebase auth.

function saveUser(user) {
  const users = JSON.parse(localStorage.getItem("mr_appointment_users") || "[]");
  users.push(user);
  localStorage.setItem("mr_appointment_users", JSON.stringify(users));
}

function findUser(email, password) {
  const users = JSON.parse(localStorage.getItem("mr_appointment_users") || "[]");
  return users.find(u => u.email === email && u.password === password);
}

function redirectByRole(role) {
  if (role === "patient") window.location.href = "patient.html";
  else if (role === "doctor") window.location.href = "doctor.html";
  else if (role === "admin") window.location.href = "admin.html";
  else window.location.href = "index.html";
}

// Function to toggle doctor-specific fields on signup page
function toggleDoctorFields() {
  const roleSelect = document.getElementById('role');
  const doctorFieldsDiv = document.getElementById('doctorFields');
  if (roleSelect && doctorFieldsDiv) {
    if (roleSelect.value === 'doctor') {
      doctorFieldsDiv.style.display = 'block';
      const licenseInput = document.getElementById('license');
      if (licenseInput) licenseInput.setAttribute('required', 'true');
    } else {
      doctorFieldsDiv.style.display = 'none';
      const licenseInput = document.getElementById('license');
      if (licenseInput) licenseInput.removeAttribute('required');
    }
  }
}

// Initialize sample users if none exist
function initializeSampleUsers() {
  const users = JSON.parse(localStorage.getItem("mr_appointment_users") || "[]");
  if (users.length === 0) {
    const sampleUsers = [
      {
        name: "Rajesh Kumar",
        email: "patient@example.com",
        password: "password123",
        role: "patient"
      },
      {
        name: "Dr. Priya Sharma",
        email: "doctor@example.com",
        password: "password123",
        role: "doctor",
        license: "MED123456"
      },
      {
        name: "Admin User",
        email: "admin@example.com",
        password: "password123",
        role: "admin"
      }
    ];
    localStorage.setItem("mr_appointment_users", JSON.stringify(sampleUsers));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initializeSampleUsers();
  
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim().toLowerCase();
      const password = document.getElementById("password").value;
      const role = document.getElementById("role").value;
      const license = document.getElementById("license") ? document.getElementById("license").value.trim() : '';

      if (!name || !email || !password || !role) {
        alert("Please fill all required fields.");
        return;
      }

      if (role === 'doctor' && !license) {
        alert("Please enter your Medical License Number.");
        return;
      }

      // Check if email already exists
      const existingUsers = JSON.parse(localStorage.getItem("mr_appointment_users") || "[]");
      if (existingUsers.some(user => user.email === email)) {
        alert("This email is already registered. Please use a different email or sign in.");
        return;
      }

      saveUser({ name, email, password, role, license: role === 'doctor' ? license : undefined });
      alert("✅ Account created successfully! Redirecting...");
      redirectByRole(role);
    });

    toggleDoctorFields();
  }

  if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim().toLowerCase();
      const password = document.getElementById("password").value;

      const user = findUser(email, password);
      if (!user) {
        alert("❌ Invalid email or password. Please try again.");
        return;
      }

      localStorage.setItem("mr_appointment_current_user", JSON.stringify(user));
      alert("✅ Signed in successfully! Redirecting...");
      redirectByRole(user.role);
    });
  }
});
