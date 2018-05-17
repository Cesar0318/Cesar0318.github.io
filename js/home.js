$(document).ready(function(){
  
  $(function(){
    
    $('.container .slides:gt(0)').hide();
    setInterval(function(){
      $('.container :first-child').fadeOut(1000).next('.slides').fadeIn(2200)
      .end().appendTo('.container');
  	}, 2200);
    
  });
 });
