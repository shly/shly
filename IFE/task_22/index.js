var rootNode = document.querySelector(".container");
var traversal = {
	preorder:function(_root){
		if (_root!=null) {
			_root.style.backgroundColor = '#00F';
			_root.style.backgroundColor = '#FFF';
			arguments.callee(_root.children[0]);
		    arguments.callee(_root.children[1]);
		}
	},
	inorder:function(_root){
		if (_root!=null) {
			arguments.callee(_root.children[0]);
			_root.style.backgroundColor = '#00F';
			_root.style.backgroundColor = '#FFF';
		    arguments.callee(_root.children[1]);
		}
	},
	postorder:function(_root){
		if (_root!=null) {
			arguments.callee(_root.children[0]);
		    arguments.callee(_root.children[1]);
		    _root.style.backgroundColor = '#00F';
			_root.style.backgroundColor = '#FFF';
		}
	}
}
traversal.preorder(rootNode);