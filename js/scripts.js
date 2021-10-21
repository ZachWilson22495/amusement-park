$(document).ready(function() {
  $("#height-form").submit(function(event) {
    event.preventDefault();
    const heightInput = parseInt($("input#height").val());

    if (heightInput <= 44) {
      $('.every-height').show();
      $('.short-height').show();
      $('.medium-height').show();
      $('.tall-height').show();
      $('.every-height').addClass("highlight");
      $('.short-height').addClass("highlight");
      $('.medium-height').removeClass("highlight");
      $('.tall-height').removeClass("highlight");
    } else if (heightInput <= 55) {
      $('.medium-height').show();
      $('.short-height').show();
      $('.every-height').show();
      $('.tall-height').show();
      $('.every-height').addClass("highlight");
      $('.short-height').addClass("highlight");
      $('.medium-height').addClass("highlight");
      $('.tall-height').removeClass("highlight");
    } else {
      $('.every-height').show();
      $('.medium-height').show();
      $('.tall-height').show();
      $('.short-height').show();
      $('.every-height').addClass("highlight");
      $('.short-height').removeClass("highlight");
      $('.medium-height').addClass("highlight");
      $('.tall-height').addClass("highlight");
    }
  });
});