$(function(){
	$(".header_container ul li a").click(function(e){
		e.preventDefault();
		$(this).addClass("current").parent("li").siblings().children("a").removeClass("current");
		var href = $(this).attr("href")+" #content";
		$(".container").load(href);
	});
});