// Grabbing elements
const parent = document.querySelector("#parent");
const main = document.querySelector("#main");
const child = document.querySelector("#child");
const secondChild = document.querySelector("#secondChild");

// Event Listeners
child.addEventListener(
  "click",
  function () {
    console.log("children clicked");
  },
  true
);
parent.addEventListener(
  "click",
  function () {
    console.log("parent clicked");
  },
  true
);
main.addEventListener(
  "click",
  function () {
    console.log("main clicked");
  },
  true
);
secondChild.addEventListener(
  "click",
  function () {
    console.log("second child clicked");
  },
  true
);
