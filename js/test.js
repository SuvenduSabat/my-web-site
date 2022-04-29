// const jsonData = require("../batteryF/1_hour.json");
// console.log(jsonData);
fetch("../batteryF/1_hour.json")
  .then((response) => response.json())
  .then((data) => console.log());

console.log(jsonData.data[5].value[1]);
