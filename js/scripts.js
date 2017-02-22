var pigLatin = function(userInput) {
  if(userInput === "a" || userInput === "e"|| userInput === "i" || userInput === "o" || userInput === "u") {
    return userInput + "ay";
  } else {
    return userInput;
  }
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
