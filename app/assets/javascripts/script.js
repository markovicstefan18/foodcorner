

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

$(document).ready(function(){
  $("#dole").mouseover(function(e){
    var image = $(e.target).attr("id");
    if ("dole" !== image) document.getElementById("gore").innerHTML = "<img src=/img/" + image + ".jpeg>";
  });


});


$(document).ready(function(){
  $(".icon-load").fadeOut("slow");
});
