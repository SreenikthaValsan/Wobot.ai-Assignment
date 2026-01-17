import { API_BASE, AUTH_TOKEN } from "../constants/config"
import type { Camera, ApiResponse } from "../types"

const getHeaders = () => ({
  Authorization: `Bearer ${AUTH_TOKEN}`,
  "Content-Type": "application/json",
})

export const fetchCameras = async (): Promise<Camera[]> => {
  const response = await fetch(`${API_BASE}/fetch/cameras`, {
    headers: getHeaders(),
  })

  if (!response.ok) throw new Error("Failed to fetch cameras")

  const result: ApiResponse = await response.json()
  return result.data || []
}

export const updateCameraStatus = async (id: number, status: "Active" | "Inactive"): Promise<void> => {
  const response = await fetch(`${API_BASE}/update/camera/status`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify({ id, status }),
  })

  if (!response.ok) throw new Error("Failed to update status")
}
