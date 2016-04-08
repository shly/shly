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
	},
	insertSort:function(){
		 var i=1,j=i;
		 var temp = dataList[i];
		 var timer = setInterval(function() {
            if (i >= dataList.length) {
                clearInterval(timer);
            }
            if (j>0&&dataList[j-1]>temp) {
                dataList[j] = dataList[--j];
                render();
            }else{
            	dataList[j] = temp;
            	j = ++i;
            	temp = dataList[i];
            	render();
            }
        }, 500);
		
	}
}
/*向showBox中绘制图形*/
function render(){
	var ele = "";
	var showBox = document.querySelector(".showBox");
	for(var i = 0;i<dataList.length;i++){
		ele += "<div class = 'box'><div class='item' title = '"+dataList[i]+"'></div></div>";
	}
	showBox.innerHTML = ele;
	var items = document.querySelectorAll(".item");
	for(var j = 0;j<dataList.length;j++){
		items[j].style.height = items[j].title+"px";
	}
}
/*添加点击事件的方法*/
function leftIn(){
	var value = document.querySelector(".datavalue").value;
	var reg = /^\d+$/;
	if(dataList.length<60){
		if(reg.test(value)&&10<=value&&value<=100){
			DataUilt.leftIn(value);
			render();
		}else{
			alert("请输入10到100这之间的数字");
		}
	}else{
		alert("对不起，队列长度不能超过60");
	}
	
}
function rightIn(){
	var value = document.querySelector(".datavalue").value;
	var reg = /^\d+$/;
	if(dataList.length<60){
		if(reg.test(value)&&10<=value&&value<=100){
			DataUilt.rightIn(value);
			render();
		}else{
			alert("请输入10到100这之间的数字");
		}
	}else{
		alert("对不起，队列长度不能超过60");
	}
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
function insertSort(){
	if(dataList.length>1){
	  DataUilt.insertSort();
	  render();
	}
}
function init(){
  dataList = [90,80,70,60,50,40,30];
  render();
}

/*为所有按钮添加事件处理程序*/
EventUtil.addEvent(document.querySelector(".init"),"click",init);
EventUtil.addEvent(document.querySelector(".leftIn"),"click",leftIn);
EventUtil.addEvent(document.querySelector(".rightIn"),"click",rightIn);
EventUtil.addEvent(document.querySelector(".leftOut"),"click",leftOut);
EventUtil.addEvent(document.querySelector(".rightOut"),"click",rightOut);
EventUtil.addEvent(document.querySelector(".showBox"),"click",removeself);
EventUtil.addEvent(document.querySelector(".sort"),"click",insertSort);