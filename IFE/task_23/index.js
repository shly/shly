var list = [];
var traversal = {
	bft:function(_root){
		if (_root!=null) {
		    list[list.length] = _root;
		    for (var i = 0,len = _root.children.length; i <len; i++) {
		    	arguments.callee(_root.children[i]);
		    }
		}
	}
}

document.querySelector(".btn_group").onclick = function(e){
	var fun = null;
	    list = [];
	if(e.target.nodeType == 1&&e.target.nodeName.toLowerCase() == 'input'){
		fun = e.target.getAttribute("id");
	}
	(traversal[fun])(document.querySelector(".container"));
	var i=0;
    timer = setInterval(function(){
		if(i<list.length){
			list[i].style.backgroundColor = "#00F";
			if(i>0){
			  list[i-1].style.backgroundColor = "";
			}
			i++;
		}else{
			list[i-1].style.backgroundColor = "#FFF";
			clearInterval(timer);
		}
   },500)
}
document.querySelector("#search").addEventListener('click',function(){
	 var findContent = document.querySelector("#searchContent").value;
	  timer = setInterval(function(){
		if(i<list.length){
			list[i].style.backgroundColor = "#00F";
			if(i>0){
			  list[i-1].style.backgroundColor = "";
			}
			i++;
		}else{
			list[i-1].style.backgroundColor = "#FFF";
			clearInterval(timer);
		}
   },500)

});