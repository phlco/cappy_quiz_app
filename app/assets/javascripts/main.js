$(document).ready(function(){

  // java jive page
  $('#clickme').on("click", function(){
    $('#javajive').text("Jabba Jive");
    $(document.body).css("background-color", "pink").attr("class", "pink");
    $('#clickme').attr("disabled", "disabled");
  });

  // quizzes page
  $('#num-input').on("keyup", function(e){

      // debugger;
    if( e.which !== 32 ) {
      // debugger;
      var numberInput = $('#num-input').val();
      var numberArray = numberInput.split(' ');
      var originalArray = numberArray.slice(0);
      numberArray.sort();
      sortedString = numberArray.join("");
      nonSortedString = originalArray.join("");
      sortedString = sortedString.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      nonSortedString = nonSortedString.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      sortedString = sortedString.replace(/\s{2,}/g," ");
      nonSortedString = nonSortedString.replace(/\s{2,}/g," ");
      console.log(originalArray);
      console.log(numberArray);
      // debugger;
      if( sortedString === nonSortedString && !isNaN(sortedString) ) {
        $(document.body).css("background-color", "green");
      } else {
        $(document.body).css("background-color", "red");
      }
    }

  });



});