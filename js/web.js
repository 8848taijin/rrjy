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
  //课程简介点击显示
  //找到所有的阶段
  for(var i=0;i<$(".part4-top ul li a").length;i++){
    $(".part4-top ul li a")[i].onclick=function(){
      if(this.innerText=="第一阶段"){
          $(".cl1")[0].style.display="block";
          $(".cl2")[0].style.display="none";
          $(".cl3")[0].style.display="none";
          $(".cl4")[0].style.display="none";
      }else if(this.innerText=="第二阶段"){
          $(".cl1")[0].style.display="none";
          $(".cl2")[0].style.display="block";
          $(".cl3")[0].style.display="none";
          $(".cl4")[0].style.display="none";
      }else if(this.innerText=="第三阶段"){
          $(".cl1")[0].style.display="none";
          $(".cl2")[0].style.display="none";
          $(".cl3")[0].style.display="block";
          $(".cl4")[0].style.display="none";
         
      }else{
          $(".cl1")[0].style.display="none";
          $(".cl2")[0].style.display="none";
          $(".cl3")[0].style.display="none";
          $(".cl4")[0].style.display="block";
      }
    }
  }
  //图片翻转特效
  for(var i=0;i<$(".con-img img").length;i++){
    var radia;
    var opa=1;
    var bgcop=0;
    // 鼠标移入背景淡出效果
    $(".con-img")[i].onmouseenter=function(){
        clearInterval(timer3);  
        var self=this;
        timer3=setInterval(function(){
        radia+=1;
        opa-=0.009;
        bgcop+=0.01;
        if(radia !== 90){   
            self.children[0].style.transform= 'rotateY('+radia+'deg)';
            self.children[1].style.opacity=bgcop;
          }else{
            clearInterval(timer3);  
            self.children[0].style.transform= 'rotateY(90deg)';
            self.children[1].style.opacity=bgcop;
            radia=0;
            bgcop=0; 
          }

      },10)

     }
    //鼠标移除
   $(".con-img")[i].onmouseleave=function(){
      clearInterval(timer3);
      this.children[0].style.transform= 'rotateY(0deg)';
      this.children[1].style.opacity= 0;
      bgcop=0;
      radia=0;
    } 
  }

     
})
