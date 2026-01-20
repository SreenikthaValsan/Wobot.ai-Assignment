export const API_BASE = import.meta.env.VITE_API_BASE || "https://hiring-assignment.wobot.ai/api/v1"
export const API_UPDATE = import.meta.env.VITE_API_UPDATE || "https://api-app-staging.wobot.ai/app/v1"
export const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN || ""

export const DEFAULT_ITEMS_PER_PAGE = 10
export const ITEMS_PER_PAGE_OPTIONS = [10, 20, 50]

export const THEME_COLORS = {
  primary: "#24a8af",
  primaryHover: "#1e9299",
  green: {
    light: "#10b981",
    bg: "#10b981",
    online: "bg-online-green",
  },
  orange: "#f97316",
  red: {
    online: "bg-online-red",
  },
}
