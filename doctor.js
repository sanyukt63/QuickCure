const slots = [];
const todaysAppointments = [
  { time: "10:15", patient: "Riya Sharma", reason: "Cardiac Checkup", fee: 800, status: "completed" },
  { time: "11:30", patient: "Arjun Patel", reason: "Hypertension Follow-up", fee: 800, status: "completed" },
  { time: "14:00", patient: "Meera Desai", reason: "ECG Test", fee: 800, status: "upcoming" },
  { time: "15:30", patient: "Suresh Kumar", reason: "General Consultation", fee: 800, status: "upcoming" },
  { time: "16:45", patient: "Priya Iyer", reason: "Cardiac Screening", fee: 800, status: "upcoming" }
];

const monthlyEarnings = [
  { month: "Jan", earnings: 45000, appointments: 56 },
  { month: "Feb", earnings: 52000, appointments: 62 },
  { month: "Mar", earnings: 48000, appointments: 58 },
  { month: "Apr", earnings: 55000, appointments: 67 },
  { month: "May", earnings: 60000, appointments: 72 }
];

function renderSlots() {
  const ul = document.getElementById("slotsList");
  if (!ul) return;
  ul.innerHTML = "";
  if (slots.length === 0) {
    ul.innerHTML = "<li style='text-align:center;color:#6c757d;'>No slots added yet.</li>";
    return;
  }
  slots.forEach(s => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${s.date}</strong> • ${s.start}–${s.end} 
      <br>Duration: ${s.slot} min • Fee: ₹${s.fee}
      <button class="btn remove-slot" style="padding:5px 10px;font-size:12px;margin-left:10px;">Remove</button>
    `;
    li.querySelector(".remove-slot").addEventListener("click", () => {
      const index = slots.indexOf(s);
      if (index > -1) {
        slots.splice(index, 1);
        renderSlots();
      }
    });
    ul.appendChild(li);
  });
}

function renderAppointments() {
  const ul = document.getElementById("appointmentList");
  const totalScheduled = document.getElementById("totalScheduled");
  const completed = document.getElementById("completed");
  const upcoming = document.getElementById("upcoming");
  const todayEarnings = document.getElementById("todayEarnings");
  const weekEarnings = document.getElementById("weekEarnings");

  if (!ul) return;

  ul.innerHTML = "";
  if (todaysAppointments.length === 0) {
    ul.innerHTML = "<li style='text-align:center;color:#6c757d;'>No appointments scheduled for today.</li>";
  } else {
    todaysAppointments.forEach(a => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div>
          <strong>${a.time}</strong> — ${a.patient}
          <br><span style="color:#6c757d;font-size:0.9em;">${a.reason} • ₹${a.fee}</span>
        </div>
        <span class="status-badge ${a.status}">${a.status.charAt(0).toUpperCase() + a.status.slice(1)}</span>
      `;
      ul.appendChild(li);
    });
  }

  if (totalScheduled) totalScheduled.textContent = todaysAppointments.length.toString();
  if (completed) completed.textContent = todaysAppointments.filter(a => a.status === "completed").length.toString();
  if (upcoming) upcoming.textContent = todaysAppointments.filter(a => a.status === "upcoming").length.toString();
  
  if (todayEarnings) {
    const todayTotal = todaysAppointments.reduce((sum, a) => sum + a.fee, 0);
    todayEarnings.textContent = todayTotal.toString();
  }
  
  if (weekEarnings) {
    const weekTotal = 24500; // Sample weekly total
    weekEarnings.textContent = weekTotal.toString();
  }
}

function calculateMonthlyStats() {
  const totalEarnings = monthlyEarnings.reduce((sum, m) => sum + m.earnings, 0);
  const totalAppointments = monthlyEarnings.reduce((sum, m) => sum + m.appointments, 0);
  const avgEarnings = Math.round(totalEarnings / monthlyEarnings.length);
  
  return { totalEarnings, totalAppointments, avgEarnings };
}

// Add CSS for status badges
function addStatusBadgeStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .status-badge {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }
    .status-badge.completed {
      background: #dcfce7;
      color: #166534;
    }
    .status-badge.upcoming {
      background: #fef3c7;
      color: #92400e;
    }
    .status-badge.cancelled {
      background: #fee2e2;
      color: #991b1b;
    }
  `;
  document.head.appendChild(style);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("availabilityForm");
  if (!form) return;

  const patientNames = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
  const reasons = ["Follow-up", "New Consultation", "Check-up", "Prescription Refill"];

  // Add status badge styles
  addStatusBadgeStyles();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = document.getElementById("availDate").value;
    const start = document.getElementById("availStart").value;
    const end = document.getElementById("availEnd").value;
    const slot = parseInt(document.getElementById("availSlot").value, 10);
    const fee = parseInt(document.getElementById("docFee").value, 10);

    if (!date || !start || !end || isNaN(slot) || isNaN(fee)) {
      alert("Please fill all fields correctly.");
      return;
    }

    slots.push({ date, start, end, slot, fee });
    renderSlots();

    // Demo: generate a mock appointment whenever slots added
    const randomPatient = patientNames[Math.floor(Math.random() * patientNames.length)];
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];

    todaysAppointments.push({
      time: `${start}`,
      patient: randomPatient,
      reason: randomReason,
      fee,
      status: "upcoming"
    });
    renderAppointments();

    form.reset();
    document.getElementById("availSlot").value = 30;
    document.getElementById("docFee").value = 800;
  });

  // Initialize appointment stats
  const stats = calculateMonthlyStats();
  const monthlyStatsElement = document.getElementById("monthlyStats");
  if (monthlyStatsElement) {
    monthlyStatsElement.innerHTML = `
      <p>Total Earnings: ₹${stats.totalEarnings}</p>
      <p>Total Appointments: ${stats.totalAppointments}</p>
      <p>Average Monthly: ₹${stats.avgEarnings}</p>
    `;
  }

  renderSlots();
  renderAppointments();
});
