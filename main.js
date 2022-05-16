let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

let ddayBtn = document.querySelector(".bx-alarm-add");
let box2Flex = document.querySelector(".box2_flex");
let goalBtn = document.querySelector(".bx-add-to-queue");
let box3Flex = document.querySelector(".box3_flex");
let dBtn = document.querySelector("#dday_btn");
let gBtn = document.querySelector("#goal_btn");

ddayBtn.addEventListener("click", () => {
  box2Flex.classList.toggle("active");
});

dBtn.addEventListener("click", () => {
  box2Flex.classList.toggle("active");
});

goalBtn.addEventListener("click", () => {
  box3Flex.classList.toggle("active");
});

gBtn.addEventListener("click", () => {
  box3Flex.classList.toggle("active");
});

// const calc = () => {
//   var now = new Date($("#start").val());
//   var then = new Date($("#end").val());
//   var gap = now.getTime() - then.getTime();
//   gap = Math.floor(gap / (1000 * 60 * 60 * 24));

//   if (gap < 0)
//   {
//       $("#output").text(("D " + gap));
//   }
//   else
//   {
//       $("#output").text(("D + " + gap));
//   }
// }
