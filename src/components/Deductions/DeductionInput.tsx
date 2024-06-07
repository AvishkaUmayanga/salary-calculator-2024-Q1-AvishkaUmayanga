import closeIcon from '../../assets/clear.png'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { addDeductBalance, addDeductTitle, removeDeductionInputFields } from "../../redux/slices/deductionSlice";
import { ChangeEvent } from "react";

const DeductionInput = () => {
  const dispatch = useDispatch();
  const deductionInputs = useSelector((state: RootState) => state.deductionSlice.deductionInputs);

  //Add Deduction Balance
  const handleDeduction = (e: ChangeEvent<HTMLInputElement>, index: number) =>{
    dispatch(addDeductBalance({balance: Number(e.target.value), index}));
  }

  //Add Deduction Title
  const handleAddDeductTitle = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(addDeductTitle({title: String(e.target.value), index}))
  }

  return (
    <>
    { deductionInputs.length !== 0 && (
      <>
    {deductionInputs.map((data, index)=>(
    <div key={index} className="flex items-center gap-4">
      <div className="flex w-7/12 gap-1 max-sm:w-full max-sm:flex-col">
        <input type="text" name={`deductID + ${index}`} id={`deductID + ${index}`} 
          onChange={(e)=>handleAddDeductTitle(e, index)}
          value={data.deductTitle}
          className="w-2/3 px-4 py-3 text-base border rounded border-borderColor focus:outline-none max-sm:w-full" 
          placeholder="Details (Title)"/>
        <input type="number" name={`${data.data} + ${index}`} id={`${data.data} + ${index}`} 
          onChange={(e)=>handleDeduction(e, index)}
          value={data.deductBalance || ''}
          className="w-1/3 px-4 py-3 text-base border rounded border-borderColor focus:outline-none max-sm:w-full" 
          placeholder="Amount"
        />
      </div>
      <button onClick={()=>{dispatch(removeDeductionInputFields(index))}}>
        <img src={closeIcon} alt="close" />
      </button>
    </div>
    ))}
    </>
  )}
  </>
  )
}

export default DeductionInput
