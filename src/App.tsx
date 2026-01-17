import { CameraLayout } from "./components/layout/Layout"
import { ToastProvider } from "./context/ToastContext"
import { ToastContainer } from "./components/ui/ToastContainer"
import "./App.css"

function App() {
  return (
    <ToastProvider>
      <CameraLayout />
      <ToastContainer />
    </ToastProvider>
  )
}

export default App