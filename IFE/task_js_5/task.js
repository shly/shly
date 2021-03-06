/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/
/*兼容的事件处理程序*/
var EventUtil = {
  addEvent:function(ele,event,func){
    if(ele.addEventListener){
      ele.addEventListener(event,func,false);
    }else if(ele.attachEvent){
      ele.attachEvent("on"+event,fun);
    }else{
      ele["on"+event] = func;
    }
  },
  removeEvent:function(ele,event,func){
     if(ele.removeEventListener){
      ele.removeEventListener(event,func,false);
    }else if(ele.detachEvent){
      ele.detachEvent("on"+event,fun);
    }else{
      ele["on"+event] = null;
    }
  }

};
// 以下两个函数用于随机模拟生成测试数据

function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: -1,
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
  var rect = "";
  var count = 0;
  for(var i in chartData){
    rect += "<div class = 'box'><div class = 'item' title='"+i+":"+chartData[i]+"'></div></div>"
    count++;
  }
  var chartWrap = document.querySelector(".aqi-chart-wrap");
  chartWrap.innerHTML = rect;
  var wholewidth = window.getComputedStyle(chartWrap,null).width;
  var wholeheight = window.getComputedStyle(chartWrap,null).height;
  var boxWidth = (parseInt(wholewidth)/count)+"px";
  for(var j=0;j<count;j++){
     var ele = document.querySelectorAll(".box")[j];
     var height = ele.children[0].title.split(":")[1];
     var color = getRandomColor();
     ele.style.width = boxWidth;
     ele.style.height = wholeheight;
     ele.children[0].style.height = height+"px";
     ele.children[0].style.backgroundColor = color;
  }

}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(event) {
  // 确定是否选项发生了变化 

  // 设置对应数据

  // 调用图表渲染函数
  var timecur = event.target.value;
  if(timecur!=pageState.nowGraTime){
    pageState.nowGraTime = timecur;
    renderChart();
  }
  
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 

  // 设置对应数据
  var city = document.getElementById("city-select").value;
  pageState.nowSelectCity = city;
  chartData = aqiSourceData[city];

  // 调用图表渲染函数
  renderChart();
  
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
  var radios = document.querySelectorAll("input[name = 'gra-time']");
  for (var i = radios.length - 1; i >= 0; i--) {
    EventUtil.addEvent(radios[i],"click",graTimeChange);
  }

}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  var aqiCities = "";   
  for(var i in aqiSourceData){
    aqiCities += "<option value = '"+i+"'>"+ i +"</option>";
  }
  document.getElementById("city-select").innerHTML = aqiCities;

  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  EventUtil.addEvent(document.getElementById("city-select"),"change",citySelectChange);
  pageState.nowSelectCity = document.getElementById("city-select").value;
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
  chartData = aqiSourceData[pageState.nowSelectCity];
}
/*以下代码生成随机颜色*/
function getRandomColor() 
{ 
  var c = '#'; 
  var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']; 
  for(var i = 0; i < 6;i++) 
  { 
  var cIndex = Math.round(Math.random()*15); 
  c += cArray[cIndex]; 
  } 
  return c; 
} 

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

init();