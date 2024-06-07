import plusIcon from '../../assets/plus.png';
import DeductionInput from "./DeductionInput";
import { useDispatch } from "react-redux";
import { addDeductionInputFields } from "../../redux/slices/deductionSlice";

const DeductionsArea = () => {
  const dispatch = useDispatch();
  const handleAddNewDeduction = (newInput: {data: string}) => {
    dispatch(addDeductionInputFields(newInput));
  }

  return (
    <div className="flex flex-col gap-5 py-3">
      <div>
        <label className="text-base font-semibold">Deductions</label>
        <p className="text-sm text-subTitColor">Salary Advances, Loan Deductions and all</p>
      </div>
      <DeductionInput />
      <button className="flex items-center gap-1 font-medium text-blueTxt w-max" onClick={() => {handleAddNewDeduction({data: 'newDeduct'})}} >
        <img src={plusIcon} alt="plus icon" />
        <p>Add New Deduction</p>
      </button>
    </div>
  )
}

export default DeductionsArea
