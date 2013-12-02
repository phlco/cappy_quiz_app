$("#button").on("click", function(e){
  $("#jive").text("Jabba Jive")
  $("body").addClass("pink");
  $(this).attr("disabled", "disabled");
});
$("#calc-button").on("click", function(e) {
  green = check_increasing($("#calc").val())
  if (green == true) {
    $("body").addClass("green")
  }
  else {$("body").addClass("red")};
})
var check_increasing = function(nums) {
  numArray = nums.split(", ");
  var highNum = parseInt(numArray[0]);
  numArray.forEach(function(num){
    iNum = parseInt(num);
    if (iNum >= highNum) {
      highNum = iNum;
    }
  })
  if (highNum == parseInt(numArray[numArray.length - 1])) {
    return true;
  }
  else {return false};
}
