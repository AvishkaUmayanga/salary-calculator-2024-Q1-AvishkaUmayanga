import { IoCloseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { changeIsChecked, getEarnBalance, removeEarnInputField } from "../../redux/slices/earningSlice";
import { ChangeEvent } from "react";

const EarningsInput = () => {
  const dispatch = useDispatch()
  const earnInputs = useSelector((state: RootState) => state.earningSlice.earnInputs)

  const handleEarnings = (e: ChangeEvent<HTMLInputElement>, index: number) =>{
    dispatch(getEarnBalance({balance: Number(e.target.value), index}))
  }
  return (
    <>
    { earnInputs.length !== 0 && (
    <>
    {earnInputs.map((data, index)=>(
    <div key={index} className="flex items-center gap-4 ">
      <div className="flex w-7/12 gap-1 max-sm:w-full max-sm:flex-col ">
        <input type="text" name={`earnID + ${index}`} id={`earnID + ${index}`} className="w-2/3 px-4 py-3 text-base border rounded border-borderColor focus:outline-none max-sm:w-full" placeholder="Pay Details (Title)"/>
        <input type="number" name={`${data.data} + ${index}`} id={`${data.data} + ${index}`} 
          onChange={(e)=>handleEarnings(e, index)}
          className="w-1/3 px-4 py-3 text-base border rounded border-borderColor focus:outline-none max-sm:w-full" placeholder="Amount"
        />
      </div>
      <button onClick={()=>{dispatch(removeEarnInputField(index))}}>
        <IoCloseCircle className="text-2xl text-subTitColor"/>
      </button>
      <div className="flex gap-0.5">
        <input type="checkbox" name={`epfId + ${index}`} id={`epfId + ${index}`}  onChange={() =>dispatch(changeIsChecked(index))} />
        <label htmlFor={`epfId + ${index}`} className="font-normal ">EPF/ETF</label>
      </div>
    </div>
    ))}
    </>
  )}
  </>
  )
}

export default EarningsInput
