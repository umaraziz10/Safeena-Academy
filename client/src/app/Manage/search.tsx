'use client'
import { FilterIcon, SortDescIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export const Search = ({
  onSearch,
  data,
}: {
  onSearch: (filteredData: any[]) => void;
  data: any[];
}): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filter, setFilter] = useState("");

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    filterData(e.target.value, filter, sortOrder);
  };

  // Filter the data based on search input and filter
  const filterData = (query: string, filter: string, sort: "asc" | "desc") => {
    let filteredData = data;

    // Filter by search query
    if (query) {
      filteredData = filteredData.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.email.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply filter (e.g., by role)
    if (filter) {
      filteredData = filteredData.filter((item) => item.role === filter);
    }

    // Apply sorting
    if (sort === "asc") {
      filteredData = filteredData.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      filteredData = filteredData.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Call the onSearch prop to update the parent component with filtered data
    onSearch(filteredData);
  };

  // Handle filter button click
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRole = e.target.value;
    setFilter(selectedRole);
    filterData(searchQuery, selectedRole, sortOrder);
  };


  // Handle sort button click
  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    filterData(searchQuery, filter, newSortOrder);
  };

  return (
    <div className="w-full max-w-[1069px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="relative w-full sm:flex-1">
        <Input
          className="w-full h-[50px] sm:h-[70px] bg-[#d6edfd] rounded-[20px] border-none pl-4 sm:pl-6 [font-family:'Outfit',Helvetica] font-normal text-[#8e9ca5] text-lg sm:text-xl"
          placeholder="Search Account"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
        {/* <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <FilterIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div> */}
        <select
          className="flex-1 sm:flex-none h-[42px] bg-[#337bbf] rounded-[10px] border-none flex items-center gap-2 pl-3 pr-10 appearance-none"
          onChange={handleFilterChange}
          value={filter} // Ensure the selected option is controlled
        >
          {/* Adding a default option with the filter icon */}
          <option value="" disabled>
            <span className="[font-family:'Outfit',Helvetica] font-medium text-[13px] sm:text-[15px] text-[#edd500]">
              Filter
            </span>
          </option>
          <option value="Admin">Admin</option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>
      

        <Button
          variant="outline"
          className="flex-1 sm:flex-none h-[42px] rounded-[10px] border border-solid border-[#337bbf] flex items-center gap-2"
          onClick={handleSort}
        >
          <SortDescIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#337bbf]" />
          <span className="[font-family:'Outfit',Helvetica] font-bold text-[13px] sm:text-[15px] text-[#337bbf]">
            Sort by
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Search;
