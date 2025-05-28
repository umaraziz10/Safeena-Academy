'use client';

import { useState, useEffect} from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Footer } from '../Component/Footer';
import { fetchWithToken } from '@/lib/fetchWithToken';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';
import { useRouter } from 'next/navigation';

interface TimeSlot {
  id: number;
  start_time: string;
  end_time: string;
  category: 'Morning' | 'Afternoon' | 'Evening';
}

interface GroupedTimeSlots {
  period: string;
  slots: {
    id: number;
    time: string;
    available: boolean;
  }[];
}

// interface BottomProps {
//   services: 'onsite' | 'e-counseling' |'home-visit';
//   timeSlots: number;
// }

export const Bottom = (): JSX.Element => {
  const { id } = useParams();
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<number | null>(2);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [psyID, setPsyID] = useState(0);
  const [servicesData, setServicesData] = useState<string[]>([]);
  const [groupedTimeSlots, setGroupedTimeSlots] = useState<GroupedTimeSlots[]>([]);
  const [bookedSlotIds, setBookedSlotIds] = useState<number[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);


  const handleDateChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setSelectedDate(date);

    try {
      const res = await fetchWithToken('/consultations/');
      const data = await res.json();

      const bookedSlots = data.consultations
        .filter(
          (consultation: any) =>
            consultation.psychologist_id === psyID &&
            consultation.consult_date === date
        )
        .map((consultation: any) => consultation.slot.id);

      setBookedSlotIds(bookedSlots);
    } catch (error) {
      console.error('Error fetching consultations:', error);
    }
  };

  const updatedGroupedTimeSlots = groupedTimeSlots.map((group) => ({
    ...group,
    slots: group.slots.map((slot) => ({
      ...slot,
      available: !bookedSlotIds.includes(slot.id),
    })),
  }));

  useEffect(() => {
    async function fetchPsychologist() {
      try {
        const psyRes = await fetchWithToken(`/psychologists/${id}`);
        const psyData = await psyRes.json();
        const rawTimeSlots = psyData.psychologist.timeSlots || [];
        
        setPsyID(psyData.psychologist.id);
        setServicesData(psyData.psychologist.service_type || []);

        const grouped: Record<string, GroupedTimeSlots> = {};
        rawTimeSlots.forEach((slot: any) => {
          const period = slot.category;
          const timeStr = `${slot.start_time.slice(0, 5)} - ${slot.end_time.slice(0, 5)}`;
          if (!grouped[period]) {
            grouped[period] = {
              period,
              slots: [],
            };
          }
          grouped[period].slots.push({
            id: slot.id,
            time: timeStr,
            available: true,
          });
        });
  
        setGroupedTimeSlots(Object.values(grouped));
      } catch (error) {
        console.error('Failed to fetch psychologist data:', error);
      }
    }
  
    if (id) fetchPsychologist();
  }, [id]);
  

  const handleServiceClick = (serviceType: string) => {
    setSelectedService(serviceType === selectedService ? null : serviceType);
  };  

  const handleTimeSlotClick = (slotId: number, available: boolean) => {
    if (!available) return;
    setSelectedTimeSlot(slotId === selectedTimeSlot ? null : slotId);
  };

  const handleBookAppointment = async () => {
    if (!selectedDate || !selectedService || !selectedTimeSlot || !id) return;

    const data = {
      psychologist_id: id,
      consult_date: selectedDate,
      time_slot_id: selectedTimeSlot,
      type_of_service: selectedService,
    };

    try {
      const response = await fetchWithToken('/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowSuccessModal(true);
      } else {
        console.error('Failed to book appointment:', response.status);
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div className='w-full max-w-[1067px] mx-auto my-4 sm:my-6 px-4 sm:px-6 '>
      <Card className='w-full border border-[#337bbf] rounded-[15px] bg-white shadow-none'>
        <CardContent className='p-4 sm:p-7'>
          
          {/* ===== Select Date Section ===== */}
          <section className='mb-6 sm:mb-8'>
            <motion.h2 
            variants={fadeIn('right', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className="font-['Outfit',Helvetica] font-semibold text-[#337bbf] text-xl sm:text-2xl mb-2 sm:mb-4">
              Pilih Tanggal
            </motion.h2>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="border border-[#337bbf] rounded-[10px] px-4 py-2 w-full sm:w-[260px] text-[#337bbf] font-medium outline-none focus:ring-2 focus:ring-[#337bbf]"
            />
          </section>

          {/* ===== Service Selection ===== */}
          <section className='mb-6 sm:mb-8'>
            <motion.h2 
            variants={fadeIn('right', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className="font-['Outfit',Helvetica] font-semibold text-[#337bbf] text-xl sm:text-2xl mb-4 sm:mb-6">
              Jenis Layanan
            </motion.h2>
            <div className='flex flex-wrap gap-2 sm:gap-4'>
              {servicesData.map((serviceType) => (
                <motion.div
                  key={serviceType}
                  variants={fadeIn('down', 0.1)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.7}}
                  className='w-[calc(50%-4px)] sm:w-auto min-w-[140px] sm:min-w-[160px] h-[30px]'
                >
                  <div
                    className={`relative w-full h-full rounded-[50px] border border-solid border-[#337bbf] shadow-[2px_2px_3px_#00000030] flex items-center justify-center cursor-pointer transition-colors duration-200 ${
                      selectedService === serviceType
                        ? 'bg-[#337bbf]'
                        : 'bg-white hover:bg-[#337bbf]'
                    }`}
                    onClick={() => handleServiceClick(serviceType)}
                  >
                    <div
                      className={`font-['Outfit',Helvetica] font-medium text-sm text-center whitespace-nowrap transition-colors duration-200 ${
                        selectedService === serviceType
                          ? 'text-white'
                          : 'text-[#337bbf] hover:text-white'
                      }`}
                    >
                      {serviceType === 'onsite' ? 'Ditempat' : serviceType === 'e-counseling' ? 'Konseling Daring' : serviceType}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ===== Time Slot Selection ===== */}
          <section>
            <motion.h2 
            variants={fadeIn('right', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className="font-['Outfit',Helvetica] font-semibold text-[#337bbf] text-xl sm:text-2xl mb-4 sm:mb-6">
              Jadwal Waktu
            </motion.h2>

            {updatedGroupedTimeSlots.map((timeGroup) => (
              <div key={timeGroup.period} className='mb-5 sm:mb-6'>
                <motion.h3
                  variants={fadeIn('left', 0.1)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.7 }}
                  className="font-['Outfit',Helvetica] font-normal text-[#337bbf] text-lg sm:text-xl mb-2"
                >
                  {timeGroup.period}
                </motion.h3>
                <div className='flex flex-wrap gap-2 sm:gap-3 ml-2 sm:ml-4'>
                  {timeGroup.slots.map((slot) => (
                    <motion.div
                      key={slot.id}
                      variants={fadeIn('up', 0.1)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: false, amount: 0.7 }}
                      className='w-[calc(33.33%-5.33px)] sm:w-auto min-w-[90px] sm:min-w-[106px] h-[30px]'
                    >
                      <div
                        className={`relative w-full h-full rounded-[50px] border border-solid shadow-[2px_2px_3px_#00000030] flex items-center justify-center transition-colors duration-200 ${
                          !slot.available
                            ? 'bg-[#ababab] border-[#ababab] cursor-not-allowed'
                            : selectedTimeSlot === slot.id
                            ? 'bg-[#337bbf] border-[#337bbf] cursor-pointer'
                            : 'bg-white border-[#337bbf] cursor-pointer hover:bg-[#337bbf]'
                        }`}
                        onClick={() => handleTimeSlotClick(slot.id, slot.available)}
                      >
                        <div
                          className={`font-['Outfit',Helvetica] font-medium text-[10px] sm:text-xs text-center whitespace-nowrap transition-colors duration-200 ${
                            !slot.available
                              ? 'text-[#ffffff99]'
                              : selectedTimeSlot === slot.id
                              ? 'text-white'
                              : 'text-[#337bbf] hover:text-white'
                          }`}
                        >
                          {slot.time}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* ===== Book Button ===== */}
          <section className='mt-6 sm:mt-8 flex justify-center sm:justify-start'>
            <Button
              className='w-full sm:w-[260px] h-[40px] sm:h-[50px] rounded-[10px] bg-[#337bbf] hover:bg-[#2a69a6] shadow-[2px_2px_3px_#00000030] transition-all duration-200 hover:translate-y-[-2px]'
              disabled={!selectedService || !selectedTimeSlot || !selectedDate}
              onClick={handleBookAppointment}
            >
              <span className="font-['Outfit',Helvetica] font-medium text-white text-sm sm:text-base">
                Jadwalkan Pertemuan
              </span>
            </Button>
          </section>
        </CardContent>
      </Card>

      <div className='mt-32'>
        <Footer />
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 text-center animate-fade-in">
            <h2 className="text-xl font-semibold text-[#337bbf] mb-3">
              Penjadwalan Berhasil Dijadwalkan!
            </h2>
            <p className="text-gray-700 mb-6">
              Konsultasimu berhasil di buat. Tunggu hingga admin mengkonfirmasi jadwalmu. Lihat berkala pada halaman Konsultasi.
            </p>
            <button
              onClick={() => router.push('/Psychologist')}
              className="bg-[#337bbf] text-white px-6 py-2 rounded hover:bg-yellow-500 transition"
            >
              Mengerti
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bottom;
