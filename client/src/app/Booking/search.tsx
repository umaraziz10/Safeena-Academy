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

      <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
        <Button
          variant="outline"
          className="flex-1 sm:flex-none h-[42px] bg-[#337bbf] rounded-[10px] border-none flex items-center gap-2"
        >
          <FilterIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          <span className="[font-family:'Outfit',Helvetica] font-medium text-[13px] sm:text-[15px] text-[#edd500]">
            Filter
          </span>
        </Button>

        <Button
          variant="outline"
          className="flex-1 sm:flex-none h-[42px] rounded-[10px] border border-solid border-[#337bbf] flex items-center gap-2"
        >
          <SortDescIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#337bbf]" />
          <span className="[font-family:'Outfit',Helvetica] font-bold text-[13px] sm:text-[15px] text-[#337bbf]">
            Sort by
          </span>
        </Button>
      </div>
    </div>
  )
}

export default Search
