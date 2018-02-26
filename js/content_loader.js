var current = 3; // services goes first
// $(document).ready(function (){
//   $( "#box" ).load( "services.html" );
// });
// click handles
$('.bottom').click({param1: "marek.html",param2: 2}, change_content);
$('.top').click({param1: "anna.html",param2: 1}, change_content);
$('.services-menu').click({param1: "services.html",param2: 3}, change_content);
$('.anna-menu').click({param1: "anna.html",param2: 1}, change_content);
$('.marek-menu').click({param1: "marek.html",param2: 2}, change_content);
$('.main-menu').click({param1: "services.html",param2: 0}, change_content);
// reset active navbar items
$(document).ready(function(){
  $('.services-menu').addClass('active');
  $('.main-menu').addClass('active');
  $('.meet-us').addClass('active');
});
// set proper navbar item active
function setActive(curr) {
  $('.navbar li').removeClass('active');
  if (curr == 0){
      if (!$('.main-menu').hasClass('active')) {
        $('.services-menu').addClass('active');
        $('.main-menu').addClass('active');
      }
  } else if (curr == 1){
    if (!$('.anna-menu').hasClass('active')) {
      $('.anna-menu').addClass('active');
      $('.main-menu').addClass('active');
      $('.meet-us').addClass('active');
    }
  } else if (curr == 2){
      if (!$('.marek-menu').hasClass('active')) {
        $('.marek-menu').addClass('active');
        $('.main-menu').addClass('active');
        $('.meet-us').addClass('active');
      }
  } else if (curr == 3){
      if (!$('.services-menu').hasClass('active')) {
        $('.services-menu').addClass('active');
        $('.main-menu').addClass('active');
        $('.meet-us').addClass('active');
      }
  }
}
// change content with jquery
function change_content(event){
  event.preventDefault();
  //console.log(event.data.param2 +'  '+ current+' '+event.data.param1);
  if ( current !== event.data.param2 && event.data.param2 !==0 ){
  $('#box').fadeOut(900, 'linear', function(){
      $('#box').load(event.data.param1, function(){
          $('#box').fadeIn(900,'linear');
          current = event.data.param2;
          // make active only proper item of navbar
            // available: meet-us anna-menu marek-menu main-menu services
          setActive(current);
          if (current ==2){
            load_svg();
          }
        });
    });
  } else {
    setActive(current);
  }
};
