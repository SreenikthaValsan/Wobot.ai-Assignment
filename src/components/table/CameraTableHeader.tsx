export const CameraTableHeader = () => (
  <thead>
    <tr>
      <th className="w-12 px-4 py-3">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-gray-300 text-[#24a8af] focus:ring-[#24a8af] cursor-pointer"
        />
      </th>
      <th className="px-4 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">Name</th>
      <th className="px-4 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">Model</th>
      <th className="px-4 py-3 text-centre text-md font-medium text-gray-500 uppercase tracking-wider">Location</th>
      <th className="px-4 py-3 text-centre text-md font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
      <th className="px-4 py-3 text-centre text-md font-medium text-gray-500 uppercase tracking-wider">Resolution</th>
      <th className="px-4 py-3 text-centre text-md font-medium text-gray-500 uppercase tracking-wider">Status</th>
      <th className="px-4 py-3 text-centre text-md font-medium text-gray-500 uppercase tracking-wider">Actions</th>
    </tr>
  </thead>
)
