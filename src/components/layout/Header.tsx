import Logo from "../../assets/Brand Logo.svg"

export const Header = () => (
  <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
    <div className="py-3 sm:py-4 px-3 sm:px-4 md:px-6">
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <div className="flex items-center gap-0">
          <img src={Logo} alt="Logo" className="h-8 sm:h-10 w-auto" />
        </div>
      </div>
    </div>
  </header>
)
