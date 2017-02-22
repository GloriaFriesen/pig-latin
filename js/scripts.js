var pigLatin = function(userInput) {
  var arrayInput = userInput.split("");
  var result = "";

  if (arrayInput[0] === "a" || arrayInput[0] === "e"|| arrayInput[0] === "i" || arrayInput[0] === "o" || arrayInput[0] === "u" || arrayInput[0] === "A" || arrayInput[0] === "E" || arrayInput[0] === "I" || arrayInput[0] === "O" || arrayInput[0] === "U") {
    // return userInput + "ay";
    console.log(arrayInput);
    arrayInput.push(arrayInput.shift(), "a", "y");
    result = arrayInput.join("");
  } else {
    result = arrayInput.join("");
  }
  return result;
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
