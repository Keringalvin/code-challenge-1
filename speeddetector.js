const prompt = require('prompt-sync')();

const speedDetector = () => {
    const speed = parseFloat(prompt('Enter car speed (km/h): '));
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerDemerit = 1;

    if (speed < speedLimit) {
        console.log('Ok');
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints >= 12) {
            console.log(`Points: ${demeritPoints}. License suspended.`);
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
};

speedDetector();
