var list = [];
var traversal = {
	preorder:function(_root){
		if (_root!=null) {
		    list[list.length] = _root;
			arguments.callee(_root.children[0]);
		    arguments.callee(_root.children[1]);
		}
	},
	inorder:function(_root){
		if (_root!=null) {
			arguments.callee(_root.children[0]);
			 list[list.length] = _root;
		    arguments.callee(_root.children[1]);
		}
	},
	postorder:function(_root){
		if (_root!=null) {
			arguments.callee(_root.children[0]);
		    arguments.callee(_root.children[1]);
		    list[list.length] = _root;
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