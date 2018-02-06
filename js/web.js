$(function(){
  var index=20, 
      step=250,
      parw=298,
      radia=0,
        timer1,
        timer2,
        timer3;

  // web图片下拉特效
 
  $(".web-img-1").on("mouseenter",function(){
    $(".web-img-1").animate({top:"450px"});
    $(this.nextElementSibling).animate({top:"0px"}); 
  })

  $(".web-img-2").on("mouseleave",function(){
    $(".web-img-2").animate({top:"-450px"});
    $(this.previousElementSibling).animate({top:"0"});
  })
  //图片上移特效
  $(".ul1 li img").on("mouseenter",function(){
    $(this).animate({marginTop:"-20px"});
  });
  $(".ul1 li img").on("mouseleave",function(){
    $(this).animate({marginTop:"0"});
  });
    
    // part2手机充电特效
  setInterval(function(){
    index+=2;
    if(index<85){
      $("#battery").css('width',index+'px');  
    }else{
      index=20;
    }
    },100); 
  //工资显示特效
  $(".part2").on("mouseenter",function(){
        clearInterval(timer2);  
        clearInterval(timer1);
        timer1=setInterval(function(){
      step+=2;
      parw-=2;
      if(parw>=0){
        $(".part2-bgc")[0].style.left=step+"px";
        $(".part2-bgc")[0].style.width=parw+"px";
      }else{
        clearInterval(timer1);  
      }
    },10)   
  });
  //鼠标移除覆盖图片特效
  $(".part2").on("mouseleave",function(){
        clearInterval(timer2);  
        clearInterval(timer1);
        timer2=setInterval(function(){
          step-=2;
          parw+=2;
        if(parw!=298){
          $(".part2-bgc")[0].style.left=step+"px";
          $(".part2-bgc")[0].style.width=parw+"px";
        }else{
          clearInterval(timer2);  
        }
        },10)
  });

     
})
