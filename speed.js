//Define function:
function checkSpeed(speed) {
//Set speed limit and demerit points:
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
//Check if the speed is within the limit:
    if (speed <= speedLimit) {
        console.log("Ok");
    }
//Calculate demerit points:
    else {
//Check the number of demerit points:
        const demeritPoints = ((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > 12) {
            console.log("License Suspended");
        }
    else{
        console.log(`Points: ${demeritPoints}`);
    }
    }
}

checkSpeed(80);
checkSpeed(150);