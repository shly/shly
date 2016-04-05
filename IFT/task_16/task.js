/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var aqiCity = document.getElementById('aqi-city-input').value.trim();
	var aqiValue = document.getElementById('aqi-value-input').value.trim();
	var testCity = /^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z]+$/;
	var testValue = /^\d+$/;
	if(!testCity.test(aqiCity)){
		alert("对不起，城市名必须为中英文字符");
	}else if(!testValue.test(aqiValue)){
		alert("对不起，空气质量指数必须为整数");
	}else if(aqiData[aqiCity]){
		alert("对不起，该城市已存在");
	}else{
		aqiData[aqiCity] = aqiValue;
	}
	
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	if(Object.getOwnPropertyNames(aqiData).length==0){
		document.getElementById("aqi-table").innerHTML = "<tr><td>当前无城市</td></tr>";
	}else{
		var tableContent = " <tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
		for (var i in aqiData) {
			tableContent += "<tr><td>"+i+"</td><td>"+aqiData[i]+"</td><td><button>删除</button></td></tr>"
		}
	     document.getElementById("aqi-table").innerHTML = tableContent;
	}
	

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(event) {

  // do sth.
  var aqiCity;
  if(event.target&&event.target.nodeName.toLowerCase()=="button"){
	aqiCity = event.target.parentNode.parentNode.firstChild.innerText;
	delete aqiData[aqiCity];
 }
  renderAqiList();
  
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  document.getElementById("add-btn").onclick = addBtnHandle;

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  document.getElementById("aqi-table").onclick = delBtnHandle;

}

init();