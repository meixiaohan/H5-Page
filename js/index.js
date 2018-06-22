$(function() {
//	ctrl+shift+f
	//	获取屏幕的宽高
	var nowpage = 0;
	//	当前页数
	var width = window.innerWidth;
	var height = window.innerHeight;

	$(".content").width(width);
	$(".content").height(4 * height);

	$(".page").width(width);
	$(".page").height(height);
	//不是jquery自带的，是引入的插件
	//手指触屏滑动的事件
   var sign = 0
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
			if(direction=="up"){
				nowpage++;
			}
			if(direction=="down")
			{
				nowpage--;
			}
			if(nowpage>3)
			{
				nowpage=3;
			}else if(nowpage<0){
				nowpage=0;
			}
			$(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
			if(nowpage==1){	
				$(".page2-farm").fadeIn(2000,function(){
				$(".page2-it").fadeIn(2000)
				})}
			
			if(nowpage==2){
				if(sign==0){
					$(".earlyTitle").fadeIn(2000);
					$(".lastBusTitle").fadeIn(2000);
					$(".page3-bus").animate({left:"-100%"},{duration:4000})
					$(".lastBusAvatar").animate({right:"50%"},{duration:3000,complete:function(){
					$(".page3-bus").fadeOut("slow");
					$(".lastBusAvatar").fadeOut("slow");
					$(".lastBusTitle").fadeOut("slow");
					$(".earlyTitle").fadeOut("slow");
					$(".lastBusStation").fadeOut("slow",function(){
						$(".myTeamWall").fadeIn("slow");
						$(".myTeamAvatar").fadeIn("slow",function(){
							$(".myTeamSpace").animate({height:"30%"},{duration:2000,complete:function(){
								$(".myteamWhereTxt").animate({height:"12%"},{duration:2000});
							}})
						});
					});
				}})
				sign=1;
				}
				
			}
			
			
			
			}})
			
		}
	});
//	animate({要做的动画效果},{duration:动画时长,comlete:动画执行完了要做的事情})
	
})

$(".page1-Building").fadeIn(400,function(){
	$(".page1-flight").animate({width:"70%"},{duration:2000})
});
	
$(".light-off").click(function(){
	$(this).attr("src","img/lightOn.png")
	$(".cornertitle").fadeOut("slow");
	$(".clickGuide").fadeOut("slow",function(){
		$(".light-on-bg").fadeIn("slow");
		$(".light-off-bg").fadeOut("slow");
	});

})



$("#musicbtn").click(function(){
	var music = $("#music")[0];
	if(music.paused)
	{
		music.play();
		$(this).attr("src","img/musicBtn.png");
	}else{
		music.pause();
		$(this).attr("src","img/musicBtnOff.png")
	}
})
/*$(document).ready(function(){
	
})*/

//等文档完成之后再执行js代码