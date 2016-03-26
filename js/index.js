$(function(){
	var itemList = [
    {
	"icon":"back_01",
	"itemName":"服务注册中心"
	},{
	"icon":"back_02",
	"itemName":"可靠消息队列"
	},{
	"icon":"back_03",
	"itemName":"分布式资源管理"
	},{
	"icon":"back_04",
	"itemName":"数据中心"
	},{
	"icon":"back_05",
	"itemName":"无线通知中心"
	},{
	"icon":"back_06",
	"itemName":"统一配置管理"
	},{
	"icon":"back_07",
	"itemName":"分布式事务"
	},{
	"icon":"back_08",
	"itemName":"分布式调度管理"
	},{
	"icon":"back_01",
	"itemName":"无线分析"
	},{
	"icon":"back_05",
	"itemName":"无线网关"
	}
	];
	init();
	window.onresize = function(){ 
		setHeight();
	} 
	//统一取消a的默认行为
	$("a").click(function(e){
		e.preventDefault();
	});
	//处理页码
	$(".pages").delegate("a:not('.dealPage')","click",function(){
		$(this).addClass("now").siblings("a").removeClass("now");
	});
	$(".prePage").click(function(){
		if($(".now").text()!=1){
			$(".now").removeClass("now").prev().addClass("now");
		}
	});
	$(".nextPage").click(function(){
		if($(".now").text()!=5){
			$(".now").removeClass("now").next().addClass("now");
		}
	});
	$(".firstPage").click(function(){
		$(".prePage").next().addClass("now").siblings().removeClass("now");
	});
	$(".lastPage").click(function(){
		$(".nextPage").prev().addClass("now").siblings().removeClass("now");
	});
     //处理顶部下拉菜单
	$(".company a").click(function(){
		$(".introduce").toggle();
	});
	//处理左侧三
	$(".rectangle").click(function(){
		$("aside").toggleClass("closeAside");
		$(".container").toggleClass("full");
		$("aside ul").toggle();
	});
	//点击组件  
	$(".modules ul").delegate("li","click",function(){
		$(this).toggleClass("hover").siblings().removeClass("hover");
	});
	//换样式
	$(".item").click(function(){
		$(".modules li").toggleClass("large");
		setHeight();
	});
	$(".input_name").keyup(function(e){
		var keyCode = e.keyCode || e.which || e.charCode; 
		if(keyCode == 13){
			var keyword = $(".input_name").val();
            queryItem(keyword);
		}
		
	});
	$(".search").click(function(){
		var keyword = $(".input_name").val();
        queryItem(keyword);
	});
	function queryItem(keyword){
		keyword = keyword||"";
		var html="";
		for (var i = itemList.length - 1; i >= 0; i--) {
			if(keyword==""||itemList[i].itemName.indexOf(keyword)!=-1){
				var icon = itemList[i].icon;
				var itemName = itemList[i].itemName;
				html +=  '<li><i class="moduleLogo '+icon+'"></i>'
				     +' <div class="moduleContent">'
				     +' <h2><a href="">'+itemName+'</a></h2>'
				     + '<p>版本：1.0</p>'
				     +' <p>源自共享：否</p></div> '
				     +'<div class="controller">'
				     + ' <a href="">运维</a><span class="divider">|</span><a href="">详情</a>'
				     + '</div></li> ';
			
			}
		}
		$(".modules ul").html(html);
		 
	}

	function setHeight(){
		var height = $(".container").height();
		console.log(height);
		if(height > 700){
			$("aside").height(height);
		}	
	} 
	function init(){
	   setHeight();
	   queryItem();
	}

});