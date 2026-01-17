export interface Camera {
  id: number
  name: string
  location: string
  recorder: string
  current_status: string
  tasks: string | number
  status: "Active" | "Inactive"
  health?: {
    cloud?: string
    device?: string
  }
  hasWarning?: boolean
  email?: string
  model?: string
}

export interface ApiResponse {
  data: Camera[]
}

export interface UpdatingStatus {
  [key: number]: boolean
}

export interface FilterOption {
  value: string
  label: string
}
