$(document).ready(function() {
  $("#height-form").submit(function(event) {
    event.preventDefault();
    const heightInput = parseInt($("input#height").val());

    if (heightInput <= 44) {
      $('.every-height').show();
      $('.short-height').show();
      $('.medium-height').hide();
      $('.tall-height').hide();
    } else if (heightInput <= 55) {
      $('.medium-height').show();
      $('.short-height').show();
      $('.every-height').show();
      $('.tall-height').hide();
    } else {
      $('.every-height').show();
      $('.medium-height').show();
      $('.tall-height').show();
      $('.short-height').hide();
    }
  });
});