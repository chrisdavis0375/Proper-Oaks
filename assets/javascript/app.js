$(document).ready(function () {
  console.log("Javascript working");
  $("#collapsedLinks").css("display", "none");
  $(".burger-icon").click(function menuToggle() {
    console.log("Menu toggled.");
    document.getElementById("burger").classList.toggle("nav-button-color");
    if ($("#collapsedLinks").css("display") === "flex") {
      $("#collapsedLinks").css("display", "none");
    } else {
      $("#collapsedLinks").css("display", "flex");
    }
  });
  window.onresize = function () {
    $("#collapsedLinks").css("display", "none");
  };
});
