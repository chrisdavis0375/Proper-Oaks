console.log("Javascript working");

$(".burger-icon").click(function menuToggle() {
  console.log("Menu toggled.");
  document.getElementById("burger").classList.toggle("nav-button-color");
  if ($("#collapsedLinks").css("display") === "flex") {
    $("#collapsedLinks").css("display", "none");
    console.log("bitch");
  } else {
    $("#collapsedLinks").css("display", "flex");
  }
});
window.onresize = function () {
  $("#collapsedLinks").css("display", "none");
};
