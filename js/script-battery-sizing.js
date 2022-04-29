const linearInterpolation = function () {
  // this function linearly interpolates - gets 2 points and one x value in between the 2 points and returns y value of intermediate point
  //   the function takes 3 input values x coordinate of intermediate point, array of one point and array of another point
};

const fFactor = function () {
  // this function gets time and temprature as input and returns the F Factor of Exide lead acid battery.
};

const calculate = function () {
  //each time a value is entered into an input field this function gets executed for calculating many outputs in many fields
  document.getElementById("3x2-input").value =
    document.getElementById("3x1-input").value;
  document.getElementById("3x4-input").value =
    document.getElementById("3x3-input").value;
  document.getElementById("3x6").innerText =
    document.getElementById("3x2-input").value *
    document.getElementById("3x4-input").value *
    document.getElementById("3x5-input").value;
  document.getElementById("4x1").innerText =
    document.getElementById("3x6").innerText;
};
