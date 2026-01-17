import { useEffect } from "react"
import type { Toast } from "../../types/toast";

interface ToastItemProps {
  toast: Toast
  onClose: () => void
}

const getBackgroundColor = (type: Toast["type"]): string => {
  switch (type) {
    case "success":
      return "bg-green-50 border-green-200"
    case "error":
      return "bg-red-50 border-red-200"
    case "warning":
      return "bg-yellow-50 border-yellow-200"
    case "info":
    default:
      return "bg-blue-50 border-blue-200"
  }
}

const getTextColor = (type: Toast["type"]): string => {
  switch (type) {
    case "success":
      return "text-green-800"
    case "error":
      return "text-red-800"
    case "warning":
      return "text-yellow-800"
    case "info":
    default:
      return "text-blue-800"
  }
}

const getIcon = (type: Toast["type"]): string => {
  switch (type) {
    case "success":
      return "✓"
    case "error":
      return "✕"
    case "warning":
      return "⚠"
    case "info":
    default:
      return "ℹ"
  }
}

const getIconColor = (type: Toast["type"]): string => {
  switch (type) {
    case "success":
      return "text-green-600"
    case "error":
      return "text-red-600"
    case "warning":
      return "text-yellow-600"
    case "info":
    default:
      return "text-blue-600"
  }
}

export const ToastItem = ({ toast, onClose }: ToastItemProps) => {
  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(onClose, toast.duration)
      return () => clearTimeout(timer)
    }
  }, [toast.duration, onClose])

  return (
    <div
      className={`
        flex items-start gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg border 
        ${getBackgroundColor(toast.type)}
        shadow-md animate-in slide-in-from-top duration-300
        pointer-events-auto max-w-sm sm:max-w-md
      `}
      role="alert"
    >
      <span className={`text-base sm:text-lg font-bold flex-shrink-0 ${getIconColor(toast.type)}`}>
        {getIcon(toast.type)}
      </span>
      <p className={`text-xs sm:text-sm font-medium flex-1 ${getTextColor(toast.type)}`}>{toast.message}</p>
      <button
        onClick={onClose}
        className={`text-lg leading-none flex-shrink-0 hover:opacity-70 transition-opacity ${getTextColor(toast.type)}`}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  )
}
