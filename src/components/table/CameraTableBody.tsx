import type { Camera, UpdatingStatus } from "../../types"
import { CameraTableRow } from "./CameraTableRow"

interface CameraTableBodyProps {
  cameras: Camera[]
  selectedCameras: Set<string>
  onSelectCamera: (id: string) => void
  onStatusChange: (id: string, newStatus: "Active" | "Inactive") => void
  onDelete: (id: string) => void
  updatingStatus: UpdatingStatus
  hoveredRow: string | null
  onHoverRow: (id: string | null) => void
}

export const CameraTableBody = ({
  cameras,
  selectedCameras,
  onSelectCamera,
  onStatusChange,
  onDelete,
  updatingStatus,
  hoveredRow,
  onHoverRow,
}: CameraTableBodyProps) => (
  <tbody className="bg-product-white">
    {cameras.length === 0 ? (
      <tr>
        <td colSpan={8} className="px-4 py-12 text-center text-gray-500 bg-product-white">
          No cameras found
        </td>
      </tr>
    ) : (
      cameras.map((camera) => (
        <CameraTableRow
          key={camera.id}
          camera={camera}
          isSelected={selectedCameras.has(camera.id)}
          onSelect={() => onSelectCamera(camera.id)}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
          isUpdating={updatingStatus[camera.id] || false}
          isHovered={hoveredRow === camera.id}
          onHoverChange={(hovered) => onHoverRow(hovered ? camera.id : null)}
        />
      ))
    )}
  </tbody>
)
