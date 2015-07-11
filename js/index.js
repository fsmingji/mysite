/* 
* @Author: anchen
* @Date:   2015-07-10 09:35:05
* @Last Modified by:   anchen
* @Last Modified time: 2015-07-10 17:23:00
*/

$(document).ready(function(){
    var tabItem=$("#tab .tab_item");
    var tabCont=$("#tab .tab_cont");
    tabItem.mouseover(function(){
        $(this).addClass("current").siblings().removeClass("current");
        tabCont.eq($(this).index()).show().siblings().hide();
    });


    var time=null;
    var speed=0;
    var piclength=$(".focus .pic ul li");
    var picwrap=$(".focus .pic ul");
    var picwidth=$(".focus .pic ul li").eq(0).width();
    var picnum=$(".focus .num a");

    $(".focus .num a").mouseover(function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".focus .pic ul").css("left",$(this).index()*(-400)+"px");
    });

    function slider(){
        if(speed==piclength.length-1){
            speed=0;
        }else{
            speed++;
        }
        picwrap.animate({"left":speed*-picwidth},500);
        picnum.eq(speed).addClass("current").siblings().removeClass("current");
    }
    time=setInterval(slider,1500);

    $(".focus").mouseover(function(){
        clearInterval(time);
    });

    $(".focus").mouseout(function(){
        time=setInterval(slider,1500);
    });

    $(".focus .prev_btn").click(function(){
       speed=-1;
    });

    $(".focus .next_btn").click(function(){
        speed=1;
    });
    
    
});