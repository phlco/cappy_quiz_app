$(document).ready(function(){

  // java jive page
  $('#clickme').on("click", function(){
    $('#javajive').text("Jabba Jive");
    $(document.body).css("background-color", "pink").attr("class", "pink");
    $('#clickme').attr("disabled", "disabled");
  });

  // quizzes page
  $('#num-input').on("keyup", function(e){

    if(e.which !== 32 && e.which !== 8) {

      var numberInput = $('#num-input').val();
      var numberArray = numberInput.split(" ");
      var originalArray = numberArray.slice(0);
       numericalArray = [];
      for( i = 0; i < numberArray.length; i++ ) {
        integer = parseInt(numberArray[i], 10);
      // debugger;
      numericalArray.push(integer);
    }
    numericalArray.sort(function(a,b) {return a-b;});
    var  sortedString = numericalArray.join("");
    var nonSortedString = originalArray.join("");
    sortedString = sortedString.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    nonSortedString = nonSortedString.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    sortedString = sortedString.replace(/\s{2,}/g,"");
    nonSortedString = nonSortedString.replace(/\s{2,}/g,"");
    console.log(originalArray);
    console.log(numericalArray);
      // debugger;
      if( sortedString === nonSortedString && !isNaN(sortedString) ) {
        $(document.body).css("background-color", "green");
      } else {
        $(document.body).css("background-color", "red");
      }
    }



  });



});