$(function(){
	/*if(location.pathname.length==1){
		var state = {
				url:"/IFE/index.html",
				subfolder:"IFE"
			} 
		history.replaceState(state,"","IFE/index.html");
	}
	$(".header_container ul li a").click(function(e){
		e.preventDefault();
		if($(this).attr("class")!==$(".current").attr("class")){
			var url =  $(this).attr("href");
			var href = url+" #container";
			$(".container").load(href);
			var state = {
				url:url,
				subfolder:$(this).attr("class")
			}
			window.history.pushState(state,"", url);
			$(this).addClass("current").parent("li").siblings().children("a").removeClass("current");
		}
	});
	$(window).on("popstate",function(){
		var currentState = history.state.url;
        $(".container").load(currentState+" #container");
        var currentClass = "."+history.state.subfolder;
        $(currentClass).addClass("current").parent("li").siblings().children("a").removeClass("current");

	});*/
	/*以下为catalog*/
	var temp = '<em class="node-edge start"></em><dl>';
	$.each($(".catalog h2"),function(i,n){
		$(n).attr("id","catalog_"+i);
		temp+='<dd><em class="node"></em><a href="#catalog_'+i+'">'+$(n).html()+'</a></dd>';
	});
	temp+='<em class="node-edge end"></em></dl>';
	$(".side-catalog").html(temp);
});
