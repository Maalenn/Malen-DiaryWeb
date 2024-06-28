// This function will call when you click on menu bar icon in navigation, it works such as showing sidebar when breakpoint 767px
function openNavBar() {
  //add class openSideBar to side-bar
  document.querySelector(".side-bar").classList.add("openSideBar");
  //make waht behind sidebar when click on menu menu can't scroll
  document.querySelector("html").classList.add("overflow-y-hidden");
  //make waht behind sidebar when click on menu menu blur
  document.getElementById("background-blur").classList.remove("hidden");
}

// This function will call when you click on close icon in side bar, it works such as closing sidebar when breakpoint 767px
function closeNavBar() {
  //remove class openSideBar to side-bar
  document.querySelector(".side-bar").classList.remove("openSideBar");
  //close waht behind sidebar when click on menu menu can't scroll
  document.querySelector("html").classList.remove("overflow-y-hidden");
  //close waht behind sidebar when click on menu menu blur
  document.getElementById("background-blur").classList.add("hidden");
}
