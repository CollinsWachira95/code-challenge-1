// Define The Function
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    //Calculate Tax(PAYE)
    function calculateTax(grossSalary) {
        let tax;
        if (grossSalary <= 24000) {
            tax = grossSalary * 0.1;
        }
        else if (grossSalary <= 32333) {
            tax = 2400 + ((grossSalary - 24000) * 0.25);
        }
        else{
            tax = 4483.25 + ((grossSalary - 32333) * 0.3);
        }
        return tax;
    }

// Calculate NHIF
function calculateNHIF(grossSalary) {
    if(grossSalary <= 5999) return 150;
    else if(grossSalary <= 7999) return 300;
    else if(grossSalary <= 11999) return 400;
    else if(grossSalary <= 14999) return 500;
    else if(grossSalary <= 19999) return 600;
    else if(grossSalary <= 24999) return 750;
    else if(grossSalary <= 29999) return 850;
    else if(grossSalary <= 34999) return 900;
    else if(grossSalary <= 39999) return 950;
    else if(grossSalary <= 44999) return 1000;
    else if(grossSalary <= 49999) return 1100;
    else if(grossSalary <= 59999) return 1200;
    else if(grossSalary <= 69999) return 1300;
    else if(grossSalary <= 79999) return 1400;
    else if(grossSalary <= 89999) return 1500;
    else if(grossSalary <= 99999) return 1600;
    else return 1700;
}
// Calculate NSSF
function calculateNSSF(grossSalary) {
    const nssfRate = 0.06;
    const nssfUpperLimit = 18000;
    return Math.min(grossSalary * nssfRate, nssfUpperLimit * nssfRate);
}
// Calculate Deducations
const tax = calculateTax(grossSalary);
const nhif = calculateNHIF(grossSalary);
const nssf = calculateNSSF(grossSalary);
// Calculate Net Salary
const netSalary = grossSalary - tax - nhif - nssf;
// Return The Salary Details
return{
    grossSalary: grossSalary.toFixed(2),
    tax: tax.toFixed(2),
    nhif: nhif.toFixed(2),
    nssf: nssf.toFixed(2),
    netSalary: netSalary.toFixed(2)
};
}
const basicSalary = 15000;
const benefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary, benefits)

console.log(`Gross Salary: KES ${salaryDetails.grossSalary}`);
console.log(`Tax: KES ${salaryDetails.tax}`);
console.log(`NHIF: KES ${salaryDetails.nhif}`);
console.log(`NSSF: KES ${salaryDetails.nssf}`);
console.log(`Net Salary: KES ${salaryDetails.netSalary}`);