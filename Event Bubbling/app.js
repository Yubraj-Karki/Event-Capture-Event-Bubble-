// Grabbing elements
const parent = document.querySelector("#parent");
const main = document.querySelector("#main");
const child = document.querySelector("#child");
const secondChild = document.querySelector("#secondChild");

// Event Listeners
child.addEventListener("click", function () {
  console.log("children clicked");
});
parent.addEventListener("click", function () {
  console.log("parent clicked");
});
main.addEventListener("click", function () {
  console.log("main clicked");
});
secondChild.addEventListener("click", function () {
  console.log("second child clicked");
});
