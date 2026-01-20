import NotInterestedIcon from "../../assets/not-interested.png"
import CheckCircleOutlineIcon from "../../assets/check_circle_outline.png"

interface StatusIconProps {
  status: "Active" | "Inactive" | "Maintenance"
  isUpdating?: boolean
  onClick?: () => void
}

export const StatusIcon = ({
  status,
  isUpdating = false,
  onClick,
}: StatusIconProps) => {
  const icon = status === "Active" ? NotInterestedIcon : CheckCircleOutlineIcon
  const tooltip = status === "Active" ? "Click to deactivate" : "Click to activate"

  return (
    <button
      onClick={onClick}
      disabled={isUpdating}
      className="p-1.5 hover:bg-gray-100 rounded transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      title={tooltip}
    >
      <img src={icon} alt={status} />
    </button>
  )
}
