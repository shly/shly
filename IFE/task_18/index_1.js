/*通用事件处理程序*/
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
/*添加数组用于存储队列中的数据*/
var dataList = [];
/*dataList的操作方法*/
var DataUilt = {
	leftIn:function(value){
		dataList.unshift(value);
	},
	rightIn:function(value){
		dataList.push(value);
	},
	leftOut:function(){
		return dataList.shift();
	},
	rightOut:function(){
		return dataList.pop();
	},
	removeself:function(value){
		for(var i = 0;i<dataList.length;i++){
			if(dataList[i]==value){
				dataList.splice(i,1);
			}
		}
	}
}
/*向showBox中绘制图形*/
function render(){
	var ele = "";
	for(var i = 0;i<dataList.length;i++){
		ele += "<div class='item'>"+dataList[i]+"</div>";
	}
	document.querySelector(".showBox").innerHTML = ele;
}
/*添加点击事件的方法*/
function leftIn(){
	var value = document.querySelector(".datavalue").value;
	DataUilt.leftIn(value);
	render();
}
function rightIn(){
	var value = document.querySelector(".datavalue").value;
	DataUilt.rightIn(value);
	render();
}
function leftOut(){
	if(dataList.length>0){
		var vaule = DataUilt.leftOut();
		render();
		alert(vaule);
	}else{
		alert("对不起，没有元素可以删除");
	}
	
}
function rightOut(){
	if(dataList.length>0){
		var vaule =  DataUilt.leftOut();
		render();
		alert(vaule);
	}else{
		alert("对不起，没有元素可以删除");
	}
}
function removeself(event){
	if(event.target&&event.target.className=="item"){
		value = event.target.innerHTML;
		DataUilt.removeself(value);
		render();
		alert(vaule);
	}

}

/*为所有按钮添加事件处理程序*/
EventUtil.addEvent(document.querySelector(".leftIn"),"click",leftIn);
EventUtil.addEvent(document.querySelector(".rightIn"),"click",rightIn);
EventUtil.addEvent(document.querySelector(".leftOut"),"click",leftOut);
EventUtil.addEvent(document.querySelector(".rightOut"),"click",rightOut);
EventUtil.addEvent(document.querySelector(".showBox"),"click",removeself);