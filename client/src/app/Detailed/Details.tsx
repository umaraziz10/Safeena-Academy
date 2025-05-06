import { MapPinIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from '../Component/Footer';


interface DetailsProps {
  psychologist: {
    id: string
    name: string
    image: string
    description: string
    location: string
    education: {
      university: string
      year: string
      degree: string
    }[]
  }
}

export const Details = ({ psychologist }: DetailsProps): JSX.Element => {
  return (
    <section className="w-full max-w-[1067px] mx-auto pt-6 pb-2 px-4 sm:px-6">
      <h1 className="font-bold text-[#337bbf] text-[28px] sm:text-[32px] md:text-[40px] font-['Outfit',Helvetica] mb-4 sm:mb-6">
        Psychologist Detail
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div
          className="w-full sm:w-[200px] md:w-[285px] h-[250px] sm:h-[300px] md:h-[381px] rounded-[20px] bg-cover bg-center shrink-0"
          style={{ backgroundImage: `url(${psychologist.image})` }}
        />

        <div className="flex flex-col flex-1">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-medium text-[#337bbf] font-['Outfit',Helvetica] mb-3 sm:mb-4">
            {psychologist.name}
          </h2>

          <p className="text-[14px] sm:text-[15px] text-[#337bbf] font-['Outfit',Helvetica] mb-4 sm:mb-6">
            <span className="font-medium">{psychologist.name}</span>
            <span className="font-light"> {psychologist.description}</span>
          </p>

          <div className="flex items-center mt-auto">
            <MapPinIcon className="w-5 h-5 sm:w-[25px] sm:h-[25px] text-[#337bbf] flex-shrink-0" />
            <span className="ml-2 text-[10px] sm:text-xs text-[#337bbf] font-normal font-['Outfit',Helvetica]">
              {psychologist.location}
            </span>
          </div>
        </div>
      </div>

      <Card className="mt-4 sm:mt-6 border border-solid border-[#337bbf] rounded-[10px] w-full sm:w-[90%] md:w-[705px] sm:ml-auto shadow-none">
        <CardContent className="p-4 sm:p-7">
          <div className="flex items-start">
            <div className="w-5 h-5 sm:w-[25px] sm:h-[25px] flex items-center justify-center bg-[#337bbf] rounded-md">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 1L1 5L8 9L15 5L8 1Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 11L8 15L15 11"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8L8 12L15 8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="ml-3 font-semibold text-[#337bbf] text-sm sm:text-base font-['Outfit',Helvetica]">
              Education
            </h3>
          </div>

          {psychologist.education.map((item, index) => (
            <div key={index} className="flex flex-wrap sm:flex-nowrap mt-3 sm:mt-4">
              <div className="ml-8 sm:ml-[46px] w-full sm:w-[158px] font-normal text-[#337bbf] text-xs sm:text-sm font-['Outfit',Helvetica]">
                {item.university}
              </div>
              <div className="hidden sm:block w-px h-[15px] mx-3 self-center bg-[#337bbf]" />
              <div className="ml-8 sm:ml-0 mt-1 sm:mt-0 font-light text-[#337bbf] text-xs sm:text-sm font-['Outfit',Helvetica]">
                {item.year}&nbsp;&nbsp; •&nbsp;&nbsp; {item.degree}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      
    </section>
  )
}

export default Details
