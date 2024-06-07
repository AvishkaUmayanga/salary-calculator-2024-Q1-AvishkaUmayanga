import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addEarnInputField } from "../../redux/slices/earningSlice";

import EarningsInput from "./EarningsInput";

const EarningsArea = () => {
  const dispatch = useDispatch()
  
  const handleAddNewEarning = (newInput: {data:string, isChecked: boolean}) => {
    dispatch(addEarnInputField(newInput))
  }
  
  return (
    <div className="flex flex-col gap-5 py-5 border-b border-borderColor">
      <div>
        <label className="text-base font-semibold">Earnings</label>
        <p className="text-sm text-subTitColor">Allowance, Fixed Allowance, Bonus and etc.</p>
      </div>
     <EarningsInput />
      <button className="flex items-center gap-1 font-medium text-blueTxt w-max" onClick={()=>{handleAddNewEarning({data:'newEarn', isChecked: false})}}>
        <FaPlus />
        <p>Add New Allowance</p>
      </button>
    </div>
  )
}

export default EarningsArea
