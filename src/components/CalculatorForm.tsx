import EarningsArea from "./Earnings/EarningsArea";
import DeductionsArea from "./Deductions/DeductionsArea";
import resetIcon from '../assets/reset.png'
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent } from "react";
import { RootState } from "../redux/store/store";
import { addBasicSalary, clearBasicSalary } from "../redux/slices/basicSalarySlice";
import { clearEarnings } from "../redux/slices/earningSlice";
import { clearDeduction } from "../redux/slices/deductionSlice";

const CalculatorForm = () => {
  const dispatch = useDispatch();
  const basicSal = useSelector((state: RootState) => state.basicSalarySlice.basicSalary);
  
  const handleInputBasicSal = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(addBasicSalary(e.target.value));
  }

  //reset
  const handleReset = () => {
    dispatch(clearBasicSalary())
    dispatch(clearEarnings())
    dispatch(clearDeduction())
  }
  return (
    <div className="flex flex-col gap-5 p-5 border rounded-lg xl:w-5/12 border-borderColor bg-formBg max-sm:w-full sm:w-4/5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-titleColor">Calculate Your Salary</h2>
        <button className="flex items-center gap-1 text-blueTxt" onClick={handleReset}>
          <img src={resetIcon} alt="reset" />
          <p className="font-medium max-md:text-sm">Reset</p>
        </button>
      </div>
      <div className="flex flex-col w-7/12 ">
        <label htmlFor="bacisSalID" className="text-base font-semibold">Basic Salary</label>
        <input type="number" name="bacisSalID" id="bacisSalID" value={basicSal || ''}
          onChange={(e)=>{handleInputBasicSal(e)} }
          className="px-4 py-3 text-base border rounded border-borderColor focus:outline-none" 
        />
      </div>
      <EarningsArea />
      <DeductionsArea />
    </div>
  )
}

export default CalculatorForm
