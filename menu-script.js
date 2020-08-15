$(document).ready(function() {
  var section = location.pathname.split("/")[1];

  if (section === "") {
      section = "home"
  }
  
  // remove .html and .htm extensions
  var extensionPosition = section.lastIndexOf("htm");
  if (extensionPosition > 0) {
	  section = section.substring(0, extensionPosition - 1);
  }
  
  $(".menu-button").removeClass("active");
  $(".menu-button[data-menu=" + section + "]").addClass("active");

});

