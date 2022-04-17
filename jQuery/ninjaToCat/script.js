$(document).ready(function(){
  $('img').click(function(){
    console.log("this function hit")
    $(this).attr('placeholder', $(this).attr('src'));
    $(this).attr('src', $(this).attr('data-alt-src'));
    $(this).attr('data-alt-src', $(this).attr('placeholder'));
  });
});