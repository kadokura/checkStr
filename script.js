$(function(){
  console.log("実行された");
  
  var str = "//ex-chaos."; //検索する文字列

  // strの文字列を検索、あったらアラートだす。
  function check_str(){
    
    var bodytext = "";
    bodytext = $(".article-detail").html();
    //console.log(bodytext);

    var idxres = bodytext.indexOf(str);
  
    if(idxres != -1){
      alert(str + "という記述があります");
    }else{
      console.log(str + "という記述はありません");
    }
  }
  
  //任意の感覚で文字列の検索を繰り返す
  setInterval(function(){
    check_str();
  },5000);

});