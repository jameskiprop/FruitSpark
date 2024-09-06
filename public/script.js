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
import React from "react";

function App() {
  return (
    <div className="bg-yellow-500 min-h-screen">
      <header className="container p-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-yellow-400 text-5xl font-poppins">FruitSpark</h1>
          <div className="space-x-4">
            <button
              onClick={() => document.documentElement.classList.toggle("dark")}
              className="text-white"
            >
              Toggle Dark Mode
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-white text-center py-20">
        <h1 className="text-lime-400 text-7xl font-bold">
          Fuel Your Day, One Fruit at a Time
        </h1>
        <p className="text-white-600 text-2xl mt-5">
          Nourish Your Body, Empower Your Life
        </p>
        <a
          href="#"
          className="bg-lime-500 text-white text-xl py-3 px-8 mt-10 rounded-full shadow-lg hover:bg-green-800 transform hover:scale-105 transition-transform duration-300"
        >
          Get Started
        </a>
      </section>

      {/* Dashboard */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 px-6">
        {/* Tracker */}
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Daily Tracker
          </h2>
          <p className="text-gray-600">Track your daily fruit intake here.</p>
        </div>
        {/* More sections */}
      </div>

      <footer className="text-white py-6 bg-gray-600">
        <div className="container mx-auto flex justify-between items-center">
          <p>© 2024 FruitSpark. All Rights Reserved.</p>
          <div className="space-x-4">
            <a href="https://facebook.com" className="text-white">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
