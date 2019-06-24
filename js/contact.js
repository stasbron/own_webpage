


$(function() {
  $('.submit').click(sendForm);
})



function sendForm(e) {
  var form = document.querySelector('form');
  if (form.checkValidity()) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/ssbron2@gmail.com", 
            method: "POST",
            data: {
              name: $('#name').val(),
              email: $('#email').val(),
              message: $('#message').val()
            },
            dataType: "json"
        })
        .done(function() { 
          $('.form').html('<img src="img/okey.png" alt="ok" id="okey"> <p>Sent!</p>');
        });
  }
}


jQuery(document).ready(function(){
  
  jQuery('.progress-bar').each(function() {
    jQuery(this).find('.progress-content').animate({
      width:jQuery(this).attr('data-percentage')
    },2000);
    
    jQuery(this).find('.progress-number-mark').animate(
      {left:jQuery(this).attr('data-percentage')},
      {
       duration: 2000,
       step: function(now, fx) {
         var data = Math.round(now);
         jQuery(this).find('.percent').html(data + '%');
       }
    });  
  });
});