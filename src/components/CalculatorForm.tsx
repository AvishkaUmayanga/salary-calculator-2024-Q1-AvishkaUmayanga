import { VscDebugRestart } from "react-icons/vsc";
import EarningsArea from "./Earnings/EarningsArea";
import DeductionsArea from "./Deductions/DeductionsArea";
import { useDispatch } from "react-redux";

import { addBasicSalary } from "../redux/slices/calculateSlice";
import { ChangeEvent } from "react";

const CalculatorForm = () => {
  const dispatch = useDispatch()
  const handleInputBasicSal = (e: ChangeEvent<HTMLInputElement>) =>{
    dispatch(addBasicSalary(e.target.value))
  }
  
  return (
    <div className="flex flex-col gap-5 p-5 border rounded-lg xl:w-5/12 border-borderColor bg-formBg max-sm:w-full sm:w-4/5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-titleColor">Calculate Your Salary</h2>
        <button className="flex items-center text-blueTxt">
          <VscDebugRestart className="text-lg "/>
          <p className="text-sm ">Reset</p>
        </button>
      </div>
      <div className="flex flex-col w-7/12 ">
        <label htmlFor="bacisSalID" className="text-base font-semibold">Basic Salary</label>
        <input type="number" name="bacisSalID" id="bacisSalID" 
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
