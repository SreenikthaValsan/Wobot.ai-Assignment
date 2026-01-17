import { useState, useEffect } from "react"
import { DEFAULT_ITEMS_PER_PAGE } from "../constants/config"

export const usePagination = (itemsCount: number, onFilterChange?: () => void) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(DEFAULT_ITEMS_PER_PAGE)

  useEffect(() => {
    setCurrentPage(1)
    onFilterChange?.()
  }, [itemsCount, onFilterChange])

  const totalPages = Math.ceil(itemsCount / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  const goToFirstPage = () => setCurrentPage(1)
  const goToPreviousPage = () => goToPage(currentPage - 1)
  const goToNextPage = () => goToPage(currentPage + 1)
  const goToLastPage = () => setCurrentPage(totalPages)

  return {
    currentPage,
    itemsPerPage,
    setItemsPerPage,
    totalPages,
    startIndex,
    endIndex,
    goToPage,
    goToFirstPage,
    goToPreviousPage,
    goToNextPage,
    goToLastPage,
  }
}
