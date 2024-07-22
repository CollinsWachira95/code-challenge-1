function calculateNetSalary() {
    try {
      const basicSalary = parseFloat(prompt("Enter basic salary: "));
      const benefits = parseFloat(prompt("Enter benefits: "));
  
      // Replace these with actual tax calculation functions from relevant APIs or libraries
      const payee = calculatePayee(basicSalary);
      const nhifDeduction = calculateNhif(basicSalary);
      const nssfDeduction = calculateNssf(basicSalary);
  
      const grossSalary = basicSalary + benefits;
      const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;
  
      console.log(`Payee: Ksh.${payee.toFixed(2)}`);
      console.log(`NHIF Deduction: Ksh.${nhifDeduction.toFixed(2)}`);
      console.log(`NSSF Deduction: Ksh.${nssfDeduction.toFixed(2)}`);
      console.log(`Gross Salary: Ksh.${grossSalary.toFixed(2)}`);
      console.log(`Net Salary: Ksh.${netSalary.toFixed(2)}`);
    } catch (error) {
      console.error("Invalid input. Please enter numbers.");
    }
  }
  
  function calculatePayee(basicSalary) {

    return basicSalary * 0.3; // 
  }
  
  function calculateNhif(basicSalary){
    return basicSalary
  }  
