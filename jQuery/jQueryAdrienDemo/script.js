$(document).ready(function(){
  var count = 0;
  $('#clickToLike').click(function(){
    count++
    console.log("count is: " + count);
    $('#likes').text(count);
  })
});