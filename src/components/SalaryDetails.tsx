import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import calculation from "../calculations/calculation";
import numeral from 'numeral'

const SalaryDetails = () => {
  const justifyStyle = "flex items-center justify-between font-normal";
  const basicSalary = useSelector((state: RootState) => state.basicSalarySlice.basicSalary)
  const { grossDeduction, grossEarnings, employeeEPF, employerEPF, employerETF, netSalary, costToCompany } = calculation()

  const formatNumber = (value: number) => {
    return numeral(value).format('0,0.00')
  }
  return (
    <>
    { basicSalary ? ( 
    <div className="flex flex-col h-full gap-5 p-5 border rounded-lg xl:w-4/12 border-borderColor max-sm:w-full sm:w-4/5">
      <h2 className="text-xl font-bold text-titleColor">Your Salary</h2>
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between font-semibold text-subTitColor">
          <h4>Items</h4>
          <h4>Amount</h4>
        </div>
        <div className={justifyStyle}>
          <h4>Basic Salary</h4>
          <h4>{formatNumber(basicSalary)}</h4>
        </div>
        <div className={justifyStyle}>
          <h4>Gross Earning</h4>
          <h4>{formatNumber(grossEarnings)}</h4>
        </div>
        <div className={justifyStyle}>
          <h4>Gross Deduction</h4>
          <h4>{formatNumber(grossDeduction)}</h4>
        </div>
        <div className={justifyStyle}>
          <h4>Employee EPF (8%)</h4>
          <h4>{formatNumber(employeeEPF)}</h4>
        </div>
      </div>
      <div className="flex items-center justify-between px-1.5 py-3 font-semibold border border-borderColor rounded">
        <h4>Net Salary (Take Home)</h4>
        <h4>{formatNumber(netSalary)}</h4>
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold text-subTitColor">Contribution from the Employer</h4>
        <div className={justifyStyle}>
          <h4>Employeer EPF (12%)</h4>
          <h4>{formatNumber(employerEPF)}</h4>
        </div>
        <div className={justifyStyle}>
          <h4>Employeer ETF (3%)</h4>
          <h4>{formatNumber(employerETF)}</h4>
        </div>
        <div className={`${justifyStyle} mt-5`}>
          <h4>CTC (Cost to Company)</h4>
          <h4>{formatNumber(costToCompany)}</h4>
        </div>
      </div>
    </div>
    ) : ''}
  </>
  )
}

export default SalaryDetails
