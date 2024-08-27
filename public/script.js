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

//function
