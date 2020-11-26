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
    var City=document.getElementById("aqi-city-input").value.trim();
    var strAqi=document.getElementById("aqi-value-input").value.trim();
    aqiData[City] = strAqi;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() 
{
    var table = document.getElementById("aqi-table");
    table.innerHTML = "";
    if (table.children.length == 0)   
        {
            table.innerHTML = "<tr> <td>城市</td> <td>空气质量</td> <td>操作</td> </tr>"; //td 列  tr行
        }
    for (var City in aqiData)    
    {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = City;    
        tr.appendChild(td1); 
        var td2 = document.createElement("td");  
        td2.innerHTML = aqiData[City];
        tr.appendChild(td2); 
        var td3 = document.createElement("td");
        td3.innerHTML = "<button class='del-btn'>删除</button>";  
        tr.appendChild(td3);    
        table.appendChild(tr); 
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
function delBtnHandle(aim) {
    var sth=aim.parentElement.parentElement.children[0];
    delete aqiData[sth.innerHTML];
    renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    var addbtn=document.getElementById("add-btn");
    addbtn.addEventListener("click",addBtnHandle);
    var table = document.getElementById("aqi-table");
    table.addEventListener("click", function(k)       //点击时 发生的事件
    {
        if (k.nodeName == "button") 
        {
            delBtnHandle(k);   
        }
    })

}

init();