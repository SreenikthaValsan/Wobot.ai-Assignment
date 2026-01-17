import { useState, useCallback, useEffect } from "react"
import type { Camera, UpdatingStatus } from "../types"
import * as cameraApi from "../services/cameraApi"

export const useCameras = () => {
  const [cameras, setCameras] = useState<Camera[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [updatingStatus, setUpdatingStatus] = useState<UpdatingStatus>({})

  const fetchCameras = useCallback(async () => {
    try {
      setLoading(true)
      const data = await cameraApi.fetchCameras()
      setCameras(data)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCameras()
  }, [fetchCameras])

  const updateStatus = useCallback(
    async (id: number, newStatus: "Active" | "Inactive") => {
      try {
        setUpdatingStatus((prev) => ({ ...prev, [id]: true }))
        await cameraApi.updateCameraStatus(id, newStatus)
        setCameras((prev) => prev.map((cam) => (cam.id === id ? { ...cam, status: newStatus } : cam)))
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Unknown error"
        alert(`Error updating status: ${errorMsg}`)
      } finally {
        setUpdatingStatus((prev) => ({ ...prev, [id]: false }))
      }
    },
    [],
  )

  return {
    cameras,
    loading,
    error,
    updatingStatus,
    fetchCameras,
    updateStatus,
  }
}
