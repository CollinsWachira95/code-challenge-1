function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    }
    else {
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