'use strict'
$(function(){
  // wheel func start
  let wHeight = $(window).innerHeight();
  let direc = 0;
  let wheelAction = false;
  let maxDirec = $(".wheel-wrap").length - 1;
  function wheelMove(){
    $("html").animate({scrollTop: direc*wHeight},{
      duration: 1000,
      start: function(){
        wheelAction = true;
      },
      complete: function(){
        wheelAction = false;
      }
    });
  };
  wheelMove();
  $(window).on('wheel',function(event){
    let eventDelta = event.originalEvent.wheelDelta;
    if( eventDelta > 0 && wheelAction == false ){
      if( direc <= 0 ){
        direc = 0;
      }else{
        direc--;
        wheelMove();
      }
    }else if( eventDelta < 0 && wheelAction == false ){
      if( direc >= maxDirec ){
        direc = maxDirec;
      }else{
        direc++;
        wheelMove();
      };
    }
  });
  // wheel func end

  // fp-menu func start
  $(function(){
    $("#fp-menu li").on("click", function(){
      $("#fp-menu li").removeClass("on");
      $(this).addClass("on");
      return false;
    });
  });
    $(function(){
      $("#fp-menu li a").click(function(){
        let thisHash = $(this.hash);
        $("html,body").stop();
        $("html,body").animate({scrollTop: thisHash.offset().top},500);
        return false;
      });
    });
});
