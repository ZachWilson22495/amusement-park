$(document).ready(function() {
  $("#height-form").submit(function() {
    const heightInput = parseInt($("input#height").val());

    if (heightInput <= 44) {
      $('.short-height').show();
    } else if (heightInput <= 55) {
      $('.medium-height').show();
      $('.short-height').show();
    } else (heightInput => 44) {
      $('.medium-height').show();
      $('.tall-height')
    }
  });
});