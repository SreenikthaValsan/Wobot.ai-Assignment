interface HealthIndicatorProps {
  value?: string
}

export const HealthIndicator = ({ value }: HealthIndicatorProps) => (
  <div className="relative w-5 h-5">
    <svg className="w-5 h-5 -rotate-90">
      <circle cx="10" cy="10" r="8" fill="none" stroke="#e5e7eb" strokeWidth="2" />
      <circle
        cx="10"
        cy="10"
        r="8"
        fill="none"
        stroke={value === "A" ? "#10b981" : "#f97316"}
        strokeWidth="2"
        strokeDasharray="50.27"
        strokeDashoffset="12.57"
        strokeLinecap="round"
      />
    </svg>
    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium">{value}</span>
  </div>
)
