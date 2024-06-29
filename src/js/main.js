// This function will call when you click on menu bar icon in navigation, it works such as showing sidebar when breakpoint 767px
function openNavBar() {
  //Add class openSideBar to side-bar
  document.querySelector(".side-bar").classList.add("open-sideBar");
  //Make waht behind sidebar when click on menu menu can't scroll
  document.querySelector("html").classList.add("overflow-y-hidden");
  //Make waht behind sidebar when click on menu menu blur
  document.getElementById("background-blur").classList.remove("hidden");
}

// This function will call when you click on close icon in side bar, it works such as closing sidebar when breakpoint 767px
function closeNavBar() {
  //Remove class openSideBar to side-bar
  document.querySelector(".side-bar").classList.remove("open-sideBar");
  //Close waht behind sidebar when click on menu menu can't scroll
  document.querySelector("html").classList.remove("overflow-y-hidden");
  //Close waht behind sidebar when click on menu menu blur
  document.getElementById("background-blur").classList.add("hidden");
}
