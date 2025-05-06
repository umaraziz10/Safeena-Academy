'use client'
import React, { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../../components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Search, Edit, Trash2 } from "lucide-react";
import { fetchWithToken } from "@/lib/fetchWithToken";
import SearchComponent from './search';

export const Tables = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(0);
  const [users, setUsers] = useState<any[]>([]); // Users data from the API
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]); // Filtered users after search, filter, and sort
  const [totalPages, setTotalPages] = useState(0); // Total pages from API

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchWithToken('/users'); // API call to fetch user data
        const data = await response.json(); // Assuming the response is a JSON object
        const pageSize = 10; // Adjust according to your pagination needs

        setUsers(data); // Set the users data
        setFilteredUsers(data); // Set filtered data to the initial data
        setTotalPages(Math.ceil(data.length / pageSize)); // Calculate total pages
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Update filtered data whenever search, filter, or sort changes
  const updateFilteredData = (filteredData: any[]) => {
    setFilteredUsers(filteredData);
    setTotalPages(Math.ceil(filteredData.length / 10)); // Recalculate total pages after filtering
  };

  // Paginate the data
  const paginatedData = filteredUsers.slice(currentPage * 10, (currentPage + 1) * 10);

  return (
    <div className="min-h-screen bg-gradient-to-b bg-white/10 py-12">
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#337bbf] font-['Outfit',Helvetica] mb-8 md:mb-12">
          Manage Accounts
        </h1>

        {/* Search, filter, and sort component */}
        <SearchComponent data={users} onSearch={updateFilteredData} />

        <div className="w-full overflow-x-auto rounded-xl shadow-lg">
          <Table>
            <TableHeader>
              <TableRow className="border-b-2 border-[#337bbf20]">
                <TableHead className="text-left w-20 py-6 text-base sm:text-lg md:text-xl font-medium text-[#337bbf] font-['Outfit',Helvetica]">
                  No
                </TableHead>
                <TableHead className="text-left w-32 py-6 text-base sm:text-lg md:text-xl font-medium text-[#337bbf] font-['Outfit',Helvetica]">
                  Id
                </TableHead>
                <TableHead className="text-left w-64 py-6 text-base sm:text-lg md:text-xl font-medium text-[#337bbf] font-['Outfit',Helvetica]">
                  Name
                </TableHead>
                <TableHead className="text-left w-32 py-6 text-base sm:text-lg md:text-xl font-medium text-[#337bbf] font-['Outfit',Helvetica]">
                  Role
                </TableHead>
                <TableHead className="text-left py-6 text-base sm:text-lg md:text-xl font-medium text-[#337bbf] font-['Outfit',Helvetica]">
                  Email
                </TableHead>
                <TableHead className="text-center w-40 py-6 text-base sm:text-lg md:text-xl font-medium text-[#337bbf] font-['Outfit',Helvetica]">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((account, index) => (
                <TableRow
                  key={index}
                  className={index % 2 === 0 ? "bg-[#f8fafc]" : "bg-[#337bbf08]"}
                >
                  <TableCell className="py-4 text-left font-normal font-['Outfit',Helvetica] text-sm sm:text-base text-[#337bbf]">
                  {currentPage * 10 + index + 1} {/* Auto-increment logic */}
                  </TableCell>
                  <TableCell className="py-4 text-left font-normal font-['Outfit',Helvetica] text-sm sm:text-base text-[#337bbf]">
                    {account.id}
                  </TableCell>
                  <TableCell className="py-4 text-left font-normal font-['Outfit',Helvetica] text-sm sm:text-base text-[#337bbf]">
                    {account.name}
                  </TableCell>
                  <TableCell className="py-4 text-left font-normal font-['Outfit',Helvetica] text-sm sm:text-base text-[#337bbf]">
                    {account.role}
                  </TableCell>
                  <TableCell className="py-4 text-left font-normal font-['Outfit',Helvetica] text-sm sm:text-base text-[#337bbf] truncate max-w-[300px]">
                    {account.email}
                  </TableCell>
                  <TableCell className="py-4">
                    <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                      <button className="p-2 hover:bg-[#337bbf20] rounded-full transition-colors">
                        <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#337bbf]" />
                      </button>
                      <button className="p-2 hover:bg-[#337bbf20] rounded-full transition-colors">
                        <Edit className="w-5 h-5 sm:w-6 sm:h-6 text-[#337bbf]" />
                      </button>
                      <button className="p-2 hover:bg-[#337bbf20] rounded-full transition-colors">
                        <Trash2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#337bbf]" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-center mt-8">
          <Pagination>
            <PaginationContent className="gap-1 sm:gap-2">
              <PaginationItem>
                <button 
                  className="p-2 hover:bg-[#337bbf20] rounded-full transition-colors"
                  onClick={() => handlePageChange(0)}
                  disabled={currentPage === 0}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2L5 6L9 10" stroke="#337bbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 2L1 6L5 10" stroke="#337bbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </PaginationItem>
              <PaginationItem>
                <button 
                  className="p-2 hover:bg-[#337bbf20] rounded-full transition-colors"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 0}
                >
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2L3 6L7 10" stroke="#337bbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </PaginationItem>
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <button
                    onClick={() => handlePageChange(index)}
                    className={`px-4 py-1 rounded-full ${currentPage === index ? "bg-[#edd500] font-medium" : "hover:bg-[#337bbf20]"}`}
                  >
                    <span className={`text-xs sm:text-sm text-[#337bbf] font-['Outfit',Helvetica] ${currentPage === index ? "font-medium" : "font-light"}`}>
                      {index + 1}
                    </span>
                  </button>
                </PaginationItem>
              ))}
              <PaginationItem>
                <button 
                  className="p-2 hover:bg-[#337bbf20] rounded-full transition-colors"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages - 1}
                >
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 10L5 6L1 2" stroke="#337bbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </PaginationItem>
              <PaginationItem>
                <button 
                  className="p-2 hover:bg-[#337bbf20] rounded-full transition-colors"
                  onClick={() => handlePageChange(totalPages - 1)}
                  disabled={currentPage === totalPages - 1}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 10L7 6L3 2" stroke="#337bbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10L11 6L7 2" stroke="#337bbf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </div>
  );
};

export default Tables;
