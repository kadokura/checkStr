$(function(){
  
  var str = "//ex-chaos.appspot.com/api/download"; //検索する文字列
  console.log(str + "存在確認実行");

  // strの文字列を検索、あったらアラートだす。
  function check_str(){
    
    var bodytext = "";

    if ($(".main-content")[0]) { //記事
      bodytext = $(".main-content").html();
    } else { //CMS記事編集
      bodytext = $("form").html();
    }

    var idxres = bodytext.indexOf(str);
  
    if(idxres != -1){
      alert(str + "という記述があります");
      console.log(str + "という記述があります");
    }else{
      console.log(str + "という記述はありません");
    }
  }
  
  //任意の感覚で文字列の検索を繰り返す
  setInterval(function(){
    check_str();
  },5000);

});