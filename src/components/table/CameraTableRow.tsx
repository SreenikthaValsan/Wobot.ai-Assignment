import CloudIcon from "../../assets/Cloud.png"
import DeviceIcon from "../../assets/Edge.png"
import WarningIcon from "../../assets/Warning.png"
import { DeleteIcon } from "../ui/DeleteIcon"
import { StatusIcon } from "../ui/StatusIcon"
import { HealthIndicator } from "../ui/HealthIndicator"
import type { Camera } from "../../types"

interface CameraTableRowProps {
  camera: Camera
  isSelected: boolean
  onSelect: () => void
  onStatusChange: (id: number, newStatus: "Active" | "Inactive") => void
  onDelete: (id: number) => void
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
        <span
          className={`w-2 h-2 rounded-full ${camera.current_status === "Online" ? "bg-online-green" : "bg-online-red"}`}
        ></span>
        <div>
          <div className="text-md font-normal text-gray-900 flex items-center gap-1">
            {camera.name}
            {camera.hasWarning && <img src={WarningIcon} alt="Warning" />}
          </div>
        </div>
      </div>
    </td>
    <td className="px-4 py-4 bg-product-white">
      <div className="flex items-center gap-1.5">
        <img src={CloudIcon} alt="Cloud" />
        <HealthIndicator value={camera.health?.cloud} />

        <img src={DeviceIcon} alt="Device" />
        <HealthIndicator value={camera.health?.device} />
      </div>
    </td>
    <td className="px-4 py-4 text-md font-normal text-gray-600 bg-product-white text-center">{camera.location || "N/A"}</td>
    <td className="px-4 py-4 text-md font-normal text-gray-600 bg-product-white text-center">{camera.recorder || "N/A"}</td>
    <td className="px-4 py-4 text-md font-normal text-gray-600 bg-product-white text-center">
      {camera.tasks ? `${camera.tasks} Tasks` : "N/A"}
    </td>
    <td className="px-4 py-4 bg-product-white text-center">
      <button
        onClick={() => onStatusChange(camera.id, camera.status === "Active" ? "Inactive" : "Active")}
        disabled={isUpdating}
        className={`px-3 py-1 rounded text-sm font-normal border transition-colors  ${
          camera.status === "Active"
            ? "bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
            : "bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100"
        } ${isUpdating ? "opacity-60 cursor-wait" : "cursor-pointer"}`}
      >
        {isUpdating ? "..." : camera.status}
      </button>
    </td>
    <td className="px-4 py-4 bg-product-white text-center">
      <div className="flex items-center">
        <StatusIcon
          status={camera.status}
          isUpdating={isUpdating}
          onClick={() => onStatusChange(camera.id, camera.status === "Active" ? "Inactive" : "Active")}
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
