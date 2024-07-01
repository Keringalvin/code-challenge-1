const prompt = require('prompt-sync')();

const getGrade = (marks) => {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 50) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'E';
    }
};

const studentGradeGenerator = () => {
    const marks = parseFloat(prompt('Enter student marks: '));
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log('Invalid input. Marks should be between 0 and 100.');
        return;
    }
    const grade = getGrade(marks);
    console.log(`Grade: ${grade}`);
};

studentGradeGenerator();
