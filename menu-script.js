$(document).ready(function() {
  var section = location.pathname.split("/")[1];
  if (section === "") {
      section = "home"
  }
  $(".menu-button").removeClass("active");
  $(".menu-button[data-menu=" + section + "]").addClass("active");

});

