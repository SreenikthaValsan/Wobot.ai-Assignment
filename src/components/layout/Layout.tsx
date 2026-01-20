import { useState, useEffect } from "react"
import { Header } from "./Header"
import { CameraFilters, CameraFilterBar } from "../filters/CameraFilters"
import { CameraTable } from "../table/CameraTable"
import { PaginationControls } from "../pagination/PaginationControls"
import { DeleteModal } from "../ui/DeleteModal"
import { useToast } from "../../hooks/useToast"
import { useCameras } from "../../hooks/useCameras"
import { useFilters } from "../../hooks/useFilters"
import { usePagination } from "../../hooks/usePagination"

export const CameraLayout = () => {
  const { addToast } = useToast()
  const { cameras: fetchedCameras, loading, error, updatingStatus, fetchCameras, updateStatus } = useCameras()
  const [localCameras, setLocalCameras] = useState(fetchedCameras)

  useEffect(() => {
    setLocalCameras(fetchedCameras)
  }, [fetchedCameras])

  const cameras = localCameras
  const { searchTerm, setSearchTerm, statusFilter, setStatusFilter, locationFilter, setLocationFilter, locations, filteredCameras } = useFilters(cameras)
  const { currentPage, itemsPerPage, setItemsPerPage, totalPages, startIndex, endIndex, goToFirstPage, goToPreviousPage, goToNextPage, goToLastPage } = usePagination(filteredCameras.length)
  const [selectedCameras, setSelectedCameras] = useState<Set<string>>(new Set())
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [deletingCameraId, setDeletingCameraId] = useState<string | null>(null)
  const [deletingCameraName, setDeletingCameraName] = useState("")

  const currentCameras = filteredCameras.slice(startIndex, endIndex)

  const handleToggleSelectCamera = (id: string) => {
    setSelectedCameras((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const handleDeleteClick = (id: string) => {
    const camera = cameras.find((c) => c.id === id)
    if (camera) {
      setDeletingCameraId(id)
      setDeletingCameraName(camera.name)
      setDeleteModalOpen(true)
    }
  }

  const handleConfirmDelete = () => {
    if (deletingCameraId) {
      const cameraName = deletingCameraName
      setLocalCameras((prev) => prev.filter((camera) => camera.id !== deletingCameraId))
      setDeleteModalOpen(false)
      setDeletingCameraId(null)
      setDeletingCameraName("")
      addToast(`${cameraName} has been successfully deleted`, "success", 3000)
    }
  }

  const handleCancelDelete = () => {
    setDeleteModalOpen(false)
    setDeletingCameraId(null)
    setDeletingCameraName("")
  }

  const handleStatusChange = async (id: string, newStatus: "Active" | "Inactive") => {
    const camera = cameras.find((c) => c.id === id)
    try {
      await updateStatus(id, newStatus)
      if (camera) {
        addToast(`${camera.name} status changed to ${newStatus}`, "success", 3000)
      }
    } catch (err) {
      if (camera) {
        addToast(`Failed to update ${camera.name} status`, "error", 3000)
      }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center py-32">
          <div className="text-gray-500 text-base">Loading cameras...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center max-w-md mx-auto mt-20">
          <p className="text-red-700 mb-4">Error: {error}</p>
          <button
            onClick={fetchCameras}
            className="px-4 py-2 bg-[#24a8af] text-white rounded-lg hover:bg-[#1e9299] transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="px-3 sm:px-4 md:px-6 py-4 md:py-6 mx-auto max-w-7xl">
        <CameraFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          locations={locations}
        />

        <CameraFilterBar
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          locationFilter={locationFilter}
          onLocationChange={setLocationFilter}
          locations={locations}
        />

        <CameraTable
          cameras={currentCameras}
          selectedCameras={selectedCameras}
          onSelectCamera={handleToggleSelectCamera}
          onStatusChange={handleStatusChange}
          onDelete={handleDeleteClick}
          updatingStatus={updatingStatus}
          hoveredRow={hoveredRow}
          onHoverRow={setHoveredRow}
        />

        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={filteredCameras.length}
          startIndex={startIndex}
          endIndex={endIndex}
          onItemsPerPageChange={setItemsPerPage}
          onGoToFirstPage={goToFirstPage}
          onGoToPreviousPage={goToPreviousPage}
          onGoToNextPage={goToNextPage}
          onGoToLastPage={goToLastPage}
        />
      </div>

      <DeleteModal
        isOpen={deleteModalOpen}
        itemName={deletingCameraName}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  )
}
