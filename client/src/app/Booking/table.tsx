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
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = 'Consultation';
    const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    
    if (favicon) {
      favicon.href = '/footer.png';
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = '/footer.png';
      document.head.appendChild(link);
    }
  }, []);
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

  const filteredConsultations = consultations.filter((booking) =>
    `${booking.id} ${booking.user.name} ${booking.psychologist.name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );


  return (
    <div className="min-h-screen bg-gradient-to-b bg-white/10 py-12">
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#337bbf] font-['Outfit',Helvetica] mb-8 md:mb-6">
          Kelola Pemesanan
        </h1>

        {/* Search Bar */}
        <div className="mb-8 md:mb-10 flex items-center gap-3 max-w-md w-full bg-white border border-[#b0d4f1] rounded-full px-4 py-2 shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#337bbf"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search bookings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent focus:outline-none text-[#337bbf] placeholder:text-[#a3c4e4] text-sm sm:text-base font-['Outfit',Helvetica]"
          />
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto rounded-2xl shadow-lg bg-[#f0f8ff]">
          <Table>
            <TableHeader>
              <TableRow className="border-b-2 border-[#b0d4f1] bg-[#d6eaff]">
                {[
                  "Booking ID",
                  "Name",
                  "Psychologist",
                  "Date",
                  "Time",
                  "Status",
                  "Action",
                ].map((head, i) => (
                  <TableHead
                    key={i}
                    className={`py-5 text-left text-sm sm:text-base md:text-lg font-semibold text-[#225d99] font-['Outfit',Helvetica] ${
                      head === "Action" ? "text-center w-40" : "w-auto"
                    }`}
                  >
                    {head}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredConsultations
                .slice(currentPage * 10, (currentPage + 1) * 10)
                .map((booking, index) => (
                  <TableRow
                    key={index}
                    className={`transition duration-150 ${
                      index % 2 === 0 ? "bg-white" : "bg-[#eef6fc]"
                    } hover:bg-[#d4ecff]`}
                  >
                    <TableCell className="py-4 px-2 text-[#337bbf] text-sm sm:text-base font-['Outfit',Helvetica]">
                      {booking.id}
                    </TableCell>
                    <TableCell className="py-4 px-2 text-[#337bbf] text-sm sm:text-base font-['Outfit',Helvetica]">
                      {booking.user.name}
                    </TableCell>
                    <TableCell className="py-4 px-2 text-[#337bbf] text-sm sm:text-base font-['Outfit',Helvetica] truncate max-w-[180px]">
                      {booking.psychologist.name}
                    </TableCell>
                    <TableCell className="py-4 px-2 text-[#337bbf] text-sm sm:text-base font-['Outfit',Helvetica]">
                      {booking.consult_date}
                    </TableCell>
                    <TableCell className="py-4 px-2 text-[#337bbf] text-sm sm:text-base font-['Outfit',Helvetica]">
                      {booking.slot.start_time} - {booking.slot.end_time}
                    </TableCell>
                    <TableCell
                      className={`py-4 px-2 text-sm sm:text-base font-['Outfit',Helvetica] font-medium ${getStatusColor(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </TableCell>
                    <TableCell className="py-4 px-2 text-center">
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
