import { IoCloseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { getDeductBalance, removeDeductionInputFields } from "../../redux/slices/deductionSlice";
import { ChangeEvent } from "react";

const DeductionInput = () => {
  const dispatch = useDispatch()
  const deductionInputs = useSelector((state: RootState) => state.deductionSlice.deductionInputs)

  const handleDeduction = (e: ChangeEvent<HTMLInputElement>, index: number) =>{
    dispatch(getDeductBalance({balance: Number(e.target.value), index}))
  }

  return (
    <>
    { deductionInputs.length !== 0 && (
      <>
    {deductionInputs.map((data, index)=>(
    <div key={index} className="flex items-center gap-4">
      <div className="flex w-7/12 gap-1 max-sm:w-full max-sm:flex-col">
        <input type="text" name={`deductID + ${index}`} id={`deductID + ${index}`} className="w-2/3 px-4 py-3 text-base border rounded border-borderColor focus:outline-none max-sm:w-full" placeholder="Details (Title)"/>
        <input type="number" name={`${data.data} + ${index}`} id={`${data.data} + ${index}`} 
          onChange={(e)=>handleDeduction(e, index)}
          className="w-1/3 px-4 py-3 text-base border rounded border-borderColor focus:outline-none max-sm:w-full" 
          placeholder="Amount"
        />
      </div>
      <button onClick={()=>{dispatch(removeDeductionInputFields(index))}}>
        <IoCloseCircle className="text-2xl text-subTitColor"/>
      </button>
    </div>
    ))}
    </>
  )}
  </>
  )
}

export default DeductionInput
