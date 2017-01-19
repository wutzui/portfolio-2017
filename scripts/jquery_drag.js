$(document).ready(function(){
  $( ".drag" ).draggable({
    stack: ".drag"
  });
})


$(document).ready(function(){
  $( ".hover" ).mouseover(function(){
    $("#hi-pp").css("opacity", "0");
  });
  $( ".hover" ).mouseleave(function(){
    $("#hi-pp").css("opacity", "1");
  });
})


