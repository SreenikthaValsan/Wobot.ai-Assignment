interface DeleteModalProps {
  isOpen: boolean
  itemName: string
  onConfirm: () => void
  onCancel: () => void
  isLoading?: boolean
}

export const DeleteModal = ({
  isOpen,
  itemName,
  onConfirm,
  onCancel,
  isLoading = false,
}: DeleteModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-0">
      <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 w-full sm:w-96 max-w-full animate-in fade-in zoom-in duration-200">
        <div className="flex items-center mb-4">
          <div className="flex-1 justify-center text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Delete Camera</h3>
          </div>
        </div>

        <div className="mb-6 justify-center text-center">
          <p className="text-sm sm:text-base text-gray-600">
            Are you sure you want to delete <br className="hidden sm:inline"/>
            <span className="font-semibold text-gray-900">{itemName}</span>?
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-3">This action cannot be undone.</p>
        </div>

        <div className="flex flex-col-reverse sm:flex-row sm:justify-center gap-2 sm:gap-3">
          <button
            onClick={onCancel}
            disabled={isLoading}
            className="px-3 sm:px-4 py-2 border border-gray-300 rounded-md text-sm sm:text-base text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="px-3 sm:px-4 py-2 bg-red-600 text-white rounded-md text-sm sm:text-base font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span className="hidden sm:inline">Deleting...</span>
              </>
            ) : (
              'Delete'
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
