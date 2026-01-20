import { DeleteIcon } from "../ui/DeleteIcon"
import { StatusIcon } from "../ui/StatusIcon"
import type { Camera } from "../../types"

interface CameraTableRowProps {
  camera: Camera
  isSelected: boolean
  onSelect: () => void
  onStatusChange: (id: string, newStatus: "Active" | "Inactive") => void
  onDelete: (id: string) => void
  isUpdating: boolean
  isHovered: boolean
  onHoverChange: (hovered: boolean) => void
}

export const CameraTableRow = ({
  camera,
  isSelected,
  onSelect,
  onStatusChange,
  onDelete,
  isUpdating,
  isHovered,
  onHoverChange,
}: CameraTableRowProps) => (
  <tr
    onMouseEnter={() => onHoverChange(true)}
    onMouseLeave={() => onHoverChange(false)}
    className={`bg-product-white ${isHovered ? "bg-gray-50" : "bg-product-white"}`}
  >
    <td className="w-12 px-4 py-4 bg-product-white">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onSelect}
        className="w-4 h-4 rounded border-gray-100 text-[#24a8af] focus:ring-[#24a8af] cursor-pointer"
      />
    </td>
    <td className="px-4 py-4 bg-product-white">
      <div className="flex items-center gap-2">
        {/* <span
          className={`w-2 h-2 rounded-full ${camera.status === "active" ? "bg-online-green" : camera.status === "maintenance" ? "bg-yellow-500" : "bg-online-red"}`}
        ></span> */}
        <div>
          <div className="text-md font-normal text-gray-900">{camera.name}</div>
        </div>
      </div>
    </td>
    <td className="px-4 py-4 bg-product-white">
      <div className="text-md font-normal text-gray-600">{camera.model}</div>
    </td>
    <td className="px-4 py-4 text-md font-normal text-gray-600 bg-product-white text-center">{camera.location}</td>
    <td className="px-4 py-4 text-md font-normal text-gray-600 bg-product-white text-center">{camera.ip_address}</td>
    <td className="px-4 py-4 text-md font-normal text-gray-600 bg-product-white text-center">{camera.resolution}</td>
    <td className="px-4 py-4 bg-product-white text-center">
      <button
        onClick={() => onStatusChange(camera.id, camera.status === "active" ? "Inactive" : "Active")}
        disabled={isUpdating}
        className={`px-3 py-1 rounded text-sm font-normal border transition-colors  ${
          camera.status === "active"
            ? "bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
            : camera.status === "maintenance"
            ? "bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100"
            : "bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100"
        } ${isUpdating ? "opacity-60 cursor-wait" : "cursor-pointer"}`}
      >
        {isUpdating ? "..." : camera.status === "active" ? "Active" : camera.status === "inactive" ? "Inactive" : "Maintenance"}
      </button>
    </td>
    <td className="px-4 py-4 bg-product-white text-center">
      <div className="flex items-center">
        <StatusIcon
          status={camera.status === "active" ? "Active" : camera.status === "inactive" ? "Inactive" : "Maintenance"}
          isUpdating={isUpdating}
          onClick={() => onStatusChange(camera.id, camera.status === "active" ? "Inactive" : "Active")}
        />
        <button
          onClick={() => onDelete(camera.id)}
          disabled={isUpdating}
          className="p-1.5 hover:bg-gray-100 rounded transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          title="Deactivate camera"
        >
          <DeleteIcon />
        </button>
      </div>
    </td>
  </tr>
)
