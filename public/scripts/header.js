// var header = document.getElementById("myHeader");
const mobileMenuBtnElement = document.getElementById('mobile-toggle');
const mobileMenuElement = document.getElementById('mobile-menu');
const mobiledropdownE = document.querySelector('#mobile-menu .dropdown');
const mobiledropdownMenuE = document.querySelector('#mobile-menu .dropdownmenu');

// var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// window.onscroll = function () {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

mobileMenuBtnElement.onclick = function () {
  mobileMenuElement.classList.toggle('open');
}

mobiledropdownE.onclick = function () {
  mobiledropdownMenuE.classList.toggle('open');
  console.log("iwork")
}