// Mock data for appointments
export interface Appointment {
  id: string
  name: string
  psychologist: string
  date: string
  time: string
  status: string
  location?: string
  city?: string
  image?: string
  email?: string
  phone?: string
  availableTimes?: string[]
}

// Generate 50 mock appointments
export const appointments: Appointment[] = [
  {
    id: "1",
    name: "John Smith",
    psychologist: "Marissa Meditania, M.Psi., Psikolog",
    date: "19/06/2025",
    time: "13:00 - 14:00",
    status: "Upcoming",
    location: "Jakarta Selatan - Pondok Jati - Kemang Jakarta, Blok Rini No. 8",
    city: "Jakarta",
    image: "/mentor.png",
    email: "john.smith@example.com",
    phone: "+62 812 3456 7890",
    availableTimes: ["13:00", "14:30", "16:00", "17:30", "19:00"],
  },
  {
    id: "2",
    name: "Emma Johnson",
    psychologist: "Dr. Anita Wijaya, M.Psi., Psikolog",
    date: "20/06/2025",
    time: "15:00 - 16:00",
    status: "Upcoming",
    location: "Bandung Utara - Dago - Jl. Ir. H. Juanda No. 120",
    city: "Bandung",
    image: "/mentor.png",
    email: "emma.johnson@example.com",
    phone: "+62 812 3456 7891",
    availableTimes: ["13:00", "15:00", "17:00", "19:00"],
  },
  {
    id: "3",
    name: "Michael Brown",
    psychologist: "Dr. Budi Santoso, M.Psi., Psikolog",
    date: "21/06/2025",
    time: "10:00 - 11:00",
    status: "Upcoming",
    location: "Surabaya Timur - Gubeng - Jl. Dharmahusada No. 45",
    city: "Surabaya",
    image: "/mentor.png",
    email: "michael.brown@example.com",
    phone: "+62 812 3456 7892",
    availableTimes: ["10:00", "13:00", "16:00", "18:30"],
  },
  {
    id: "4",
    name: "Olivia Davis",
    psychologist: "Siti Rahayu, M.Psi., Psikolog",
    date: "22/06/2025",
    time: "14:00 - 15:00",
    status: "Upcoming",
    location: "Jakarta Pusat - Menteng - Jl. Cikini Raya No. 67",
    city: "Jakarta",
    image: "/mentor.png",
    email: "olivia.davis@example.com",
    phone: "+62 812 3456 7893",
    availableTimes: ["11:00", "14:00", "16:30", "19:00"],
  },
  {
    id: "5",
    name: "William Wilson",
    psychologist: "Dr. Ahmad Hidayat, M.Psi., Psikolog",
    date: "23/06/2025",
    time: "16:00 - 17:00",
    status: "Upcoming",
    location: "Yogyakarta - Sleman - Jl. Kaliurang Km. 5 No. 12",
    city: "Yogyakarta",
    image: "/mentor.png",
    email: "william.wilson@example.com",
    phone: "+62 812 3456 7894",
    availableTimes: ["13:00", "14:30", "16:00", "17:30"],
  },
  {
    id: "6",
    name: "Sophia Martinez",
    psychologist: "Dr. Maya Putri, M.Psi., Psikolog",
    date: "24/06/2025",
    time: "11:00 - 12:00",
    status: "Upcoming",
    location: "Bandung Selatan - Buah Batu - Jl. Terusan Buah Batu No. 235",
    city: "Bandung",
    image: "/mentor.png",
    email: "sophia.martinez@example.com",
    phone: "+62 812 3456 7895",
    availableTimes: ["11:00", "13:30", "15:00", "17:30"],
  },
  {
    id: "7",
    name: "James Anderson",
    psychologist: "Rini Wulandari, M.Psi., Psikolog",
    date: "25/06/2025",
    time: "09:00 - 10:00",
    status: "Upcoming",
    location: "Jakarta Selatan - Pondok Jati - Kemang Jakarta, Blok Rini No. 8",
    city: "Jakarta",
    image: "/mentor.png",
    email: "james.anderson@example.com",
    phone: "+62 812 3456 7896",
    availableTimes: ["09:00", "11:30", "14:00", "16:30"],
  },
  {
    id: "8",
    name: "Isabella Thomas",
    psychologist: "Dr. Hadi Pratama, M.Psi., Psikolog",
    date: "26/06/2025",
    time: "13:30 - 14:30",
    status: "Upcoming",
    location: "Medan - Medan Petisah - Jl. Iskandar Muda No. 78",
    city: "Medan",
    image: "/mentor.png",
    email: "isabella.thomas@example.com",
    phone: "+62 812 3456 7897",
    availableTimes: ["10:00", "13:30", "15:00", "17:00"],
  },
  {
    id: "9",
    name: "Benjamin Jackson",
    psychologist: "Dr. Dewi Anggraini, M.Psi., Psikolog",
    date: "27/06/2025",
    time: "15:30 - 16:30",
    status: "Upcoming",
    location: "Surabaya Barat - Dukuh Pakis - Jl. Mayjen Sungkono No. 112",
    city: "Surabaya",
    image: "/mentor.png",
    email: "benjamin.jackson@example.com",
    phone: "+62 812 3456 7898",
    availableTimes: ["09:30", "12:00", "15:30", "18:00"],
  },
  {
    id: "10",
    name: "Charlotte White",
    psychologist: "Agus Setiawan, M.Psi., Psikolog",
    date: "28/06/2025",
    time: "17:00 - 18:00",
    status: "Upcoming",
    location: "Jakarta Utara - Kelapa Gading - Jl. Boulevard Raya No. 45",
    city: "Jakarta",
    image: "/mentor.png",
    email: "charlotte.white@example.com",
    phone: "+62 812 3456 7899",
    availableTimes: ["10:30", "13:00", "15:30", "17:00"],
  },
  {
    id: "11",
    name: "Daniel Harris",
    psychologist: "Dr. Rina Fitriani, M.Psi., Psikolog",
    date: "29/06/2025",
    time: "10:30 - 11:30",
    status: "Upcoming",
    location: "Bandung Timur - Antapani - Jl. Terusan Jakarta No. 56",
    city: "Bandung",
    image: "/mentor.png",
    email: "daniel.harris@example.com",
    phone: "+62 812 3456 7900",
    availableTimes: ["10:30", "12:00", "14:30", "16:00"],
  },
  {
    id: "12",
    name: "Amelia Clark",
    psychologist: "Dr. Bambang Sutrisno, M.Psi., Psikolog",
    date: "30/06/2025",
    time: "14:30 - 15:30",
    status: "Upcoming",
    location: "Yogyakarta - Bantul - Jl. Parangtritis Km. 8 No. 23",
    city: "Yogyakarta",
    image: "/mentor.png",
    email: "amelia.clark@example.com",
    phone: "+62 812 3456 7901",
    availableTimes: ["09:00", "11:30", "14:30", "17:00"],
  },
  {
    id: "13",
    name: "Henry Lewis",
    psychologist: "Sri Wahyuni, M.Psi., Psikolog",
    date: "01/07/2025",
    time: "16:30 - 17:30",
    status: "Upcoming",
    location: "Jakarta Barat - Kebon Jeruk - Jl. Panjang No. 89",
    city: "Jakarta",
    image: "/mentor.png",
    email: "henry.lewis@example.com",
    phone: "+62 812 3456 7902",
    availableTimes: ["10:00", "13:30", "16:30", "18:00"],
  },
  {
    id: "14",
    name: "Victoria Young",
    psychologist: "Dr. Joko Widodo, M.Psi., Psikolog",
    date: "02/07/2025",
    time: "11:30 - 12:30",
    status: "Upcoming",
    location: "Denpasar - Denpasar Utara - Jl. Gatot Subroto No. 123",
    city: "Denpasar",
    image: "/mentor.png",
    email: "victoria.young@example.com",
    phone: "+62 812 3456 7903",
    availableTimes: ["09:30", "11:30", "14:00", "16:30"],
  },
  {
    id: "15",
    name: "Joseph Walker",
    psychologist: "Marissa Meditania, M.Psi., Psikolog",
    date: "03/07/2025",
    time: "09:30 - 10:30",
    status: "Upcoming",
    location: "Jakarta Selatan - Pondok Jati - Kemang Jakarta, Blok Rini No. 8",
    city: "Jakarta",
    image: "/mentor.png",
    email: "joseph.walker@example.com",
    phone: "+62 812 3456 7904",
    availableTimes: ["09:30", "12:00", "14:30", "17:00"],
  },
  {
    id: "16",
    name: "Elizabeth Hall",
    psychologist: "Dr. Anita Wijaya, M.Psi., Psikolog",
    date: "03/07/2025",
    time: "13:30 - 14:30",
    status: "Upcoming",
    location: "Bandung Utara - Dago - Jl. Ir. H. Juanda No. 120",
    city: "Bandung",
    image: "/mentor.png",
    email: "elizabeth.hall@example.com",
    phone: "+62 812 3456 7905",
    availableTimes: ["10:00", "13:30", "15:00", "17:30"],
  },
  {
    id: "17",
    name: "David Allen",
    psychologist: "Dr. Budi Santoso, M.Psi., Psikolog",
    date: "03/07/2025",
    time: "15:30 - 16:30",
    status: "Upcoming",
    location: "Surabaya Timur - Gubeng - Jl. Dharmahusada No. 45",
    city: "Surabaya",
    image: "/mentor.png",
    email: "david.allen@example.com",
    phone: "+62 812 3456 7906",
    availableTimes: ["09:00", "12:30", "15:30", "18:00"],
  },
  {
    id: "18",
    name: "Sofia Wright",
    psychologist: "Siti Rahayu, M.Psi., Psikolog",
    date: "03/07/2025",
    time: "17:30 - 18:30",
    status: "Upcoming",
    location: "Jakarta Pusat - Menteng - Jl. Cikini Raya No. 67",
    city: "Jakarta",
    image: "/mentor.png",
    email: "sofia.wright@example.com",
    phone: "+62 812 3456 7907",
    availableTimes: ["10:30", "13:00", "15:30", "17:30"],
  },
  {
    id: "19",
    name: "Mia Thompson",
    psychologist: "Marissa Meditania, M.Psi., Psikolog",
    date: "03/07/2025",
    time: "19:30 - 20:30",
    status: "Done",
    location: "Jakarta Selatan - Pondok Jati - Kemang Jakarta, Blok Rini No. 8",
    city: "Jakarta",
    image: "/mentor.png",
    email: "mia.thompson@example.com",
    phone: "+62 812 3456 7908",
    availableTimes: ["13:00", "15:30", "17:00", "19:30"],
  },
  {
    id: "20",
    name: "Alexander King",
    psychologist: "Dr. Ahmad Hidayat, M.Psi., Psikolog",
    date: "04/07/2025",
    time: "10:00 - 11:00",
    status: "Upcoming",
    location: "Yogyakarta - Sleman - Jl. Kaliurang Km. 5 No. 12",
    city: "Yogyakarta",
    image: "/mentor.png",
    email: "alexander.king@example.com",
    phone: "+62 812 3456 7909",
    availableTimes: ["10:00", "12:30", "15:00", "17:30"],
  },
  {
    id: "21",
    name: "Abigail Scott",
    psychologist: "Dr. Maya Putri, M.Psi., Psikolog",
    date: "04/07/2025",
    time: "14:00 - 15:00",
    status: "Upcoming",
    location: "Bandung Selatan - Buah Batu - Jl. Terusan Buah Batu No. 235",
    city: "Bandung",
    image: "/mentor.png",
    email: "abigail.scott@example.com",
    phone: "+62 812 3456 7910",
    availableTimes: ["09:30", "12:00", "14:00", "16:30"],
  },
  {
    id: "22",
    name: "Matthew Green",
    psychologist: "Rini Wulandari, M.Psi., Psikolog",
    date: "04/07/2025",
    time: "16:00 - 17:00",
    status: "Upcoming",
    location: "Jakarta Selatan - Pondok Jati - Kemang Jakarta, Blok Rini No. 8",
    city: "Jakarta",
    image: "/mentor.png",
    email: "matthew.green@example.com",
    phone: "+62 812 3456 7911",
    availableTimes: ["10:00", "13:30", "16:00", "18:30"],
  },
  {
    id: "23",
    name: "Emily Baker",
    psychologist: "Dr. Hadi Pratama, M.Psi., Psikolog",
    date: "05/07/2025",
    time: "11:00 - 12:00",
    status: "Upcoming",
    location: "Medan - Medan Petisah - Jl. Iskandar Muda No. 78",
    city: "Medan",
    image: "/mentor.png",
    email: "emily.baker@example.com",
    phone: "+62 812 3456 7912",
    availableTimes: ["09:00", "11:00", "14:30", "17:00"],
  },
  {
    id: "24",
    name: "Andrew Adams",
    psychologist: "Dr. Dewi Anggraini, M.Psi., Psikolog",
    date: "05/07/2025",
    time: "15:00 - 16:00",
    status: "Upcoming",
    location: "Surabaya Barat - Dukuh Pakis - Jl. Mayjen Sungkono No. 112",
    city: "Surabaya",
    image: "/mentor.png",
    email: "andrew.adams@example.com",
    phone: "+62 812 3456 7913",
    availableTimes: ["10:30", "13:00", "15:00", "17:30"],
  },
  {
    id: "25",
    name: "Evelyn Nelson",
    psychologist: "Agus Setiawan, M.Psi., Psikolog",
    date: "05/07/2025",
    time: "17:00 - 18:00",
    status: "Upcoming",
    location: "Jakarta Utara - Kelapa Gading - Jl. Boulevard Raya No. 45",
    city: "Jakarta",
    image: "/mentor.png",
    email: "evelyn.nelson@example.com",
    phone: "+62 812 3456 7914",
    availableTimes: ["09:30", "12:00", "14:30", "17:00"],
  },
  {
    id: "26",
    name: "Christopher Hill",
    psychologist: "Dr. Rina Fitriani, M.Psi., Psikolog",
    date: "06/07/2025",
    time: "10:30 - 11:30",
    status: "Upcoming",
    location: "Bandung Timur - Antapani - Jl. Terusan Jakarta No. 56",
    city: "Bandung",
    image: "/mentor.png",
    email: "christopher.hill@example.com",
    phone: "+62 812 3456 7915",
    availableTimes: ["10:30", "13:00", "15:30", "18:00"],
  },
  {
    id: "27",
    name: "Grace Ramirez",
    psychologist: "Dr. Bambang Sutrisno, M.Psi., Psikolog",
    date: "06/07/2025",
    time: "14:30 - 15:30",
    status: "Upcoming",
    location: "Yogyakarta - Bantul - Jl. Parangtritis Km. 8 No. 23",
    city: "Yogyakarta",
    image: "/mentor.png",
    email: "grace.ramirez@example.com",
    phone: "+62 812 3456 7916",
    availableTimes: ["09:00", "11:30", "14:30", "17:00"],
  },
  {
    id: "28",
    name: "Samuel Campbell",
    psychologist: "Sri Wahyuni, M.Psi., Psikolog",
    date: "06/07/2025",
    time: "16:30 - 17:30",
    status: "Upcoming",
    location: "Jakarta Barat - Kebon Jeruk - Jl. Panjang No. 89",
    city: "Jakarta",
    image: "/mentor.png",
    email: "samuel.campbell@example.com",
    phone: "+62 812 3456 7917",
    availableTimes: ["10:00", "13:30", "16:30", "19:00"],
  },
  {
    id: "29",
    name: "Avery Mitchell",
    psychologist: "Dr. Joko Widodo, M.Psi., Psikolog",
    date: "07/07/2025",
    time: "11:30 - 12:30",
    status: "Upcoming",
    location: "Denpasar - Denpasar Utara - Jl. Gatot Subroto No. 123",
    city: "Denpasar",
    image: "/mentor.png",
    email: "avery.mitchell@example.com",
    phone: "+62 812 3456 7918",
    availableTimes: ["09:30", "11:30", "14:00", "16:30"],
  },
  {
    id: "30",
    name: "Ella Roberts",
    psychologist: "Marissa Meditania, M.Psi., Psikolog",
    date: "07/07/2025",
    time: "13:30 - 14:30",
    status: "Upcoming",
    location: "Jakarta Selatan - Pondok Jati - Kemang Jakarta, Blok Rini No. 8",
    city: "Jakarta",
    image: "/mentor.png",
    email: "ella.roberts@example.com",
    phone: "+62 812 3456 7919",
    availableTimes: ["10:00", "13:30", "16:00", "18:30"],
  },
]

// Fix the getCities function to avoid using Set
export const getCities = () => {
  const cities = appointments.map((appointment) => appointment.city || "")
  // Use a different approach to get unique values
  const uniqueCities: string[] = []
  cities.forEach((city) => {
    if (city !== "" && !uniqueCities.includes(city)) {
      uniqueCities.push(city)
    }
  })
  return uniqueCities
}

// Fix the getDates function to avoid using Set
export const getDates = () => {
  const dates = appointments.map((appointment) => appointment.date)
  // Use a different approach to get unique values
  const uniqueDates: string[] = []
  dates.forEach((date) => {
    if (!uniqueDates.includes(date)) {
      uniqueDates.push(date)
    }
  })

  // Sort the dates
  return uniqueDates.sort((a, b) => {
    const [dayA, monthA, yearA] = a.split("/")
    const [dayB, monthB, yearB] = b.split("/")
    return new Date(`${yearA}-${monthA}-${dayA}`).getTime() - new Date(`${yearB}-${monthB}-${dayB}`).getTime()
  })
}

// Function to get filtered and paginated data
export const getFilteredData = (
  page: number,
  itemsPerPage = 10,
  filters: {
    city?: string
    date?: string
    search?: string
  } = {},
) => {
  let filteredData = [...appointments]

  // Apply city filter
  if (filters.city && filters.city !== "All Cities") {
    filteredData = filteredData.filter((item) => item.city === filters.city)
  }

  // Apply date filter
  if (filters.date && filters.date !== "All Dates") {
    filteredData = filteredData.filter((item) => item.date === filters.date)
  }

  // Apply search filter
  if (filters.search && filters.search.trim() !== "") {
    const searchTerm = filters.search.toLowerCase().trim()
    filteredData = filteredData.filter(
      (item) => item.psychologist.toLowerCase().includes(searchTerm) || item.name.toLowerCase().includes(searchTerm),
    )
  }

  // Calculate pagination
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  return {
    data: filteredData.slice(startIndex, endIndex),
    totalItems: filteredData.length,
    totalPages: Math.ceil(filteredData.length / itemsPerPage),
  }
}

// Function to get total pages
export const getTotalPages = (itemsPerPage = 10) => {
  return Math.ceil(appointments.length / itemsPerPage)
}

// Function to get paginated data (for backward compatibility)
export const getPaginatedData = (page: number, itemsPerPage = 10) => {
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return appointments.slice(startIndex, endIndex)
}
