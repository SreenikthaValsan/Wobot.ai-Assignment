import { CameraTableHeader } from "./CameraTableHeader"
import { CameraTableBody } from "./CameraTableBody"
import type { Camera, UpdatingStatus } from "../../types"

interface CameraTableProps {
  cameras: Camera[]
  selectedCameras: Set<string>
  onSelectCamera: (id: string) => void
  onStatusChange: (id: string, newStatus: "Active" | "Inactive") => void
  onDelete: (id: string) => void
  updatingStatus: UpdatingStatus
  hoveredRow: string | null
  onHoverRow: (id: string | null) => void
}

export const CameraTable = ({
  cameras,
  selectedCameras,
  onSelectCamera,
  onStatusChange,
  onDelete,
  updatingStatus,
  hoveredRow,
  onHoverRow,
}: CameraTableProps) => (
  <div className="overflow-x-auto  custom-scrollbar">
    <table className="w-full bg-product-white min-w-max">
      <CameraTableHeader />
      <CameraTableBody
        cameras={cameras}
        selectedCameras={selectedCameras}
        onSelectCamera={onSelectCamera}
        onStatusChange={onStatusChange}
        onDelete={onDelete}
        updatingStatus={updatingStatus}
        hoveredRow={hoveredRow}
        onHoverRow={onHoverRow}
      />
    </table>
  </div>
)
