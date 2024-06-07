import closeIcon from '../../assets/clear.png'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { changeIsChecked, addEarnBalance, removeEarnInputField, addEarnTitle } from "../../redux/slices/earningSlice";
import { ChangeEvent } from "react";

const EarningsInput = () => {
  const dispatch = useDispatch();
  const earnInputs = useSelector((state: RootState) => state.earningSlice.earnInputs);
  
  //Add Earn Balance
  const handleEarnings = (e: ChangeEvent<HTMLInputElement>, index: number) =>{
    dispatch(addEarnBalance({balance: Number(e.target.value), index}));
  }

  //Add Earn Title
  const handleAddTitle = (e:ChangeEvent<HTMLInputElement>, index: number) => {
    dispatch(addEarnTitle({title: String(e.target.value), index}))
  }
  return (
    <>
    { earnInputs.length !== 0 && (
    <>
    {earnInputs.map((data, index)=>(
    <div key={index} className="flex items-center gap-4 ">
      <div className="flex w-7/12 gap-1 max-sm:w-full max-sm:flex-col ">
        <input type="text" name={`earnID + ${index}`} id={`earnID + ${index}`} 
          value={data.earnTitle}
          onChange={(e)=>handleAddTitle(e, index)}
          className="w-2/3 px-4 py-3 text-base border rounded border-borderColor focus:outline-none max-sm:w-full" placeholder="Pay Details (Title)"/>
        <input type="number" name={`${data.data} + ${index}`} id={`${data.data} + ${index}`} 
          value={data.earnBalance || ''}
          onChange={(e)=>handleEarnings(e, index)}
          className="w-1/3 px-4 py-3 text-base border rounded border-borderColor focus:outline-none max-sm:w-full" placeholder="Amount"
        />
      </div>
      <button onClick={()=>{dispatch(removeEarnInputField(index))}}>
        <img src={closeIcon} alt="close" className='rounded-full ' />
      </button>
      <div className="flex gap-0.5">
        <input type="checkbox" name={`epfId + ${index}`} id={`epfId + ${index}`} checked={data.isChecked}  onChange={() =>dispatch(changeIsChecked(index))} />
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
