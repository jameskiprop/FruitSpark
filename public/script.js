//selecting the logfruits button

const logFruitsBtn = document.getElementById("logFruitsBtn");

//adding an eventlistener to handle the click event
logFruitsBtn.addEventListener("click", function () {
  const fruit = prompt("input the type of fruit you consumed today:");

  if (fruit) {
    alert(`You have logged: ${fruit}`);
  } else {
    alert("No fruit logged.");
  }
});

//View Database Button
const viewDatabaseBtn = document.getElementById("viewDatabaseBtn");

viewDatabaseBtn.addEventListener("click", function loadFruitDatabase() {
  const fruits = [
    { name: "Apple", calories: 52, sugar: "10g" },
    { name: "Banana", calories: 96, sugar: "12g" },
    { name: "Orange", calories: 43, sugar: "8g" },
  ];
  const fruitList = fruits
    .map(
      (fruit) => `${fruit.name}: ${fruit.calories} kcal, ${fruit.sugar} sugar`
    )
    .join("\n");
  alert(fruitList);
});

//view reports button
document
  .getElementById("viewReportsBtn")
  .addEventListener("click", function () {
    const reportContent = document.getElementById("reportContent");
    // Toggle the visibility of the report content
    reportContent.classList.toggle("hidden");
  });

//Analyze now button
document.getElementById("analyzeNowBtn").addEventListener("click", function () {
  const analysisContent = document.getElementById("analysisContent");
  //toggling the visibility of the analysis content
  analysisContent.classList.toggle("hidden");
});

//recommendations button
document
  .getElementById("recommendationsBtn")
  .addEventListener("click", function () {
    const recommendationsContent = document.getElementById(
      "recommendationsContent"
    );
    // Toggling the visibility of the recommendations content
    recommendationsContent.classList.toggle("hidden");
  });

///remider button
document.getElementById("remindersBtn").addEventListener("click", function () {
  const remindersContent = document.getElementById("remindersContent");
  // Toggling the visibility of the reminders content
  remindersContent.classList.toggle("hidden");
});

//Handle the form submission (e.g., saving the reminder)
document
  .getElementById("reminderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const time = document.getElementById("time").value;
    alert(`Reminder set for ${time}`);
    // saving the reminder or display a confirmation message
  });
  