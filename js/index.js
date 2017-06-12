//轮播效果
$(document).ready(function(){
	var leftBtn=$(".btn-left");//获取左侧箭头
	var rightBtn=$(".btn-right");//获取右侧箭头
	var oLi=$(".header-middle ul li");//获取所有的轮播图片
	var iNow=0;
	//向左点击
	leftBtn.click(function(){
		iNow--;
		if(iNow<0){
			iNow=oLi.length-1;
		}
		oLi.eq(iNow).siblings().stop().hide();
		oLi.eq(iNow).stop().show();
	});
	rightBtn.click(function(){
		iNow++;
		if(iNow>oLi.length-1){
			iNow=0;
		}
		oLi.eq(iNow).siblings().stop().hide();
		oLi.eq(iNow).stop().show();
	});
	//封装函数体
	function switchPicture(){
		oLi.eq(iNow).siblings().stop().hide();
		oLi.eq(iNow).stop().show();
	}
	function move(){
		iNow++;
		if(iNow>oLi.length-1){
			iNow=0;
		}
		switchPicture();
	}
	//设置定时器
	timer=setInterval(move,3000);
	//当鼠标滑入时停止轮播
	$(".carousel").mouseover(function(){
		clearInterval(timer);
	})
	//当鼠标滑出时继续轮播
	$(".carousel").mouseout(function(){
		timer=setInterval(move,3000)
	})
})



//选项卡效果
$(document).ready(function(){
	$(".main2-left-header-nav li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		var index=$(this).index();
		$(".main2-left-content-switch > div").eq(index).show().siblings().hide();
	})
})