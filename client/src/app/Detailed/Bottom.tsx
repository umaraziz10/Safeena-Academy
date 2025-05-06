'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { PsychologistService, TimeGroup } from './psychologist-data';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../Component/Footer';
import { fetchWithToken } from "@/lib/fetchWithToken";
interface BottomProps {
  services: PsychologistService[];
  timeSlots: TimeGroup[];
}

export const Bottom = ({ services, timeSlots }: BottomProps): JSX.Element => {
  const [selectedService, setSelectedService] = useState<number | null>(3); // Default to Home Visit Counseling
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<number | null>(2); // Default to 09:15 - 10:15

  const handleServiceClick = (serviceId: number) => {
    setSelectedService(serviceId === selectedService ? null : serviceId);
  };

  const handleTimeSlotClick = (slotId: number, available: boolean) => {
    if (!available) return;
    setSelectedTimeSlot(slotId === selectedTimeSlot ? null : slotId);
  };

  // const navigate = useNavigate();

  const handleBookAppointment = async () => {
    const data = {
      psychologist_id: 1,
      consult_date: '2025-05-06',
      time_slot_id: selectedTimeSlot,
      type_of_service: selectedService, // Assuming selectedService holds the type
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
        // Redirect to /Psychologist after successful POST
        // navigate('/Psychologist');
      } else {
        console.error('Failed to book appointment:', response.status);
        // Optionally handle errors like displaying a message to the user
      }
    } catch (error) {
      console.error('Error posting data:', error);
      // Optionally handle network errors
    }
  };


  return (
    <div className='w-full max-w-[1067px] mx-auto my-4 sm:my-6 px-4 sm:px-6 '>
      <Card className='w-full border border-[#337bbf] rounded-[15px] bg-white shadow-none'>
        <CardContent className='p-4 sm:p-7'>
          <section className='mb-6 sm:mb-8'>
            <h2 className="font-['Outfit',Helvetica] font-semibold text-[#337bbf] text-xl sm:text-2xl mb-4 sm:mb-6">
              Type of Services
            </h2>
            <div className='flex flex-wrap gap-2 sm:gap-4'>
              {services.map((service) => (
                <div
                  key={service.id}
                  className='w-[calc(50%-4px)] sm:w-auto min-w-[140px] sm:min-w-[160px] h-[30px]'
                >
                  <div
                    className={`relative w-full h-full rounded-[50px] border border-solid border-[#337bbf] shadow-[2px_2px_3px_#00000030] flex items-center justify-center cursor-pointer transition-colors duration-200 ${
                      selectedService === service.id
                        ? 'bg-[#337bbf]'
                        : 'bg-white hover:bg-[#337bbf]'
                    } ${
                      !service.available ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={() =>
                      service.available && handleServiceClick(service.id)
                    }
                  >
                    <div
                      className={`font-['Outfit',Helvetica] font-medium text-xs text-center whitespace-nowrap transition-colors duration-200 ${
                        selectedService === service.id
                          ? 'text-white'
                          : 'text-[#337bbf] hover:text-white'
                      } ${!service.available ? 'text-[#337bbf]' : ''}`}
                    >
                      {service.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-['Outfit',Helvetica] font-semibold text-[#337bbf] text-xl sm:text-2xl mb-4 sm:mb-6">
              Schedule Time
            </h2>

            {timeSlots.map((timeGroup) => (
              <div key={timeGroup.period} className='mb-5 sm:mb-6'>
                <h3 className="font-['Outfit',Helvetica] font-normal text-[#337bbf] text-lg sm:text-xl mb-2">
                  {timeGroup.period}
                </h3>
                <div className='flex flex-wrap gap-2 sm:gap-3 ml-2 sm:ml-4'>
                  {timeGroup.slots.map((slot) => (
                    <div
                      key={slot.id}
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
                        onClick={() =>
                          handleTimeSlotClick(slot.id, slot.available)
                        }
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
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className='mt-6 sm:mt-8 flex justify-center sm:justify-start'>
          <Button
            className='w-full sm:w-[260px] h-[40px] sm:h-[50px] rounded-[10px] bg-[#337bbf] hover:bg-[#2a69a6] shadow-[2px_2px_3px_#00000030] transition-all duration-200 hover:translate-y-[-2px]'
            disabled={!selectedService || !selectedTimeSlot}
            onClick={handleBookAppointment}
          >
            <span className="font-['Outfit',Helvetica] font-medium text-white text-sm sm:text-base">
              Book Appointment
            </span>
          </Button>
          </section>
        </CardContent>
      </Card>
      <div className='mt-32'>
        <Footer />
      </div>
    </div>
  );
};

export default Bottom;
