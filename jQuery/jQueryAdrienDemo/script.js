$(document).ready(function(){
  var count = 0;
  $('#clickToLike').click(function(){
    count++
    $('#likes').text(count);
  })
});