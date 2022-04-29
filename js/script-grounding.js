// this function puts the grid image in the browser as per the dropdown value selected
const returnGridImage = function () {
  let gridShape = document.getElementById("grid-shape").value;
  let image;
  if (gridShape == "square-grid-wo-gr") {
    image = "./img/one.png";
  } else if (gridShape == "square-grid-with-gr") {
    image = "./img/two.png";
  } else if (gridShape == "rectangular-grid-with-gr") {
    image = "./img/three.png";
  } else if ((gridShape = "L-shaped-grid-with-gr")) {
    image = "./img/four.png";
  }
  //sets image link to img tag with is grid-image
  document.getElementById("grid-image").src = image;
  // // saves the value/link of image in a key imageKey so that even if we refresh the browser the same image is shown
  // sessionStorage.setItem("imageKey", image);
};

// document.getElementById("grid-image").src = sessionStorage.getItem("imageKey");

// store image and also value of dropdown in localstorage
// make a local storage or session storage  fucntion to store alldata

// use kaTeX

// // katex.render("c = \\pm\\sqrt{a^2 + b^2}", document.getElementById("sss"), {
//   throwOnError: false,
// });

document.getElementById("sss").innerText = katex.renderToString(
  "c = \\pm\\sqrt{a^2 + b^2}"
);
console.log("asd");
