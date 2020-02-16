$(document).ready(function() {
  $("button").click(function(e) {
    e.preventDefault();
    $("#infos")
      .show()
      .css("width", "100%");
    $("#infos").addClass("modal");
    $("button").hide();
    $("footer").hide();
      $("#skills").hide();

  });
  $("#infos").click(function(e) {
    e.preventDefault();
    $("button").show();
    $("footer").show();
    $("#skills").show();
    $("#infos")
      .hide()
      .css("width", "300px");
    $("#infos").removeClass("modal");
  });
});
