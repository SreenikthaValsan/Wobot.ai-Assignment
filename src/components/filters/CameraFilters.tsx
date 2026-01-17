import LocationIcon from "../../assets/Location.png"
import StatusIcon from "../../assets/rss_feed.png"
import SearchIcon from "../../assets/icon.png"
import CustomDropdown from "../common/CustomDropdown"
import type { FilterOption } from "../../types"


interface CameraFiltersProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  locations: string[]
}

export const CameraFilters = ({
  searchTerm,
  onSearchChange,
}: CameraFiltersProps) => {

  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-0 mb-6 px-2">
      <div>
        <h1 className="text-xl sm:text-xl font-medium text-gray-900 text-left">Cameras</h1>
        <p className="text-sm sm:text-sm text-gray-500 mt-1">Manage your cameras here.</p>
      </div>
      <div className="relative w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search cameras..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full sm:w-48 pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#24a8af] focus:ring-1 focus:ring-[#24a8af] transition-colors"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
          <img src={SearchIcon} alt="SearchIcon"/>
        </div>
      </div>
    </div>
  )
}

export const CameraFilterBar = ({
  locationFilter,
  onLocationChange,
  statusFilter,
  onStatusChange,
  locations,
}: {
  locationFilter: string
  onLocationChange: (location: string) => void
  statusFilter: string
  onStatusChange: (status: string) => void
  locations: string[]
}) => {
  const locationOptions: FilterOption[] = locations.map((loc) => ({
    value: loc,
    label: loc,
  }))

  return (
    <div className="bg-product-white px-2 sm:px-4 py-2 mb-4 rounded-lg border border-gray-100">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <CustomDropdown
          value={locationFilter}
          onChange={onLocationChange}
          options={locationOptions}
          placeholder="Location"
          icon={LocationIcon}
          className="w-40"
        />

        <CustomDropdown
          value={statusFilter}
          onChange={onStatusChange}
          options={[
            { value: "Active", label: "Active" },
            { value: "Inactive", label: "Inactive" },
          ]}
          placeholder="Status"
          icon={StatusIcon}
          className="w-40"
        />
      </div>
    </div>
  )
}
