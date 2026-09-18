//TODO: Include your multi-line comment header
/*
    Name: Holden
    Date: 9/10/2026
    Assignment: Module 1 Applied Programming Activity
    Quarter: 2026 Credit Fall
    Instructor: Tania Kuisma
*/


// TODO: Import "use strict" directive
"use strict";

// DO NOT MODIFY
const display = (label, value) =>
  (document.getElementById("output").innerHTML += `${label}: ${value}<br>`);
// END DO NOT MODIFY

// ADD YOUR CODE BELOW

// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)
const courseModules = ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5', 'Module 6',
  'Module 7', 'Module 8', 'Module 9', 'Module 10'];
const completedCourses = ['Module 1', 'Module 2'];

const name = "Holden Peterson";
const totalModules = 10;
const isEnrolled = true;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.
const msg = `Welcome, ${name}!`;

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek
const totalStudyHours = totalModules * 6;

// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7
const dailyStudyHours = 6/7*60;

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).
const adjustedDailyHours = 6/6*60;

// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100
const modulesCompleted = prompt('Enter the number of completed modules (1-10): ');
const coursePercentCompleted = (modulesCompleted/totalModules) * 100;
const percentRemaining = 100-coursePercentCompleted;

let progressMessage = 'Invalid Entry'
if (percentRemaining == 0) {
  progressMessage = 'Done!';
} else if (percentRemaining < 25) {
  progressMessage = 'Almost Finished!';
} else if (percentRemaining < 75) {
  progressMessage = 'Making Progress';
} else if (percentRemaining < 100) {
  progressMessage = 'Just getting started';
}

let courseGrade = 'Invalid Entry';
if (coursePercentCompleted >= 90) {
  courseGrade = 'A';
} else if (coursePercentCompleted >= 80) {
  courseGrade = "B";
} else if (coursePercentCompleted >= 70) {
  courseGrade = 'C';
} else if (coursePercentCompleted >= 60) {
  courseGrade = 'D';
} else if (coursePercentCompleted < 60) {
  courseGrade = 'F';
}

let studyPlan = '';
let studyDay = '';
if (coursePercentCompleted == 100) {
  studyPlan = 'Complete';
} else {
  studyDay = prompt("Enter the day of the week: ");
  switch (studyDay.toLowerCase()) {
    case 'monday':
      studyPlan = `Study for ${adjustedDailyHours} minutes today.`;
      break;
    case 'tuesday':
      studyPlan = 'Rest day.';
      break;
    case 'wednesday':
      studyPlan = `Lab day. Study for ${adjustedDailyHours} minutes today.`;
      break;
    case 'thursday': 
      studyPlan = `Applied programming activity day. Study for ${adjustedDailyHours} minutes today.`;
      break;
    case 'friday':
      studyPlan = 'Think about studying';
      break;
    case 'saturday':
      studyPlan = 'Think even harder about studying';
      break;
    case 'sunday':
      studyPlan = 'Prepare to study tomorrow';
      break;
    default:
      studyPlan = 'Invalid Input';
      break;
  }
}

// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.
// TODO: Adjust all decimals to two places.
display(msg, "");
display("Name", name);
display("Enrolled", isEnrolled);
display("Total Modules",  totalModules);
display("Daily Study Hours (7 days)", (dailyStudyHours/60).toFixed(2) );
display("Daily Study Minutes (7 days)", dailyStudyHours.toFixed(2) );
display("Daily Study Hours (with rest day)", (adjustedDailyHours/60).toFixed(2) );
display("Daily Study Minutes (with rest day)", adjustedDailyHours.toFixed(2) );

// TODO: Display your results with a % sign
display("Percent Complete", '%' + coursePercentCompleted.toFixed(2));
display("Percent Remaining", '%' + (100-coursePercentCompleted).toFixed(2) );
display('Current Progress', progressMessage);
display('Course Grade', courseGrade);
display('Study Plan', studyPlan);