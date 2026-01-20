import { API_BASE, AUTH_TOKEN , API_UPDATE } from "../constants/config"
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
  return result.data.cameras || []
}

export const updateCameraStatus = async (id: string, status: "Active" | "Inactive"): Promise<void> => {
  // Extract numeric ID from string ID (e.g., "cam_001" -> 1)
  const numericId = parseInt(id.split("_")[1], 10)
  
  const response = await fetch(`${API_UPDATE}/update/camera/status`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify({ id: numericId, status }),
  })

  if (!response.ok) throw new Error("Failed to update status")
}
