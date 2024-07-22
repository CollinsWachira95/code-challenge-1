# Interactive JavaScript Challenges

This project implements three interactive JavaScript functions designed to be used from a web page. Users can interact with the functions using buttons, and the results are displayed in the console.

**Author:** Collins Wachira

**Functionalities:**

1. **Student Grade Generator:**
    * This function prompts the user to enter a student's marks (0-100).
    * It validates the input to ensure it's within the valid range.
    * Based on the entered marks, the function calculates the corresponding grade (A, B, C, D, or E).
    * The calculated grade is then displayed in the console.

2. **Speed Detector:**
    * This function prompts the user to enter the speed of a car (in km/h).
    * It checks the entered speed against a speed limit of 70 km/h.
    * If the speed is within the limit, the function displays "Ok" in the console.
    * If the speed exceeds the limit, the function calculates the number of demerit points based on increments of 5 km/h above the limit (1 demerit point per 5 km/h).
    * The function then displays the number of demerit points in the console.
    * If the demerit points exceed 12, the function displays "License suspended" in the console.

3. **Net Salary Calculator (Toy Problem):**
    * This function is designed to demonstrate the concept of net salary calculation.
    * It prompts the user to enter the basic salary and benefits.
    * It utilizes placeholder functions for calculating Payee (income tax), NHIF (National Hospital Insurance Fund) deduction, and NSSF (National Social Security Fund) deduction. 
        * **Note:** These placeholder functions use fixed rates for demonstration purposes only. In a real-world application, you would need to integrate with relevant APIs or libraries to retrieve accurate tax and social security calculation logic.
    * The function calculates the gross salary by adding the basic salary and benefits.
    * It then subtracts the calculated deductions (payee, NHIF, NSSF) from the gross salary to arrive at the net salary.
    * Finally, the function displays the breakdown of Payee, NHIF deduction, NSSF deduction, Gross Salary, and Net Salary in the console.

**Running the Project:**

1. Save the `index.html` and `script.js` files in the same directory.
2. Open the `index.html` file in a web browser.
3. Click on the buttons to interact with each function and see the results displayed in the console (usually accessed by pressing F12 or right-clicking and selecting "Inspect").

**Note:**

This project provides a basic framework for interactive JavaScript functionalities. Remember to replace the placeholder deduction calculation functions in the Net Salary Calculator with calls to the appropriate APIs or libraries based on your specific requirements for accurate tax and social security calculations.
