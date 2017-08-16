 var main = function() {
   $('form').submit(function() {
     var comment = $('#comment').val();

     if(comment !== "") {
       var html = $('<li>').text(comment);

       $(html).prependTo('.comments');
       $('#comment').val("");
     } else {
       $('#error-message').text("Please write something in the text box below!");
       $('#error-message').fadeOut(5000);
     }

     return false;
   });
 };

 $(document).ready(main);
