// Types for psychologist details
export interface PsychologistService {
    id: number
    name: string
    available: boolean
  }
  
  export interface TimeSlot {
    id: number
    time: string
    available: boolean
  }
  
  export interface TimeGroup {
    period: string
    slots: TimeSlot[]
  }
  
  // Psychologist data
  export const psychologistData = {
    id: "psy-001",
    name: "Marissa Meditania, M.Psi., Psikolog",
    image: "/mentor.png",
    description:
      "is a clinical psychologist who commonly helps adolescents and adults address psychological challenges, including emotional issues (such as anxiety and depression), relationship problems (with friends, family, or partners), stress and burnout (whether from work or parenting), personality disorders, OCD, phobias, and more. The therapeutic approaches she often uses include Cognitive Behavioural Therapy (CBT), Rational-Emotive Behavioural Therapy (REBT), Solution-Focused Therapy, Exposure Therapy, among others. Marissa is also actively involved in providing psychoeducation through seminars and webinars on topics such as workplace issues, self-development, and parenting.",
    location: "Jakarta Selatan - Ibunda.id - Konseling Jakarta, Blok Rini No, Jl. Ampera Raya No.12A, RT.6/RW.2, Ragunan",
    education: [
      {
        university: "Universitas Padjadjaran",
        year: "2016",
        degree: "Sarjana Psikologi",
      },
      {
        university: "Universitas Padjadjaran",
        year: "2020",
        degree: "Magister Profesi Psikologi Klinis Dewasa",
      },
    ],
    services: [
      { id: 1, name: "Onsite Counseling", available: true },
      { id: 2, name: "e-Counseling", available: true },
      { id: 3, name: "Home Visit Counseling", available: true },
    ],
    timeSlots: [
      {
        period: "Morning",
        slots: [
          { id: 1, time: "08:00 - 09.00", available: true },
          { id: 2, time: "09:15 - 10.15", available: true },
          { id: 3, time: "10:30 - 11.30", available: true },
        ],
      },
      {
        period: "Afternoon",
        slots: [
          { id: 4, time: "13:00 - 14.00", available: true },
          { id: 5, time: "14:15 - 15.15", available: true },
          { id: 6, time: "15:30 - 16.30", available: true },
          { id: 7, time: "16:45 - 17.45", available: true },
        ],
      },
      {
        period: "Evening",
        slots: [
          { id: 8, time: "19:30 - 20.30", available: false },
          { id: 9, time: "20:45 - 21.45", available: false },
        ],
      },
    ],
  }
  
  // Function to get psychologist availability based on appointment data
  import { appointments } from "./get-cities"
  
  export const getPsychologistAvailability = (psychologistName: string, date: string) => {
    // Find all appointments for this psychologist on this date
    const psychologistAppointments = appointments.filter(
      (appointment) => appointment.psychologist === psychologistName && appointment.date === date,
    )
  
    // Extract booked time slots
    const bookedTimes = psychologistAppointments.map((appointment) => {
      const [startTime] = appointment.time.split(" - ")
      return startTime
    })
  
    // Update availability in time slots
    const updatedTimeSlots = psychologistData.timeSlots.map((group) => {
      return {
        ...group,
        slots: group.slots.map((slot) => {
          const [slotStartTime] = slot.time.split(" - ")
          return {
            ...slot,
            available: !bookedTimes.includes(slotStartTime) && slot.available,
          }
        }),
      }
    })
  
    return {
      ...psychologistData,
      timeSlots: updatedTimeSlots,
    }
  }
  
  // Function to get available services
  export const getAvailableServices = () => {
    return psychologistData.services
  }
  