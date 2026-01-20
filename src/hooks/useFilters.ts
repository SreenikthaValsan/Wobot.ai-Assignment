import { useState, useMemo } from "react"
import type { Camera } from "../types"

export const useFilters = (cameras: Camera[]) => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [locationFilter, setLocationFilter] = useState<string>("all")

  const locations = useMemo(() => {
    const uniqueLocations = [...new Set(cameras.map((cam) => cam.location).filter(Boolean))]
    return uniqueLocations.sort()
  }, [cameras])

  const filteredCameras = useMemo(() => {
    return cameras.filter((camera) => {
      const matchesSearch =
        camera.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        camera.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        camera.model?.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus = statusFilter === "all" || camera.status === statusFilter
      const matchesLocation = locationFilter === "all" || camera.location === locationFilter

      return matchesSearch && matchesStatus && matchesLocation
    })
  }, [cameras, searchTerm, statusFilter, locationFilter])

  return {
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    locationFilter,
    setLocationFilter,
    locations,
    filteredCameras,
  }
}
