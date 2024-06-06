import { VscDebugRestart } from "react-icons/vsc";

const CalculatorForm = () => {
  return (
    <div className="flex flex-col w-5/12 gap-5 p-5 border rounded-lg border-borderColor bg-formBg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-titleColor">Calculate Your Salary</h2>
        <div className="flex items-center text-blueTxt">
          <VscDebugRestart />
          <p className="text-sm ">Reset</p>
        </div>
      </div>
      <div className="flex flex-col w-7/12 ">
        <label htmlFor="bacisSalID" className="text-base font-semibold">Basic Salary</label>
        <input type="number" name="bacisSalID" id="bacisSalID" className="px-4 py-3 text-base border rounded border-borderColor focus:outline-none" />
      </div>
      <div className="flex flex-col gap-5">
        <div>
        <label className="text-base font-semibold">Earnings</label>
        <p className="text-sm text-subTitColor">Allowance, Fixed Allowance, Bonus and etc.</p>
        </div>
        <div className="flex gap-1">
          <div className="flex w-7/12 gap-1">
            <input type="text" name="bacisSalID" id="bacisSalID" className="w-2/3 px-4 py-3 text-base border rounded border-borderColor focus:outline-none" placeholder="Pay Details (Title)"/>
            <input type="number" name="" id="" className="w-1/3 px-4 py-3 text-base border rounded border-borderColor focus:outline-none" placeholder="Amount"/>
          </div>
          <input type="checkbox" name="epfId" id="epfId" />
        </div>
      </div>
    </div>
  )
}

export default CalculatorForm
