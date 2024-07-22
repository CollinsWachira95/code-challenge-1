function calculateGrade() {
    while (true) {
      try {
        const marks = parseInt(prompt("Enter student's marks (0-100): "));
        if (marks >= 0 && marks <= 100) {
          let grade;
          if (marks >= 80) {
            grade = "A";
          } else if (marks >= 60) {
            grade = "B";
          } else if (marks >= 49) {
            grade = "C";
          } else if (marks >= 40) {
            grade = "D";
          } else {
            grade = "E";
          }
          console.log(`Student's grade: ${grade}`);
          break;
        } else {
          console.error("Invalid marks. Please enter a number between 0 and 100.");
        }
      } catch (error) {
        console.error("Invalid input. Please enter an integer.");
      }
    }
  }
  
  calculateGrade();
  
