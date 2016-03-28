$(function(){
	history.replaceState(null,document.title,location.href+"blog/index.html");
	$(".header_container ul li a").click(function(e){
		e.preventDefault();
		$(this).addClass("current").parent("li").siblings().children("a").removeClass("current");
		var url =  $(this).attr("href");
		var href = url+" #container";
		$(".container").load(href);
		window.history.pushState({}, document.title, url);
	});
});
window.addEventListener("popstate", function() {
    var currentState = history.state.url;
    console.log(currentState);
    $(".container").load(href);											
});