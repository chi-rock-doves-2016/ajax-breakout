$(document).ready(function() {


  // figure out what to bind to
  // figure out what even is firing
  // decide whether I need to prevent a behavior
  // test the event

  // ajax
  // what url am I hitting?
  // what method is this? POST, PUT, DELETE
  // am I send data?
  // what do i do when everything comes back from the server

  // check if I need to consider non-xhr
  // what does my server need to respond with?

  // check the server response in request.done

  // figure out what to update on the page

  $("#createGame").on("click", function(event){
    event.preventDefault();

    var $link = $(this);
    $.ajax({
      url: $link.attr("href"),
      success: function(response){
        $link.hide();
        $("#createGameContainer").append(response);
      },
      error: function(response) {
        console.log(response);
      }
    });


  });

  $("#createGameContainer").on("submit", "form", function(){
    event.preventDefault();
    console.log("form submitted");
  })

});


// how does ajax data method map to params
// when the response comes back, how does it know what argument is what