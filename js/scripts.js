var pigLatin = function(userInput) {
  var arrayInput = userInput.split("");
  var array = [];
  var vowel = "";
  var consonant = "";


  for (var i=0; i < userInput.length; i++)
  if (userInput.charAt(i) === "a" || userInput.charAt(i) === "e"|| userInput.charAt(i) === "i" || userInput.charAt(i) === "o" || userInput.charAt(i) === "u" || userInput.charAt(i) === "A" || userInput.charAt(i) === "E" || userInput.charAt(i) === "I" || userInput.charAt(i) === "O" || userInput.charAt(i) === "U") {

    var vowel = userInput.slice(i, userInput.length);

    i = userInput.length;
  } else if (userInput.charAt(i) === "q" || userInput.charAt(i) === "Q") {
    if(userInput.charAt(i+1) === "u" || userInput.charAt(i) === "U") {
      array.push(userInput.charAt(i));
      array.push(userInput.charAt(i+1));
      i++;
    }
  } else {
    array.push(userInput.charAt(i));
  }

  consonant = array.join("");
  return vowel + consonant + "ay";  //strap -- "ap" + "str" + "ay"
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
