import CalculatorForm from "./components/CalculatorForm"
import SalaryDetails from "./components/SalaryDetails"

function App() {
  
  return (
    <div className="flex items-start justify-center w-full min-h-screen gap-10 p-5 max-xl:flex-col max-xl:items-center">
      <CalculatorForm />
      <SalaryDetails />
    </div>
  )
}

export default App
