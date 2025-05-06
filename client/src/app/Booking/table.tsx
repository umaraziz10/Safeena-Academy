'use client'
import React, { useState, useEffect } from "react";
import { Pagination, PaginationContent, PaginationItem } from "../../components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Check, X, Clock, Trash } from "lucide-react";
import { fetchWithToken } from "@/lib/fetchWithToken";
import { patchWithToken } from "@/lib/patchWithToken";

export const Tables = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [consultations, setConsultations] = useState<any[]>([]); // Stores the fetched consultation data

  // Fetch consultations data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchWithToken('/consultations');
        const data = await response.json();

        // Assuming the response has a 'consultations' array with the required data
        setConsultations(data.consultations);

        const pageSize = 10; // Pagination: Set page size as 10 (adjust as needed)
        setTotalPages(Math.ceil(data.consultations.length / pageSize));
      } catch (error) {
        console.error("Error fetching consultation data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle page change for pagination
  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleStatusChange = async (bookingId: number, newStatus: string) => {
    const validStatuses = ['approved', 'pending', 'done', 'declined']; // List of valid enum statuses
  
    // Ensure the newStatus is valid
    if (!validStatuses.includes(newStatus)) {
      alert(`Invalid status: ${newStatus}`); // Optionally, notify the user
      return;
    }
  
    try {
      // Use patchWithToken to make the PATCH request with the status
      const response = await patchWithToken(
        `/consultations/${bookingId}/status`,
        { status: newStatus } // Send status in the body of the request
      );
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message); // Show success message
      } else {
        console.error('Failed to update status:', data.errors); // Log detailed errors from the response
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  
  
  const handleDeleteBooking = async (bookingId: number) => {
    try {
      const response = await fetchWithToken(`/consultations/${bookingId}`, {
        method: 'DELETE',
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Booking deleted successfully.");
      } else {
        console.error('Failed to delete booking:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  // Helper function to determine status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Done":
        return "text-green-600";
      case "Approved":
        return "text-green-600";
      case "Declined":
        return "text-red-500";
      case "Pending":
        return "text-amber-500";
      default:
        return "text-[#337bbf]";
    }
  };

  const ActionButtons = ({ bookingId }: { bookingId: number }) => {
    return (
      <div className="flex items-center justify-center space-x-2 sm:space-x-3">
        <button
          className="p-1.5 bg-green-100 hover:bg-green-200 rounded-full transition-colors"
          onClick={() => handleStatusChange(bookingId, 'approved')}
        >
          <Check className="w-5 h-5 sm:w-5 sm:h-5 text-green-500" />
        </button>
        <button
          className="p-1.5 bg-red-100 hover:bg-red-200 rounded-full transition-colors"
          onClick={() => handleStatusChange(bookingId, 'declined')}
        >
          <X className="w-5 h-5 sm:w-5 sm:h-5 text-red-500" />
        </button>
        <button
          className="p-1.5 bg-amber-100 hover:bg-amber-200 rounded-full transition-colors"
          onClick={() => handleStatusChange(bookingId, 'pending')}
        >
          <Clock className="w-5 h-5 sm:w-5 sm:h-5 text-amber-500" />
        </button>
        <button
          className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          onClick={() => handleDeleteBooking(bookingId)}
        >
          <Trash className="w-5 h-5 sm:w-5 sm:h-5 text-gray-500" />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b bg-white/10 py-12">
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#337bbf] font-['Outfit',Helvetica] mb-8 md:mb-12">
          Manage Bookings
        </h1>

        <div className="w-full overflow-x-auto rounded-xl shadow-lg bg-[#e6f4ff]">
          <Table>
            <TableHeader>
              <TableRow className="border-b-2 border-[#337bbf20]">
                <TableHead className="text-left w-20 py-6 text-base sm:text-lg md:text-xl font-medium text-[#337bbf] font-['Outfit',Helvetica]">Booking Id</TableHead>
                <TableHead className="text-left w-48 py-6 text-base sm:text-lg md:text-xl font-medium text-[#337bbf] font-['Outfit',Helvetica]">Name</TableHead>
                <TableHead className="text-left w-64 py-6 text-base sm:text-lg md:text-xl font-medium text-[#337bbf] font-['Outfit',Helvetica]">Psychologist</TableHead>
                <TableHead className="text-left w-32 py-6 text-base sm:text-lg md:text-xl font-medium text-[#337bbf] font-['Outfit',Helvetica]">Date</TableHead>
                <TableHead className="text-left w-32 py-6 text-base sm:text-lg md:text-xl font-medium text-[#337bbf] font-['Outfit',Helvetica]">Time</TableHead>
                <TableHead className="text-left w-32 py-6 text-base sm:text-lg md:text-xl font-medium text-[#337bbf] font-['Outfit',Helvetica]">Status</TableHead>
                <TableHead className="text-center w-40 py-6 text-base sm:text-lg md:text-xl font-medium text-[#337bbf] font-['Outfit',Helvetica]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {consultations.slice(currentPage * 10, (currentPage + 1) * 10).map((booking, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-[#e6f4ff]"}>
                  <TableCell className="py-4 text-left font-normal font-['Outfit',Helvetica] text-sm sm:text-base text-[#337bbf]">{booking.id}</TableCell>
                  <TableCell className="py-4 text-left font-normal font-['Outfit',Helvetica] text-sm sm:text-base text-[#337bbf]">{booking.user.name}</TableCell>
                  <TableCell className="py-4 text-left font-normal font-['Outfit',Helvetica] text-sm sm:text-base text-[#337bbf]">{booking.psychologist.name}</TableCell>
                  <TableCell className="py-4 text-left font-normal font-['Outfit',Helvetica] text-sm sm:text-base text-[#337bbf]">{booking.consult_date}</TableCell>
                  <TableCell className="py-4 text-left font-normal font-['Outfit',Helvetica] text-sm sm:text-base text-[#337bbf]">{booking.slot.start_time} - {booking.slot.end_time}</TableCell>
                  <TableCell className={`py-4 text-left font-normal font-['Outfit',Helvetica] text-sm sm:text-base ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </TableCell>
                  <TableCell className="py-4">
                    <ActionButtons bookingId={booking.id} />
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
                    <path
                      d="M9 2L5 6L9 10"
                      stroke="#337bbf"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 2L1 6L5 10"
                      stroke="#337bbf"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
                    <path
                      d="M7 2L3 6L7 10"
                      stroke="#337bbf"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </PaginationItem>
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <button
                    onClick={() => handlePageChange(index)}
                    className={`px-4 py-1 rounded-full ${
                      currentPage === index ? "bg-[#edd500] font-medium" : "hover:bg-[#337bbf20]"
                    }`}
                  >
                    <span
                      className={`text-xs sm:text-sm text-[#337bbf] font-['Outfit',Helvetica] ${
                        currentPage === index ? "font-medium" : "font-light"
                      }`}
                    >
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
                    <path
                      d="M1 10L5 6L1 2"
                      stroke="#337bbf"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
                    <path
                      d="M3 10L7 6L3 2"
                      stroke="#337bbf"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 10L11 6L7 2"
                      stroke="#337bbf"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </div>
  );
}

export default Tables;
