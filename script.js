
const ip = '123.198.130.10'
const ip2 = '123.198.130.10:'

const timer = 20000    // ミリ秒で間隔の時間を指定
window.addEventListener('load',function(){
  setInterval('load()',timer);
  
});

const port = [];
const server = [];
const version = [];
var count;
window.onload = function() {
  load();
}
count++;
function load(){

  var reloadbut = document.getElementById('reload');
  reloadbut.style.display="none"

  //リセット処理
  const port = [];
  const server = [];
  const version = [];
  const removeul = document.getElementById ( "serverlist" ) ;
  
  //[li]の数を取得する
  const len = removeul.children.length ;
  
  //[li]の数だけ繰り返す
  for ( var r = 0 ; r < len ; r ++ ) {
  
    //[li]を削除する
    removeul.removeChild ( removeul.children [ 0 ] ) ;
  }
  const removeul2 = document.getElementById ( "openserverlist" ) ;
  
  //[li]の数を取得する
  const len2 = removeul2.children.length ;
  
  //[li]の数だけ繰り返す
  for ( var r2 = 0 ; r2 < len2 ; r2 ++ ) {
  
    //[li]を削除する
    removeul2.removeChild ( removeul2.children [ 0 ] ) ;
  }


console.log('LOADINGNOW...')
for (let i = 0; i < 10; ++i) {
  if (i == 0){//サーバーClosed時の表示バージョン
    port.push ("10000"); 
    server.push("人狼RPG");
    version.push(" Version:1.12.2 ")
  }else if(i == 1){
    port.push("20000");
    server.push("青鬼");
    version.push(" Version:1.16.3 ")
  }else if(i == 2){
    port.push("20000");
    server.push("Event");
    version.push(" Version:未 ")
  }else if(i == 3){
    port.push("30000");
    server.push("サバイバル");
    version.push(" Version:1.16.1 ")
  }else if(i == 4){
    port.push("40000");
    server.push("クリエイティブ");
    version.push(" Version:1.16.1 ")
  }else if(i == 5){
    port.push("50000");
    server.push("Battle Royale(銃撃戦)");
    version.push(" Version:1.12.2 ")
  }else if(i == 6){
    port.push("60000");
    server.push("覚醒人狼");
    version.push(" Version:1.12.2 ")
  }

  console.log(port)

}

for (let i = 0; i < port.length; ++i) {
var request = new XMLHttpRequest();
request.open('GET', 'https://mcapi.us/server/status?ip=' + ip + '&port=' + port[i], true);
request.responseType = 'json';
request.onload = function () {
  console.log( 'https://mcapi.us/server/status?ip=' + ip + '&port=' + port[i])
  var api = this.response;
  data = api.players.now;

  var data2 = 'Online:' + data + '人';

  console.log(server[i] +port[i] + 'オンライン人数⇒' +data + '人');
  
  var ul = document.getElementById('serverlist');
  // li要素を作成
  var li = document.createElement('li');

  // テキスト情報を作成
  var info = document.createTextNode(server[i]);
  var info1 = document.createTextNode('⇒');
  var info2 = document.createTextNode(ip2);
  var info3 = document.createTextNode(port[i]);
  var info3_1 = document.createTextNode(version[i]);
  
  
  
  // ul要素に追加
  li.appendChild(info);
  li.appendChild(info1);
  li.appendChild(info2);
  li.appendChild(info3);
  li.appendChild(info3_1);
  ul.appendChild(li);
  li.onclick=(copy)
  if (i>=port.length - 1){
  reloadbut.style.display="inline-block"
}
  if ((api.online==false)){//クローズの場合
    li.classList.add('serverclose');
    li.classList.remove('serveropen');
  } 
  if ((api.online==true)){
    var nowversion = api.server.name;//実際に開いているバージョン表示
    nowversion = ' Version:' + nowversion + ' ';
    var info3_2 = document.createTextNode(data2);
    li.appendChild(info3_2);
    ul.appendChild(li); 

    li.classList.remove('serverclose');
    li.classList.add('serveropen');
    var ul = document.getElementById('openserverlist');
    // li要素を作成
    var li = document.createElement('li');
    var info = document.createTextNode(server[i]);
    var info1 = document.createTextNode('⇒');
    var info2 = document.createTextNode(ip2);
    var info3 = document.createTextNode(port[i]);
    var info3_1 = document.createTextNode(nowversion);
    var info4 = document.createTextNode(data2);
    
    
    
    // ul要素に追加
    li.appendChild(info);
    li.appendChild(info1);
    li.appendChild(info2);
    li.appendChild(info3);
    li.appendChild(info3_1);
    li.appendChild(info4);
    ul.appendChild(li); 
    li.onclick=(copy)
  }
  

};

request.send();
}
}


function copy(){
  var str = this.textContent
  str = str.split('⇒');
  str = str[1]
  str = str.split(' Version');
  str = str[0]
  var listener = function(e){
  
      e.clipboardData.setData("text/plain" , str);    
      e.preventDefault();
      document.removeEventListener("copy", listener);
  } 
  document.addEventListener("copy" , listener);
  document.execCommand("copy");
  alert('IPをコピーした' + this.textContent)
}
