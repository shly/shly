$(function(){
	if(location.pathname.length==1){
		history.replaceState({url:"/IFT/index.html"},"",location.href+"IFT/index.html");
	}
	$(".header_container ul li a").click(function(e){
		e.preventDefault();
		$(this).addClass("current").parent("li").siblings().children("a").removeClass("current");
		var url =  $(this).attr("href");
		var href = url+" #container";
		$(".container").load(href);
		var state = {
			url:url
		}
		window.history.pushState(state,"", "");
		
	});
	$(window).on("popstate",function(){
		var currentState = history.state.url;
        $(".container").load(currentState+" #container");
	});
});
