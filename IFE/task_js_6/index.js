var EventUtil = {
  addEvent:function(ele,event,func){
    if(ele.addEventListener){
      ele.addEventListener(event,func,false);
    }else if(ele.attachEvent){
      ele.attachEvent("on"+event,fun);
    }else{
      ele["on"+event] = func;
    }
  }
};

function leftIn(){
	var value = document.querySelector(".datavalue").value;
	if(value!=""){
		var newNode = document.createElement("div");
	    newNode.className = "item";
		newNode.innerHTML = value;
		document.querySelector(".showBox").insertBefore(newNode,document.querySelector(".showBox").firstChild);
	}
	
}
function rightIn(){
	var value = document.querySelector(".datavalue").value;
	if(value!=""){
		var newNode = document.createElement("div");
		newNode.className = "item";	
		newNode.innerHTML = value;
		document.querySelector(".showBox").appendChild(newNode);
	}
}
function leftOut(){
	var showBox = document.querySelector(".showBox");
	if(showBox.firstChild==null){
        alert("对不起，当前队列为空");
	}else{
	    var ele = showBox.removeChild(showBox.firstChild);
	    alert(ele.innerHTML);
	}
}
function rightOut(){
	var showBox = document.querySelector(".showBox");
	if(showBox.lastChild==null){
        alert("对不起，当前队列为空");
	}else{
		var ele = showBox.removeChild(showBox.lastChild);
		alert(ele.innerHTML);
	}
}
function removeEle(event){
	if(event.target&&event.target.className=="item"){
		var ele = document.querySelector(".showBox").removeChild(event.target);
		alert(ele.innerHTML);
	}

}
EventUtil.addEvent(document.querySelector(".leftIn"),"click",leftIn);
EventUtil.addEvent(document.querySelector(".rightIn"),"click",rightIn);
EventUtil.addEvent(document.querySelector(".leftOut"),"click",leftOut);
EventUtil.addEvent(document.querySelector(".rightOut"),"click",rightOut);
EventUtil.addEvent(document.querySelector(".showBox"),"click",removeEle);