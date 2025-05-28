import { FilterIcon, SortDescIcon } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

export const Search = (): JSX.Element => {
  return (
    <div className="w-full max-w-[1069px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="relative w-full sm:flex-1">
        <Input
          className="w-full h-[50px] sm:h-[70px] bg-[#d6edfd] rounded-[20px] border-none pl-4 sm:pl-6 [font-family:'Outfit',Helvetica] font-normal text-[#8e9ca5] text-lg sm:text-xl"
          placeholder="Search Booking"
        />
      </div>
    </div>
  )
}

export default Search
