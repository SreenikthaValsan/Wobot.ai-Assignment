import React, { useState, useRef, useEffect } from "react"
import DownIcon from "../../assets/downicon.png"
import type { FilterOption } from "../../types"

interface CustomDropdownProps {
  value: string
  onChange: (value: string) => void
  options: FilterOption[]
  placeholder?: string
  icon?: string
  className?: string
  disabled?: boolean
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  value,
  onChange,
  options,
  placeholder = "Select option",
  icon,
  className = "",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selectedOption = options.find((opt) => opt.value === value)
  const displayValue = selectedOption?.label || placeholder

  return (
    <div className={`relative ${className}`}>
      <button
        ref={buttonRef}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          flex items-center justify-between
          w-full
          ${icon ? "pl-10 sm:pl-9" : "pl-2 sm:pl-3"}
          pr-2 sm:pr-2
          py-1.5 sm:py-2
          border border-gray-300
          rounded-sm
          text-sm sm:text-sm
          font-medium
          text-gray-700
          bg-white
          cursor-pointer
          focus:outline-none
          focus:border-[#24a8af]
          focus:ring-1
          focus:ring-[#24a8af]
          hover:border-gray-400
          transition-all
          disabled:opacity-60
          disabled:cursor-not-allowed
          disabled:bg-gray-50
          shadow-sm
        `}
      >
        <span className="truncate">{displayValue}</span>
        <img src={DownIcon} alt="Down"  />
      </button>

      {icon && (
        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <img src={icon} alt="icon"  />
        </div>
      )}

      {isOpen && !disabled && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-64 overflow-y-auto custom-scrollbar"
        >
          {placeholder && (
            <button
              onClick={() => {
                onChange("all")
                setIsOpen(false)
              }}
              className="w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm text-gray-500 hover:bg-[#24a8af]/10 hover:text-[#24a8af] transition-colors border-b border-gray-100"
            >
              {placeholder}
            </button>
          )}
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              className={`
                w-full px-3 sm:px-4 py-2.5 text-left text-xs sm:text-sm
                transition-all duration-200
                ${
                  value === option.value
                    ? "bg-[#24a8af] text-white font-semibold shadow-md"
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-[#24a8af]/5 hover:to-[#24a8af]/10 hover:text-[#24a8af] hover:font-medium"
                }
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomDropdown
