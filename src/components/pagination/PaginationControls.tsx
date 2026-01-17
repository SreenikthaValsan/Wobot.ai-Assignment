import DownIcon from "../../assets/downicon.png"
import ArrowLeftLeftIcon from "../../assets/arrow left-left.png"
import ArrowLeftIcon from "../../assets/arrow left.png"
import ArrowRightIcon from "../../assets/arrow right.png"
import ArrowRightRightIcon from "../../assets/arrow right-right.png"
import { useState, useRef, useEffect } from "react"

interface PaginationControlsProps {
  currentPage: number
  totalPages: number
  itemsPerPage: number
  totalItems: number
  startIndex: number
  endIndex: number
  onItemsPerPageChange: (items: number) => void
  onGoToFirstPage: () => void
  onGoToPreviousPage: () => void
  onGoToNextPage: () => void
  onGoToLastPage: () => void
}

export const PaginationControls = ({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  startIndex,
  endIndex,
  onItemsPerPageChange,
  onGoToFirstPage,
  onGoToPreviousPage,
  onGoToNextPage,
  onGoToLastPage,
}: PaginationControlsProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleItemsPerPageChange = (items: number) => {
    onItemsPerPageChange(items)
    onGoToFirstPage()
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 sm:gap-4 mt-6 text-xs sm:text-sm text-gray-600 p-3 sm:p-4 rounded-lg border border-gray-100">
      <div className="relative w-full sm:w-auto">
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full sm:w-auto gap-2 px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md text-xs sm:text-sm text-gray-600 bg-white hover:border-gray-400 focus:outline-none focus:border-[#24a8af] focus:ring-1 focus:ring-[#24a8af] transition-all shadow-sm"
        >
          <span className="font-medium">{itemsPerPage}</span>
          <img src={DownIcon} alt="Show options"/>
        </button>

        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 w-full sm:w-auto overflow-hidden"
          >
            {[10, 20, 50].map((option) => (
              <button
                key={option}
                onClick={() => handleItemsPerPageChange(option)}
                className={`
                  w-full px-3 py-2.5 text-left text-xs sm:text-sm transition-all duration-200 hover:bg-gray-50
                  ${
                    itemsPerPage === option
                      ? "bg-[#24a8af] text-white font-semibold shadow-md"
                      : "text-gray-700 hover:text-[#24a8af] hover:font-medium"
                  }
                `}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      <span className="text-gray-600 whitespace-nowrap">
        {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems}
      </span>

      <div className="flex items-center gap-1 ml-auto sm:ml-0">
        <button
          onClick={onGoToFirstPage}
          disabled={currentPage === 1}
          className="p-1 hover:bg-gray-100 rounded-md disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="First page"
          aria-label="First page"
        >
          <img src={ArrowLeftLeftIcon} alt="ArrowLeftLeftIcon"  />
        </button>
        <button
          onClick={onGoToPreviousPage}
          disabled={currentPage === 1}
          className="p-1 hover:bg-gray-100 rounded-md disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="Previous page"
          aria-label="Previous page"
        >
          <img src={ArrowLeftIcon} alt="ArrowLeftIcon"  />
        </button>
        <button
          onClick={onGoToNextPage}
          disabled={currentPage === totalPages}
          className="p-1 hover:bg-gray-100 rounded-md disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="Next page"
          aria-label="Next page"
        >
          <img src={ArrowRightIcon} alt="ArrowRightIcon"  />
        </button>
        <button
          onClick={onGoToLastPage}
          disabled={currentPage === totalPages}
          className="p-1 hover:bg-gray-100 rounded-md disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          title="Last page"
          aria-label="Last page"
        >
          <img src={ArrowRightRightIcon} alt="ArrowRightRightIcon"  />
        </button>
      </div>
    </div>
  )
}
