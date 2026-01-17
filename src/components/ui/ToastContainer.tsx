import { useContext } from "react"
import { ToastContext } from "../../context/ToastContext"
import { ToastItem } from "./ToastItem"

export const ToastContainer = () => {
  const context = useContext(ToastContext)

  if (!context) {
    return null
  }

  const { toasts, removeToast } = context

  return (
    <div
      className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50 space-y-2 pointer-events-none max-w-xs sm:max-w-sm"
      role="region"
      aria-label="Notifications"
    >
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <ToastItem toast={toast} onClose={() => removeToast(toast.id)} />
        </div>
      ))}
    </div>
  )
}
