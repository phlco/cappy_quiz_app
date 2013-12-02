
var sortedString;
var nonSortedString;
var numberInput;

$(document).ready(function(){

  // java jive page
  $('#clickme').on("click", function(){
    $('#javajive').text("Jabba Jive");
    $(document.body).css("background-color", "pink").attr("class", "pink");
    $('#clickme').attr("disabled", "disabled");
  });

  // quizzes page
  $('#num-input').on("keyup", function(e){
    var numberArray;
    var originalArray;
    if(e.which !== 32 && e.which !== 8) {

      numberInput = $('#num-input').val();
      numberArray = numberInput.split(" ");
      originalArray = numberArray.slice(0);
      numericalArray = [];
      for( i = 0; i < numberArray.length; i++ ) {
        integer = parseInt(numberArray[i], 10);
        numericalArray.push(integer);
      }
      numericalArray.sort(function(a,b) {return a-b;});
      sortedString = numericalArray.join("");
      nonSortedString = originalArray.join("");
      sortedString = sortedString.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      nonSortedString = nonSortedString.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      sortedString = sortedString.replace(/\s{2,}/g,"");
      nonSortedString = nonSortedString.replace(/\s{2,}/g,"");
      if( sortedString === nonSortedString && !isNaN(sortedString) ) {
        $(document.body).css("background-color", "green");
      } else {
        $(document.body).css("background-color", "red");
      }
    }
    else if( e.which === 8 ) {
      numberInput = numberInput.substring(0, numberInput.length - 1);
      console.log(numberInput);
      numberArray = numberInput.split(" ");
      originalArray = numberArray.slice(0);
      numericalArray = [];
      for( i = 0; i < numberArray.length; i++ ) {
        integer = parseInt(numberArray[i], 10);
        if(!isNaN(integer)){

        numericalArray.push(integer);
        }
      }
      numericalArray.sort(function(a,b) {return a-b;});
      sortedString = numericalArray.join("");
      nonSortedString = originalArray.join("");
      sortedString = sortedString.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      nonSortedString = nonSortedString.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      // sortedString = sortedString.replace(/\s{2,}/g,"");
      // nonSortedString = nonSortedString.replace(/\s{2,}/g,"");
      // sortedString.replace(" ", "");
      console.log(sortedString);
      console.log(nonSortedString);
      if( sortedString === nonSortedString && !isNaN(nonSortedString) ) {
        $(document.body).css("background-color", "green");
      } else {
        $(document.body).css("background-color", "red");
      }
    }



  });



});