$(document).ready(function(){
  
  $(function(){
    
    $('.container .slides:gt(0)').hide();
    setInterval(function(){
      $('.container :first-child').fadeOut(1200).next('.slides').fadeIn(2200)
      .end(1000).appendTo('.container');
  	}, 3000);
    
  });
 });
