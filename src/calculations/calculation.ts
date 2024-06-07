import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { useMemo } from "react";

const calculation = () => {
    const basicSalary = useSelector((state: RootState) => state.basicSalarySlice.basicSalary);
    const allEarningsData = useSelector((state: RootState) => state.earningSlice.earnInputs);
    const allDeductionsData = useSelector((state: RootState) => state.deductionSlice.deductionInputs);
    
    //totalEarnings
    const totalEarnings = useMemo(() => {
        return allEarningsData.reduce((acc: number, data) => acc + data.earnBalance, basicSalary);
    },[allEarningsData,basicSalary]);
    
    //Total Earnings for EPF
    const eTFAllowedEarnings = allEarningsData.filter((data)=> data.isChecked === true);
    const totalEarningsforEPF = eTFAllowedEarnings.reduce((acc: number, data) => acc + data.earnBalance, basicSalary);
    
    //Gross Deduction
    const grossDeduction = useMemo(() => {
        return allDeductionsData.reduce((acc: number, data) => acc + data.deductBalance, 0);
    },[allDeductionsData]);
    
    //Gross Earnings
    const grossEarnings = useMemo(() => {
        return totalEarnings - grossDeduction;
    },[totalEarnings, grossDeduction]);
    
    //Gross Salary For EPF
    const grossSalaryForEPF = useMemo(() => {
        return totalEarningsforEPF - grossDeduction;
    },[totalEarningsforEPF, grossDeduction]);
    
    //Calculate EPF/ETF
    const employeeEPF = useMemo(() => {
        return grossSalaryForEPF * 0.08;
    },[grossSalaryForEPF]); 

    const employerEPF = useMemo(() => {
        return grossSalaryForEPF * 0.12;
    },[grossSalaryForEPF]);

    const employerETF = useMemo(() => {
        return grossSalaryForEPF * 0.03;
    },[grossSalaryForEPF]); 
    
    //Calculate APIT
    const APIT = useMemo(() => {
        const calculateAPIT = (grossEarnings: number) => {
            let taxPercentage: number = 0;
            let constant: number = 0;
        
            if(grossEarnings <= 100000){
                taxPercentage = 0;
                constant = 0;
            }
            else if(grossEarnings <= 141667){
                taxPercentage = 0.06;
                constant = 6000;
            }
            else if(grossEarnings <= 183333){
                taxPercentage = 0.12;
                constant = 14500;
            }
            else if(grossEarnings <= 225000){
                taxPercentage = 0.18;
                constant = 25500;
            }
            else if(grossEarnings <= 266667){
                taxPercentage = 0.24;
                constant = 39000;
            }
            else if(grossEarnings <= 308333){
                taxPercentage = 0.3;
                constant = 55000;
            }
            else{
                taxPercentage = 0.36;
                constant = 73500;
            }
            return (grossEarnings * taxPercentage) - constant;
        }
        return calculateAPIT(grossEarnings);
    },[grossEarnings])
    
    //Net Salary
    const netSalary = useMemo(() => {
        return grossEarnings - employeeEPF - APIT;
    },[grossEarnings, employeeEPF, APIT]) 
    
    //Cost To Company 
    const costToCompany = useMemo(() => {
        return grossEarnings +  employerEPF + employerETF;
    },[grossEarnings, employerEPF, employerETF]) 

    return {totalEarnings, totalEarningsforEPF, grossDeduction, grossEarnings, grossSalaryForEPF, employeeEPF, employerEPF, employerETF, APIT, netSalary, costToCompany}
}

export default calculation

