$(function() {
  $('#arrival').datepicker();               // turn arrival input to jqui datepicker

  var $amount = $('#amount');               // cache the price input
  var $range = $('#price-range');           // cache the div for the price range

  $('#price-range').slider({                // turn price-range input into a slider
    range: true,                            // set range to true for 2 handles
    min: 0,
    max: 400,
    values: [175, 300],
    slide: function(event, ui) {            // when slider is used update the amount element
      $amount.val('$' + ui.values[0] + ' - $' + ui.values[1]);
    }
  });
  $amount                                   // set initial values of amount element
    .val('$' + $range.slider('values', 0)
    + ' - $' + $range.slider('values', 1));
});
