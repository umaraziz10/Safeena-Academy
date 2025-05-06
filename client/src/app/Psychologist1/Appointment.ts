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
  ]
  
  // Fix the getCities function to avoid using Set
  export const getCities = () => {
    const cities = appointments.map((appointment) => appointment.city || "")
    // Use a different approach to get unique values
    const uniqueCities: string[] = []
    cities.forEach(city => {
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
    dates.forEach(date => {
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
  