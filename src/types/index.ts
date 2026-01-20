export interface Camera {
  id: string
  name: string
  location: string
  status: "active" | "inactive" | "maintenance"
  ip_address: string
  model: string
  resolution: string
  last_updated: string
}

export interface ApiResponseData {
  cameras: Camera[]
  total_count: number
  active_count: number
  offline_count: number
  maintenance_count: number
}

export interface ApiResponse {
  status: "success" | "error"
  data: ApiResponseData
  timestamp: string
  message?: string
}

export interface UpdatingStatus {
  [key: string]: boolean
}

export interface FilterOption {
  value: string
  label: string
}
export interface UpdateCameraStatusRequest {
  id: string
  status: "Active" | "Inactive"
}