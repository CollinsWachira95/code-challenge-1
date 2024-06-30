//Deine Function
function getStudentGrade(marks) {
//Finding the grade by converting the marks to grades
    let grade;
    if (marks > 79){
        grade = 'A';
    }
    else if (marks >= 60){
        grade = 'B';
    }
    else if (marks >= 50){
        grade = 'C';
    }
    else if (marks >= 40){
        grade = 'D';
    }
    else {
        grade = 'E';
    }
//The Results
    console.log(`The grades for the marks ${marks}is : ${grade}`);
}

getStudentGrade(85);
getStudentGrade(45);