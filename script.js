$(function(){

  var strlist = [
                 '" /api/download/',
                 '\b'
                ];
  var cnt = 0;
  console.log("禁止文字存在確認実行");

  // strの文字列を検索、あったらアラートだす。
  function check_str(e){

    var bodytext = "";

    if ($("textarea")[1].value) {
      bodytext = $("textarea")[1].value;
    }
    var i = bodytext.indexOf(strlist[e]);
    console.log(i);
    console.log(bodytext.substring(i-10,i+10));

    //console.log(bodytext);

    // bodytext.toString();
    // console.log(bodytext.indexOf(strlist[e]));
    cnt += bodytext.split(strlist[e]).length - 1;


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
    cnt = 0;
    for(var i=0;i<strlist.length;i++)check_str(i);
    sendmessage(cnt);
  },5000);

});
