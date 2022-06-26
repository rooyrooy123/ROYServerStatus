


var ip = '123.198.130.10'




let wDisplay = document.getElementById("idDisplay");
let sCharset = "UTF-8";
let sFileName = "replace.txt"

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
    var loopnumsplit = res.split(':)')
    var loopnum = loopnumsplit.length - 1;
    //OPENのとこを色変更
    //行とりだす ループ0回目からでn
    for (var count = 0; count < loopnum; count++) {
      var numsplit = res.split(':)')
      var num = numsplit[count];
      
      
      //openorclose 1 4 7  n=0からの等差数列3n + 1
      var opensplit = res.split(':')
      var open = opensplit[3*count + 1];

      //port 1 2 3 4 5 ループ0回目からでn+1
      portsplit = res.split('Port番号「');
      var port = portsplit[count + 1]//変更するとここ2つはめ変更しないで
      port = port.split('番」')
      port = port[0]//変更しない


      //name 0 2 4で鯖名 ループ0回目からで 2n
      var namesplit = res.split(')')
      var name = namesplit[2*count]

      var namesplit = res.split(')')

      var ul = document.getElementById('serverlist');
      // li要素を作成
      var li = document.createElement('li');

      // テキスト情報を作成
      var info = document.createTextNode(num);
      
      // ul要素に追加
      li.appendChild(info);


      if ((~name.indexOf('人狼RPG'))){
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
      ul.appendChild(li);  

      

      if (open == 'Closed'){//サーバークローズの場合
        li.classList.add('serverclose');
        li.classList.remove('serveropen');
        var close = document.createTextNode('  ✘');
        li.appendChild(close)
        li.onclick=(copy2)
      }else{//サーバー開放中の場合
        li.classList.remove('serverclose');
        li.classList.add('serveropen');
        var opencircle = document.createTextNode('  〇');
        li.appendChild(opencircle)
        li.onclick=(copy2)
        //以下開放中のサーバーリスト処理
        var numsplit = res.split(':)')
        var num = numsplit[count];
        
        var ul = document.getElementById('openserverlist');
        // li要素を作成
        var li = document.createElement('li');

        // テキスト情報を作成
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


      


       }
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

