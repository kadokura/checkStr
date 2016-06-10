$(function(){
  
  var str = 'src=\"/api/download/'; //検索する文字列
  console.log("「" + str + "」存在確認実行");

  // strの文字列を検索、あったらアラートだす。
  function check_str(){
    
    var bodytext = "";

    if ($("form")[0]) { 
      bodytext = $("form").html();
    }
    
    //console.log(bodytext);

    // var cnt = bodytext.indexOf(str);
    var cnt = bodytext.split(str).length - 1;
    // console.log(cnt);
  
    if(cnt !== 0){
      // alert(str + "という記述があります");
      // console.log(str + "という記述があります");
      sendmessage(cnt);
    }else{
      // console.log(str + "という記述はありません");
      sendmessage(cnt);
    }
  }
  
//background.jsにcounterの数字を送信する関数
function sendmessage(counter){
  chrome.extension.sendMessage({
      textcount: counter //textcount（好きな名前で）という項目に変数でもらったcounterを入れる
  },
      function(response){
          console.debug(response.message);
      }
  );
}

  //任意の感覚で文字列の検索を繰り返す
  setInterval(function(){
    check_str();
  },5000);

});