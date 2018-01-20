$(document).ready(function() {
// I know that is mixed jquery with pure js... I started with pure js
    setTimeout(function(){
        $('body').addClass('loaded');
      }, 2000);

      setTimeout(function(){
        slider();
      }, 3500);
});

var slider = function (){
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let slideImage1 = wrapper.querySelector('.slide-image1');
  let slideImage2 = wrapper.querySelector('.slide-image2');
  let slideImageMid1 = wrapper.querySelector('.slide-image-mid1');
  let slideImageMid2 = wrapper.querySelector('.slide-image-mid2');
  let annaString = wrapper.querySelector('.anna-string');
  let marekString = wrapper.querySelector('.marek-string');
  let handle = wrapper.querySelector('.handle');;
  let vertical = 0;
  let delta = 0;

  if(wrapper.className.indexOf('vertical') != -1){
    vertical = 1000;
  }

  // new window width when resize
    window.addEventListener("resize", function() {
        WindowWidth = window.innerWidth;
    });

    var mouseIsOver = false;
    $("#wrapper").mouseover(function(){
      mouseIsOver = true;
    });
    $("#wrapper").mouseleave(function(){
      mouseIsOver = false;
    });

    // on mosemove
    document.addEventListener("mousemove", getMouse);
    WindowWidth = window.innerWidth;

    var ItemPosX = WindowWidth/2;
    var ImgPosX = WindowWidth/2;
    var ImgPosXMid = WindowWidth/2;

    setInterval(followMouse, 75);
    // mouse
    var MouseX = WindowWidth/2;
    var RevMouseX = WindowWidth/2;

    function getMouse(e){
      // dynamics
      if (mouseIsOver === true){
        if (e.pageX < 0.4 * (WindowWidth/2) ){
          MouseX = 0.8 * e.pageX;
        } else if (e.pageX > 0.6 * (WindowWidth/2) ) {
          MouseX = 1.2 * e.pageX;
        }
        else{
        MouseX = e.pageX;
        }
      // when mouse leave then get back to the middle
      } else {
        MouseX = WindowWidth/2;
      }
      RevMouseX = WindowWidth-MouseX;
    }

    function followMouse(){
      //find distance X (reversed)
      var distX = RevMouseX - ItemPosX;
      //Easing motion
     //Progressive reduction of distance
      ItemPosX += distX/10;
      //move bar and visibility
      handle.style.left = ItemPosX  + 'px';
      topLayer.style.width= vertical + ItemPosX + 'px';
      // from here to the end is mess with math functions to handle position and opacity
      PosXfromMiddle = 1 - ItemPosX/(WindowWidth/2 );
      PosXfromMiddle = -1 * PosXfromMiddle *  (WindowWidth/2);
      ImgPosX = (WindowWidth/2) + PosXfromMiddle*0.4;

      slideImage1.style.left= ImgPosX + 'px';
      slideImage2.style.left= ImgPosX + 'px';

      ImgPosXMid = (WindowWidth/2) + PosXfromMiddle*0.1;
      slideImageMid1.style.left= ImgPosXMid + 'px';
      slideImageMid2.style.left= ImgPosXMid + 'px';

      // paragraphs
      AbsolutePos = ItemPosX/WindowWidth;

      AnnaOpacity = 2*AbsolutePos - (1 - ItemPosX/(WindowWidth/2));
      if (AnnaOpacity < 1.0 && AnnaOpacity > 0) {
        annaString.style.opacity = AnnaOpacity;
      }

      MarekOpacity = (1/AbsolutePos - 1) - (ItemPosX/(WindowWidth/2) - 1);
      if (MarekOpacity < 1.0 && MarekOpacity > 0) {
        marekString.style.opacity = MarekOpacity;
      }

    }
};
