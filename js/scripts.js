var pigLatin = function(userInput) {
  return userInput;
};

$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userInput").val();
    var result = pigLatin(userInput);

    $(".result").text(result);
    $("#output").show();
  });
});
