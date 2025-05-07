
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
  
    // Corrected date setting
    function newDate() {
      return new Date().getFullYear();
    }
  
    // Use `$(document).ready()` or `window.onload` instead of `document.onload`
    // Also, fix the way you assign the value
    $("#autodate").text(newDate());
  });
  