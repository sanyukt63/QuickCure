/* =========================
   Enhanced Hospital and Doctor Data
   ========================= */
const mockHospitals = [
  {
    id: 1,
    name: "City General Hospital",
    type: "Govt",
    city: "delhi",
    image: "https://www.vecteezy.com/free-vector/hospital",
    rating: 4.5,
    reviews: 234,
    distanceKm: 2.8,
    address: "123 Main Street, Connaught Place",
    phone: "+91 11 2345 6789",
    doctors: [
      { id: 101, name: "Dr. Rajesh Verma", specialty: "cardiology", fee: 800, nextInMin: 15, experience: 12, rating: 4.8 },
      { id: 102, name: "Dr. Kavita Rao", specialty: "general", fee: 500, nextInMin: 25, experience: 8, rating: 4.6 },
      { id: 103, name: "Dr. Amit Patel", specialty: "orthopedics", fee: 1200, nextInMin: 40, experience: 15, rating: 4.9 },
      { id: 104, name: "Dr. Sunil Kumar", specialty: "dermatology", fee: 1200, nextInMin: 30, experience: 10, rating: 4.7 },
      { id: 105, name: "Dr. Arvind Menon", specialty: "oncology", fee: 3000, nextInMin: 40, experience: 15, rating: 4.8 },
      { id: 106, name: "Dr. Mona Dubey", specialty: "gynecology", fee: 1200, nextInMin: 35, experience: 9, rating: 4.6 },
      { id: 107, name: "Dr. Lokesh Verma", specialty: "pediatrics", fee: 900, nextInMin: 15, experience: 7, rating: 4.5 },
      { id: 108, name: "Dr. Nishani Mehta", specialty: "ent", fee: 1100, nextInMin: 25, experience: 11, rating: 4.7 },
      { id: 109, name: "Dr. Tara Joshi", specialty: "psychiatry", fee: 1300, nextInMin: 30, experience: 10, rating: 4.6 },
      { id: 110, name: "Dr. Suresh Reddy", specialty: "neurology", fee: 2200, nextInMin: 45, experience: 16, rating: 4.9 }
    ]
  },
  {
    id: 2,
    name: "Green Valley Multi-speciality",
    type: "Private",
    city: "mumbai",
    image: "https://www.vecteezy.com/free-vector/hospital",
    rating: 4.7,
    reviews: 156,
    distanceKm: 4.2,
    address: "456 Marine Drive, Colaba",
    phone: "+91 22 9876 5432",
    doctors: [
      { id: 201, name: "Dr. Sunita Nair", specialty: "dermatology", fee: 1500, nextInMin: 30, experience: 10, rating: 4.7 },
      { id: 202, name: "Dr. Rohan Shah", specialty: "orthopedics", fee: 1800, nextInMin: 20, experience: 12, rating: 4.8 },
      { id: 203, name: "Dr. Meera Desai", specialty: "gynecology", fee: 1200, nextInMin: 35, experience: 9, rating: 4.6 },
      { id: 204, name: "Dr. Ram Singh", specialty: "cardiology", fee: 800, nextInMin: 15, experience: 12, rating: 4.8 },
      { id: 205, name: "Dr. Koyal Mishra", specialty: "general", fee: 500, nextInMin: 25, experience: 8, rating: 4.6 },
      { id: 206, name: "Dr. Lalit Gupta", specialty: "pediatrics", fee: 900, nextInMin: 15, experience: 7, rating: 4.5 },
      { id: 207, name: "Dr. Anjali Mehta", specialty: "ent", fee: 1100, nextInMin: 25, experience: 11, rating: 4.7 },
      { id: 208, name: "Dr. Deepak Malhotra", specialty: "oncology", fee: 3000, nextInMin: 40, experience: 15, rating: 4.8 },
      { id: 209, name: "Dr. Shreya Kulkarni", specialty: "psychiatry", fee: 1300, nextInMin: 30, experience: 10, rating: 4.6 },
      { id: 210, name: "Dr. Vikram Shetty", specialty: "neurology", fee: 2200, nextInMin: 45, experience: 16, rating: 4.9 }
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
      { id: 302, name: "Dr. Ramesh Chawla", specialty: "pediatrics", fee: 900, nextInMin: 15, experience: 7, rating: 4.5 },
      { id: 303, name: "Dr. Neelam Kapoor", specialty: "ent", fee: 1100, nextInMin: 25, experience: 11, rating: 4.7 },
      { id: 304, name: "Dr. Ashok Bansal", specialty: "general", fee: 500, nextInMin: 25, experience: 8, rating: 4.6 },
      { id: 305, name: "Dr. Anita Sharma", specialty: "orthopedics", fee: 1200, nextInMin: 40, experience: 15, rating: 4.9 },
      { id: 306, name: "Dr. Sameer Mathur", specialty: "dermatology", fee: 1200, nextInMin: 30, experience: 10, rating: 4.7 },
      { id: 307, name: "Dr. Poonam Rathi", specialty: "oncology", fee: 3000, nextInMin: 40, experience: 15, rating: 4.8 },
      { id: 308, name: "Dr. Nidhi Sinha", specialty: "gynecology", fee: 1200, nextInMin: 35, experience: 9, rating: 4.6 },
      { id: 309, name: "Dr. Arjun Chopra", specialty: "psychiatry", fee: 1300, nextInMin: 30, experience: 10, rating: 4.6 },
      { id: 310, name: "Dr. Vivek Raina", specialty: "neurology", fee: 2200, nextInMin: 45, experience: 16, rating: 4.9 }
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
      { id: 401, name: "Dr. Sunita Nair", specialty: "dermatology", fee: 1500, nextInMin: 30, experience: 10, rating: 4.7 },
      { id: 402, name: "Dr. Rohan Shah", specialty: "orthopedics", fee: 1800, nextInMin: 20, experience: 12, rating: 4.8 },
      { id: 403, name: "Dr. Meera Desai", specialty: "gynecology", fee: 1200, nextInMin: 35, experience: 9, rating: 4.6 },
      { id: 404, name: "Dr. Ram Prakash", specialty: "cardiology", fee: 800, nextInMin: 15, experience: 12, rating: 4.8 },
      { id: 405, name: "Dr. Koyal Mishra", specialty: "general", fee: 500, nextInMin: 25, experience: 8, rating: 4.6 },
      { id: 406, name: "Dr. Lalit Gupta", specialty: "pediatrics", fee: 900, nextInMin: 15, experience: 7, rating: 4.5 },
      { id: 407, name: "Dr. Mohan Iyer", specialty: "ent", fee: 600, nextInMin: 20, experience: 13, rating: 4.8 },
      { id: 408, name: "Dr. Shankar Iyer", specialty: "oncology", fee: 3000, nextInMin: 40, experience: 15, rating: 4.8 },
      { id: 409, name: "Dr. Tara Rao", specialty: "psychiatry", fee: 1300, nextInMin: 30, experience: 10, rating: 4.6 },
      { id: 410, name: "Dr. Suresh Kumar", specialty: "neurology", fee: 2200, nextInMin: 45, experience: 16, rating: 4.9 }
    ]
  },
  {
    id: 5,
    name: "Apollo Speciality Hospital",
    type: "Private",
    city: "chennai",
    image: "https://www.vecteezy.com/free-vector/hospital",
    rating: 4.8,
    reviews: 478,
    distanceKm: 5.1,
    address: "654 Greams Road, Thousand Lights",
    phone: "+91 44 9876 5432",
    doctors: [
      { id: 501, name: "Dr. Vijayalakshmi", specialty: "cardiology", fee: 2500, nextInMin: 25, experience: 18, rating: 4.9 },
      { id: 502, name: "Dr. Nalini Rajan", specialty: "pediatrics", fee: 1500, nextInMin: 15, experience: 12, rating: 4.7 },
      { id: 503, name: "Dr. Seema Krishnan", specialty: "gynecology", fee: 1400, nextInMin: 20, experience: 10, rating: 4.6 },
      { id: 504, name: "Dr. Arvind Swamy", specialty: "oncology", fee: 3000, nextInMin: 40, experience: 15, rating: 4.8 },
      { id: 505, name: "Dr. Mohan Iyer", specialty: "ent", fee: 600, nextInMin: 20, experience: 13, rating: 4.8 },
      { id: 506, name: "Dr. Kavita Rao", specialty: "general", fee: 500, nextInMin: 25, experience: 8, rating: 4.6 },
      { id: 507, name: "Dr. Suresh Kumar", specialty: "neurology", fee: 2200, nextInMin: 45, experience: 16, rating: 4.9 }
    ]
  },
  {
    id: 6,
    name: "Fortis Healthcare",
    type: "Private",
    city: "mumbai",
    image: "https://www.vecteezy.com/free-vector/hospital",
    rating: 4.9,
    reviews: 345,
    distanceKm: 6.3,
    address: "987 Linking Road, Bandra West",
    phone: "+91 22 3456 7890",
    doctors: [
      { id: 601, name: "Dr. Sameer Khan", specialty: "neurology", fee: 2800, nextInMin: 35, experience: 14, rating: 4.9 },
      { id: 602, name: "Dr. Neha Sharma", specialty: "dermatology", fee: 1900, nextInMin: 20, experience: 9, rating: 4.7 },
      { id: 603, name: "Dr. Ravi Malhotra", specialty: "orthopedics", fee: 2100, nextInMin: 30, experience: 13, rating: 4.8 },
      { id: 604, name: "Dr. Meera Desai", specialty: "gynecology", fee: 1200, nextInMin: 35, experience: 9, rating: 4.6 },
      { id: 605, name: "Dr. Vijayalakshmi", specialty: "cardiology", fee: 2500, nextInMin: 25, experience: 18, rating: 4.9 },
      { id: 606, name: "Dr. Arvind Menon", specialty: "oncology", fee: 3000, nextInMin: 40, experience: 15, rating: 4.8 },
      { id: 607, name: "Dr. Nalini Rajan", specialty: "pediatrics", fee: 1500, nextInMin: 15, experience: 12, rating: 4.7 },
      { id: 608, name: "Dr. Tara Rao", specialty: "psychiatry", fee: 1300, nextInMin: 30, experience: 10, rating: 4.6 },
      { id: 609, name: "Dr. Mohan Iyer", specialty: "ent", fee: 600, nextInMin: 20, experience: 13, rating: 4.8 },
      { id: 610, name: "Dr. Kavita Rao", specialty: "general", fee: 500, nextInMin: 25, experience: 8, rating: 4.6 }
    ]
  },
  {
  id: 7,
  name: "Kolkata Medical Research Institute",
  type: "Private",
  city: "kolkata",
  image: "https://placehold.co/600x400/1abc9c/ffffff?text=Kolkata+MRI&font=montserrat",
  rating: 4.6,
  reviews: 280,
  distanceKm: 3.9,
  address: "45 Park Street, Taltala",
  phone: "+91 33 2345 6789",
  doctors: [
    { id: 701, name: "Dr. Subhas Chatterjee", specialty: "cardiology", fee: 2000, nextInMin: 20, experience: 15, rating: 4.8 },
    { id: 702, name: "Dr. Aparna Ghosh", specialty: "gynecology", fee: 1500, nextInMin: 30, experience: 12, rating: 4.7 },
    { id: 703, name: "Dr. Soumitra Dey", specialty: "orthopedics", fee: 1800, nextInMin: 25, experience: 10, rating: 4.6 },
    { id: 704, name: "Dr. Anindita Sen", specialty: "dermatology", fee: 1200, nextInMin: 15, experience: 9, rating: 4.5 },
    { id: 705, name: "Dr. Pradip Banerjee", specialty: "neurology", fee: 2500, nextInMin: 40, experience: 18, rating: 4.9 },
    { id: 706, name: "Dr. Kaushik Mitra", specialty: "general", fee: 600, nextInMin: 20, experience: 7, rating: 4.4 },
    { id: 707, name: "Dr. Rupa Basu", specialty: "psychiatry", fee: 1400, nextInMin: 35, experience: 11, rating: 4.6 },
    { id: 708, name: "Dr. Arindam Saha", specialty: "oncology", fee: 2800, nextInMin: 30, experience: 14, rating: 4.7 },
    { id: 709, name: "Dr. Nabanita Roy", specialty: "pediatrics", fee: 1100, nextInMin: 20, experience: 9, rating: 4.5 },
    { id: 710, name: "Dr. Debashish Ghosh", specialty: "ent", fee: 1000, nextInMin: 25, experience: 10, rating: 4.6 }
  ]
},
{
  id: 8,
  name: "Hyderabad Global Hospital",
  type: "Private",
  city: "hyderabad",
  image: "https://placehold.co/600x400/2980b9/ffffff?text=Hyderabad+Global&font=montserrat",
  rating: 4.7,
  reviews: 310,
  distanceKm: 4.5,
  address: "67 Banjara Hills Road, Hyderabad",
  phone: "+91 40 3456 7890",
  doctors: [
    { id: 801, name: "Dr. Anil Reddy", specialty: "cardiology", fee: 2200, nextInMin: 20, experience: 14, rating: 4.8 },
    { id: 802, name: "Dr. Shalini Reddy", specialty: "gynecology", fee: 1600, nextInMin: 25, experience: 11, rating: 4.7 },
    { id: 803, name: "Dr. Vivek Raju", specialty: "orthopedics", fee: 2000, nextInMin: 35, experience: 12, rating: 4.8 },
    { id: 804, name: "Dr. Swapna Rao", specialty: "dermatology", fee: 1400, nextInMin: 30, experience: 10, rating: 4.6 },
    { id: 805, name: "Dr. Kiran Kumar", specialty: "neurology", fee: 2600, nextInMin: 40, experience: 17, rating: 4.9 },
    { id: 806, name: "Dr. Harish Goud", specialty: "general", fee: 700, nextInMin: 20, experience: 8, rating: 4.5 },
    { id: 807, name: "Dr. Lavanya Iyer", specialty: "psychiatry", fee: 1500, nextInMin: 30, experience: 9, rating: 4.6 },
    { id: 808, name: "Dr. Manoj Varma", specialty: "oncology", fee: 3200, nextInMin: 45, experience: 16, rating: 4.8 },
    { id: 809, name: "Dr. Praveen Ch", specialty: "pediatrics", fee: 1000, nextInMin: 15, experience: 7, rating: 4.4 },
    { id: 810, name: "Dr. Sneha Reddy", specialty: "ent", fee: 950, nextInMin: 25, experience: 10, rating: 4.6 }
    ]
  },
  // New Hospitals Added
  {
    id: 9,
    name: "Pune Health Hub",
    type: "Private",
    city: "pune",
    image: "https://placehold.co/600x400/f39c12/ffffff?text=Pune+Health+Hub&font=montserrat",
    rating: 4.4,
    reviews: 180,
    distanceKm: 3.1,
    address: "101 Baner Road, Pune",
    phone: "+91 20 1234 5678",
    doctors: [
      { id: 901, name: "Dr. Aditi Sharma", specialty: "pediatrics", fee: 1000, nextInMin: 20, experience: 8, rating: 4.6 },
      { id: 902, name: "Dr. Vikram Joshi", specialty: "orthopedics", fee: 1700, nextInMin: 30, experience: 11, rating: 4.7 },
      { id: 903, name: "Dr. Pooja Mehta", specialty: "gynecology", fee: 1300, nextInMin: 25, experience: 10, rating: 4.5 },
      { id: 904, name: "Dr. Rakesh Singh", specialty: "cardiology", fee: 1900, nextInMin: 15, experience: 13, rating: 4.8 },
      { id: 905, name: "Dr. Smita Rao", specialty: "dermatology", fee: 1100, nextInMin: 20, experience: 7, rating: 4.4 }
    ]
  },
  {
    id: 10,
    name: "Lucknow Care Center",
    type: "Govt",
    city: "lucknow",
    image: "https://placehold.co/600x400/27ae60/ffffff?text=Lucknow+Care&font=montserrat",
    rating: 4.2,
    reviews: 95,
    distanceKm: 2.5,
    address: "202 Hazratganj, Lucknow",
    phone: "+91 522 9876 5432",
    doctors: [
      { id: 1001, name: "Dr. Alok Verma", specialty: "general", fee: 600, nextInMin: 10, experience: 6, rating: 4.3 },
      { id: 1002, name: "Dr. Suman Devi", specialty: "ent", fee: 900, nextInMin: 20, experience: 9, rating: 4.5 },
      { id: 1003, name: "Dr. Manoj Kumar", specialty: "neurology", fee: 2000, nextInMin: 35, experience: 15, rating: 4.7 }
    ]
  },
  {
    id: 11,
    name: "Delhi Advanced Medical",
    type: "Private",
    city: "delhi",
    image: "https://placehold.co/600x400/34495e/ffffff?text=Delhi+Advanced&font=montserrat",
    rating: 4.7,
    reviews: 400,
    distanceKm: 5.0,
    address: "505 Defence Colony, Delhi",
    phone: "+91 11 5678 1234",
    doctors: [
      { id: 1101, name: "Dr. Sanjeev Gupta", specialty: "oncology", fee: 3500, nextInMin: 30, experience: 20, rating: 4.9 },
      { id: 1102, name: "Dr. Rina Singh", specialty: "psychiatry", fee: 1500, nextInMin: 25, experience: 12, rating: 4.7 },
      { id: 1103, name: "Dr. Vivek Sharma", specialty: "cardiology", fee: 2800, nextInMin: 20, experience: 18, rating: 4.9 }
    ]
  },
  {
    id: 12,
    name: "Mumbai Coastal Hospital",
    type: "Govt",
    city: "mumbai",
    image: "https://placehold.co/600x400/e67e22/ffffff?text=Mumbai+Coastal&font=montserrat",
    rating: 4.1,
    reviews: 120,
    distanceKm: 1.9,
    address: "303 Juhu Beach, Mumbai",
    phone: "+91 22 1122 3344",
    doctors: [
      { id: 1201, name: "Dr. Priya Patel", specialty: "general", fee: 450, nextInMin: 10, experience: 7, rating: 4.2 },
      { id: 1202, name: "Dr. Suresh Rao", specialty: "pediatrics", fee: 850, nextInMin: 15, experience: 9, rating: 4.4 }
    ]
  },
  {
    id: 13,
    name: "Bengaluru Tech Hospital",
    type: "Private",
    city: "bengaluru",
    image: "https://placehold.co/600x400/8e44ad/ffffff?text=Bengaluru+Tech&font=montserrat",
    rating: 4.6,
    reviews: 290,
    distanceKm: 4.0,
    address: "707 Koramangala, Bengaluru",
    phone: "+91 80 5566 7788",
    doctors: [
      { id: 1301, name: "Dr. Arjun Reddy", specialty: "neurology", fee: 2500, nextInMin: 40, experience: 16, rating: 4.8 },
      { id: 1302, name: "Dr. Neha Kumar", specialty: "dermatology", fee: 1600, nextInMin: 25, experience: 10, rating: 4.6 },
      { id: 1303, name: "Dr. Rahul Sharma", specialty: "orthopedics", fee: 1900, nextInMin: 30, experience: 14, rating: 4.7 }
    ]
  },
  {
    id: 14,
    name: "Chennai Wellness Center",
    type: "Private",
    city: "chennai",
    image: "https://placehold.co/600x400/16a085/ffffff?text=Chennai+Wellness&font=montserrat",
    rating: 4.5,
    reviews: 210,
    distanceKm: 3.5,
    address: "808 Anna Salai, Chennai",
    phone: "+91 44 2233 4455",
    doctors: [
      { id: 1401, name: "Dr. Karthik Rao", specialty: "ent", fee: 1000, nextInMin: 20, experience: 11, rating: 4.5 },
      { id: 1402, name: "Dr. Shanti Devi", specialty: "gynecology", fee: 1300, nextInMin: 30, experience: 9, rating: 4.6 }
    ]
  },
  {
    id: 15,
    name: "Kolkata Heart Institute",
    type: "Private",
    city: "kolkata",
    image: "https://placehold.co/600x400/c0392b/ffffff?text=Kolkata+Heart&font=montserrat",
    rating: 4.8,
    reviews: 350,
    distanceKm: 4.8,
    address: "909 Park Circus, Kolkata",
    phone: "+91 33 5544 3322",
    doctors: [
      { id: 1501, name: "Dr. Ananya Bose", specialty: "cardiology", fee: 2300, nextInMin: 25, experience: 17, rating: 4.9 },
      { id: 1502, name: "Dr. Deb Roy", specialty: "oncology", fee: 3100, nextInMin: 35, experience: 16, rating: 4.8 }
    ]
  },
  {
    id: 16,
    name: "Hyderabad City Clinic",
    type: "Govt",
    city: "hyderabad",
    image: "https://placehold.co/600x400/7f8c8d/ffffff?text=Hyderabad+City&font=montserrat",
    rating: 4.0,
    reviews: 75,
    distanceKm: 2.2,
    address: "111 Abids Road, Hyderabad",
    phone: "+91 40 6677 8899",
    doctors: [
      { id: 1601, name: "Dr. Rajeshwari", specialty: "general", fee: 550, nextInMin: 15, experience: 5, rating: 4.1 },
      { id: 1602, name: "Dr. Srinivas", specialty: "pediatrics", fee: 950, nextInMin: 20, experience: 8, rating: 4.3 }
    ]
  },
  // Adding more hospitals to reach 4-5 per city
  {
    id: 17,
    name: "Delhi North Hospital",
    type: "Govt",
    city: "delhi",
    image: "https://placehold.co/600x400/28a745/ffffff?text=Delhi+North&font=montserrat",
    rating: 4.2,
    reviews: 150,
    distanceKm: 6.0,
    address: "Sector 15, Rohini, Delhi",
    phone: "+91 11 9988 7766",
    doctors: [
      { id: 1701, name: "Dr. Preeti Sharma", specialty: "general", fee: 500, nextInMin: 20, experience: 7, rating: 4.3 },
      { id: 1702, name: "Dr. Rohan Kapoor", specialty: "orthopedics", fee: 1100, nextInMin: 30, experience: 10, rating: 4.5 }
    ]
  },
  {
    id: 18,
    name: "Delhi South Clinic",
    type: "Private",
    city: "delhi",
    image: "https://placehold.co/600x400/fd7e14/ffffff?text=Delhi+South&font=montserrat",
    rating: 4.6,
    reviews: 280,
    distanceKm: 3.2,
    address: "Greater Kailash, Delhi",
    phone: "+91 11 1122 3344",
    doctors: [
      { id: 1801, name: "Dr. Anjali Singh", specialty: "gynecology", fee: 1400, nextInMin: 25, experience: 11, rating: 4.7 },
      { id: 1802, name: "Dr. Vikram Das", specialty: "dermatology", fee: 1300, nextInMin: 20, experience: 9, rating: 4.6 }
    ]
  },
  {
    id: 19,
    name: "Mumbai Central Hospital",
    type: "Private",
    city: "mumbai",
    image: "https://placehold.co/600x400/6f42c1/ffffff?text=Mumbai+Central&font=montserrat",
    rating: 4.5,
    reviews: 200,
    distanceKm: 2.5,
    address: "Parel, Mumbai",
    phone: "+91 22 2233 4455",
    doctors: [
      { id: 1901, name: "Dr. Sameer Joshi", specialty: "cardiology", fee: 2000, nextInMin: 20, experience: 15, rating: 4.8 },
      { id: 1902, name: "Dr. Aarti Shah", specialty: "pediatrics", fee: 950, nextInMin: 15, experience: 8, rating: 4.5 }
    ]
  },
  {
    id: 20,
    name: "Mumbai Suburban Clinic",
    type: "Govt",
    city: "mumbai",
    image: "https://placehold.co/600x400/17a2b8/ffffff?text=Mumbai+Suburban&font=montserrat",
    rating: 4.0,
    reviews: 90,
    distanceKm: 7.0,
    address: "Andheri, Mumbai",
    phone: "+91 22 5566 7788",
    doctors: [
      { id: 2001, name: "Dr. Rajeshwari Iyer", specialty: "general", fee: 400, nextInMin: 30, experience: 6, rating: 4.1 },
      { id: 2002, name: "Dr. Anil Kulkarni", specialty: "ent", fee: 800, nextInMin: 25, experience: 10, rating: 4.3 }
    ]
  },
  {
    id: 21,
    name: "Bengaluru East Clinic",
    type: "Private",
    city: "bengaluru",
    image: "https://placehold.co/600x400/dc3545/ffffff?text=Bengaluru+East&font=montserrat",
    rating: 4.3,
    reviews: 160,
    distanceKm: 5.5,
    address: "Indiranagar, Bengaluru",
    phone: "+91 80 1122 3344",
    doctors: [
      { id: 2101, name: "Dr. Kavya Rao", specialty: "psychiatry", fee: 1200, nextInMin: 30, experience: 9, rating: 4.5 },
      { id: 2102, name: "Dr. Prakash Shetty", specialty: "neurology", fee: 2100, nextInMin: 40, experience: 14, rating: 4.7 }
    ]
  },
  {
    id: 22,
    name: "Bengaluru West Hospital",
    type: "Govt",
    city: "bengaluru",
    image: "https://placehold.co/600x400/ffc107/ffffff?text=Bengaluru+West&font=montserrat",
    rating: 4.1,
    reviews: 110,
    distanceKm: 6.2,
    address: "Rajajinagar, Bengaluru",
    phone: "+91 80 9988 7766",
    doctors: [
      { id: 2201, name: "Dr. Geeta Devi", specialty: "general", fee: 500, nextInMin: 25, experience: 6, rating: 4.2 },
      { id: 2202, name: "Dr. Murali Krishna", specialty: "oncology", fee: 2800, nextInMin: 45, experience: 13, rating: 4.6 }
    ]
  },
  {
    id: 23,
    name: "Chennai North Clinic",
    type: "Govt",
    city: "chennai",
    image: "https://placehold.co/600x400/6c757d/ffffff?text=Chennai+North&font=montserrat",
    rating: 4.0,
    reviews: 80,
    distanceKm: 4.0,
    address: "Ambattur, Chennai",
    phone: "+91 44 8877 6655",
    doctors: [
      { id: 2301, name: "Dr. Suresh Kumar", specialty: "general", fee: 450, nextInMin: 15, experience: 5, rating: 4.1 },
      { id: 2302, name: "Dr. Lakshmi Priya", specialty: "pediatrics", fee: 800, nextInMin: 20, experience: 7, rating: 4.3 }
    ]
  },
  {
    id: 24,
    name: "Chennai South Hospital",
    type: "Private",
    city: "chennai",
    image: "https://placehold.co/600x400/20c997/ffffff?text=Chennai+South&font=montserrat",
    rating: 4.7,
    reviews: 300,
    distanceKm: 7.0,
    address: "OMR, Chennai",
    phone: "+91 44 3344 5566",
    doctors: [
      { id: 2401, name: "Dr. Anand Raj", specialty: "cardiology", fee: 2600, nextInMin: 30, experience: 19, rating: 4.9 },
      { id: 2402, name: "Dr. Meena Devi", specialty: "gynecology", fee: 1500, nextInMin: 25, experience: 10, rating: 4.7 }
    ]
  },
  {
    id: 25,
    name: "Kolkata East Hospital",
    type: "Govt",
    city: "kolkata",
    image: "https://placehold.co/600x400/6610f2/ffffff?text=Kolkata+East&font=montserrat",
    rating: 4.1,
    reviews: 100,
    distanceKm: 5.0,
    address: "Salt Lake City, Kolkata",
    phone: "+91 33 1122 3344",
    doctors: [
      { id: 2501, name: "Dr. Bimal Ghosh", specialty: "general", fee: 500, nextInMin: 20, experience: 6, rating: 4.2 },
      { id: 2502, name: "Dr. Rina Sen", specialty: "ent", fee: 900, nextInMin: 25, experience: 9, rating: 4.4 }
    ]
  },
  {
    id: 26,
    name: "Kolkata West Clinic",
    type: "Private",
    city: "kolkata",
    image: "https://placehold.co/600x400/e83e8c/ffffff?text=Kolkata+West&font=montserrat",
    rating: 4.4,
    reviews: 190,
    distanceKm: 3.0,
    address: "Howrah, Kolkata",
    phone: "+91 33 9988 7766",
    doctors: [
      { id: 2601, name: "Dr. Sourav Mitra", specialty: "orthopedics", fee: 1700, nextInMin: 30, experience: 12, rating: 4.6 },
      { id: 2602, name: "Dr. Priti Das", specialty: "dermatology", fee: 1200, nextInMin: 20, experience: 8, rating: 4.5 }
    ]
  },
  {
    id: 27,
    name: "Hyderabad East Clinic",
    type: "Private",
    city: "hyderabad",
    image: "https://placehold.co/600x400/ffc107/ffffff?text=Hyderabad+East&font=montserrat",
    rating: 4.3,
    reviews: 140,
    distanceKm: 3.8,
    address: "Kothapet, Hyderabad",
    phone: "+91 40 1122 3344",
    doctors: [
      { id: 2701, name: "Dr. Ramya Reddy", specialty: "psychiatry", fee: 1400, nextInMin: 25, experience: 10, rating: 4.5 },
      { id: 2702, name: "Dr. Naveen Rao", specialty: "neurology", fee: 2500, nextInMin: 35, experience: 15, rating: 4.7 }
    ]
  },
  {
    id: 28,
    name: "Hyderabad West Hospital",
    type: "Govt",
    city: "hyderabad",
    image: "https://placehold.co/600x400/007bff/ffffff?text=Hyderabad+West&font=montserrat",
    rating: 4.0,
    reviews: 85,
    distanceKm: 5.0,
    address: "Gachibowli, Hyderabad",
    phone: "+91 40 9988 7766",
    doctors: [
      { id: 2801, name: "Dr. Kiran Kumar", specialty: "general", fee: 600, nextInMin: 20, experience: 7, rating: 4.2 },
      { id: 2802, name: "Dr. Swathi Reddy", specialty: "oncology", fee: 3000, nextInMin: 40, experience: 14, rating: 4.6 }
    ]
  },
  {
    id: 29,
    name: "Pune Central Hospital",
    type: "Govt",
    city: "pune",
    image: "https://placehold.co/600x400/6c757d/ffffff?text=Pune+Central&font=montserrat",
    rating: 4.1,
    reviews: 105,
    distanceKm: 2.0,
    address: "Shivajinagar, Pune",
    phone: "+91 20 9988 7766",
    doctors: [
      { id: 2901, name: "Dr. Rahul Deshmukh", specialty: "general", fee: 500, nextInMin: 15, experience: 6, rating: 4.2 },
      { id: 2902, name: "Dr. Sneha Patil", specialty: "pediatrics", fee: 850, nextInMin: 20, experience: 8, rating: 4.4 }
    ]
  },
  {
    id: 30,
    name: "Pune South Clinic",
    type: "Private",
    city: "pune",
    image: "https://placehold.co/600x400/28a745/ffffff?text=Pune+South&font=montserrat",
    rating: 4.5,
    reviews: 220,
    distanceKm: 4.5,
    address: "Hadapsar, Pune",
    phone: "+91 20 1122 3344",
    doctors: [
      { id: 3001, name: "Dr. Amit Kulkarni", specialty: "cardiology", fee: 2100, nextInMin: 25, experience: 16, rating: 4.8 },
      { id: 3002, name: "Dr. Priyanka Singh", specialty: "gynecology", fee: 1350, nextInMin: 30, experience: 9, rating: 4.6 }
    ]
  },
  {
    id: 31,
    name: "Lucknow North Hospital",
    type: "Private",
    city: "lucknow",
    image: "https://placehold.co/600x400/ffc107/ffffff?text=Lucknow+North&font=montserrat",
    rating: 4.3,
    reviews: 130,
    distanceKm: 3.5,
    address: "Gomti Nagar, Lucknow",
    phone: "+91 522 1122 3344",
    doctors: [
      { id: 3101, name: "Dr. Vivek Mishra", specialty: "orthopedics", fee: 1600, nextInMin: 25, experience: 11, rating: 4.5 },
      { id: 3102, name: "Dr. Shalini Gupta", specialty: "dermatology", fee: 1100, nextInMin: 20, experience: 8, rating: 4.4 }
    ]
  },
  {
    id: 32,
    name: "Lucknow South Clinic",
    type: "Govt",
    city: "lucknow",
    image: "https://placehold.co/600x400/17a2b8/ffffff?text=Lucknow+South&font=montserrat",
    rating: 4.0,
    reviews: 70,
    distanceKm: 4.0,
    address: "Alambagh, Lucknow",
    phone: "+91 522 9988 7766",
    doctors: [
      { id: 3201, name: "Dr. Rakesh Singh", specialty: "general", fee: 550, nextInMin: 15, experience: 5, rating: 4.1 },
      { id: 3202, name: "Dr. Pooja Verma", specialty: "ent", fee: 850, nextInMin: 20, experience: 7, rating: 4.3 }
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
        // Enhanced combinedScore calculation for better ranking:
        // Prioritize earlier availability and higher rating more.
        // Distance and fee still matter but with slightly less weight.
        combinedScore: (d.nextInMin * 0.5) + (h.distanceKm * 0.2) + (d.fee * 0.0005) + (5 - d.rating) * 10
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

  // Limit to top 5 recommendations
  const topRecommendations = flatList.slice(0, 5);

  topRecommendations.forEach((item, index) => {
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
