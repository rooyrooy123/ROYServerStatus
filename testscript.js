function xhrget(i_url)
{  
    var xhr = window.XDomainRequest ? new XDomainRequest() : new XMLHttpRequest();  
    try { 
        xhr.open("GET",i_url,false);
        xhr.send(null);  
    } catch (e) {
	    return null;
    }
    return xhr.responseText;
}

function update()
{
	number_of_update++;
	var s=xhrget("http://nyatla.jp/ws/mcsapi/t.php?cmd=si&s=****&p=25565&f=json");
	var v;
	if(s==null){
	}else{
		v=eval("("+s+")");
	}
	alert(v);
}

function webtest(){
    
const url = 'http://nyatla.jp/ws/mcsapi/mcsapi.php?cmd=si&s=123.198.130.10&p=50000';
fetch(url).then(function(response) {
  return response.text();
}).then(function(text) {
  console.log(text);
  if(~text.indexOf('ONLINE')){
    alert(text)

  }
});
}







var ip = '123.198.130.10'





let wDisplay = document.getElementById("idDisplay");
let sCharset = "UTF-8";
let sFileName = "replacetest.txt"

const timer = 5000    // ミリ秒で間隔の時間を指定
window.addEventListener('load',function(){
  setInterval('location.reload()',timer);
  
});
var openlist = []

let AJAX = new XMLHttpRequest();
AJAX.overrideMimeType('text/plain; charset=' + sCharset);
AJAX.open("GET", sFileName, true);
AJAX.onload = function () {
console.log("AJAX.onload");
if (this.readyState === 4 && this.status === 200) {
    console.log("this.readyState: " + this.readyState);
    console.log("this.status: " + this.status);
     res = AJAX.responseText;
    
    //wDisplay.innerText = res;//案これ表示しないで行のやつをループで呼び出す
    load();

function load(){

    var loopnumsplit = res.split('/')
    var loopnum = loopnumsplit.length;
    //OPENのとこを色変更
    //行とりだす ループ0回目からでn
    for (var count = 0; count < loopnum; count++) {
      console.log('loop:' +count)
      var split = res.split('/')
      var name = split[2*count];
      console.log(name)
      var port = split[2*count+1];
      console.log(port)


      var ul = document.getElementById('serverlist');
      // li要素を作成
      var li = document.createElement('li');


      // テキスト情報を作成
      var info = document.createTextNode(name);
      
      // ul要素に追加
      li.appendChild(info);


      if (~name.indexOf('人狼RPG')){
        var version = document.createTextNode('version:1.12.2');
        li.appendChild(version);
      }else if(~name.indexOf('青鬼')){
        var version = document.createTextNode('version:1.16.3');
        li.appendChild(version);
      }else if(~name.indexOf('Event')){
        var version = document.createTextNode('version:未');
        li.appendChild(version);
      }else if(~name.indexOf('サバイバル')){
        var version = document.createTextNode('version:1.16.1');
        li.appendChild(version);
      }else if(~name.indexOf('クリエイティブ')){
        var version = document.createTextNode('version:1.16.1');
        li.appendChild(version);
      }else if(~name.indexOf('Battle Royale銃撃戦')){
        var version = document.createTextNode('version:1.12.2');
        li.appendChild(version);
        
      }else if(~name.indexOf('覚醒人狼')){
        var version = document.createTextNode('version:1.12.2');
        li.appendChild(version);
      }
      var port2 = document.createTextNode(port);
      li.appendChild(port2);
      ul.appendChild(li);  

      const url = 'http://nyatla.jp/ws/mcsapi/mcsapi.php?cmd=si&s=123.198.130.10&p=' + port;
      fetch(url).then(function(response) {
        
        return response.text();
      }).then(function(text) {
        var li = document.createElement('li');
        if(~text.indexOf('ONLINE')){

          var check ='online'
      
        }else{//サーバー閉鎖中の場合
          var check ='offline'

          var li = document.createElement('li');
          li.classList.add('serverclose');
          li.classList.remove('serveropen');
          var close = document.createTextNode('  ✘');
          li.appendChild(close)
          li.onclick=(copy2)

        }
      if (check == 'online'){
li.classList.remove('serverclose');
          li.classList.add('serveropen');
          var opencircle = document.createTextNode('  〇');
          li.appendChild(opencircle)
          li.onclick=(copy2)
          //以下開放中のサーバーリスト処理


          
          var ul = document.getElementById('openserverlist');
          // li要素を作成
          var li = document.createElement('li');

          // テキスト情報を作成
          
          var split = res.split('/')
          var name = split[2*count];
          var port = split[2*count+1];
          
          var nameinfo = document.createTextNode(name);
          var portinfo = document.createTextNode(':'+ port);
          var info1 = document.createTextNode(':IP⇒');
          var infoip = document.createTextNode(ip);
          var namesplit = res.split(')')
          var name = namesplit[2*count]

          // ul要素に追加
          var kuuhaku = document.createTextNode('   ');
          li.appendChild(nameinfo);
          li.appendChild(info1);
          li.appendChild(infoip);
          li.appendChild(portinfo);
          ul.appendChild(li);
          li.appendChild(kuuhaku);
          li.appendChild(version);
          li.onclick=(copy)
      }else{

      }

        

      });
       
    }
  }

}};
AJAX.send(null);
//開放中のサーバーのくりっぷぼーど
function copy(){
  var str = this.textContent
  str = str.split('⇒');
  str = str[1]
  str = str.split(' ');
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


function copy2(){
  var str = this.textContent
  str = str.split('番号「');
  str = str[1];
  str = str.split('番」');
  str = str[0];
  str = ip + ':' + str;
  var listener = function(e){
  
      e.clipboardData.setData("text/plain" , str);    
      e.preventDefault();
      document.removeEventListener("copy", listener);
  } 
  document.addEventListener("copy" , listener);
  document.execCommand("copy");
  alert('IPをコピーした' + this.textContent)
}

