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
