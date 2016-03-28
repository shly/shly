$(function(){
	$(".header_container ul li a").click(function(e){
		e.preventDefault();
		$(this).addClass("current").parent("li").siblings().children("a").removeClass("current");
		var href = $(this).attr("href")+" #container";
		$(".container").load(href);
		var url = window.location.host+$(this).attr("href");
		window.history.pushState(state, document.title, url);
	});
});