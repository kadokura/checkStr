$(function(){
//var counter = 0;
//chrome.browserAction.setBadgeText({ text:String(counter) });
//chrome.browserAction.setBadgeBackgroundColor({color:'#666'});

//Messageでscript.jsから送られた情報をもらう
chrome.extension.onMessage.addListener(
    // function(request, sender, sendResponse){
    function(request, sender, sendResponse){
        //console.info(request.textcount); //consoleに表示したいときはコメントをはずす
         
        //textcountがゼロの時はバッジテキストの背景色を目立たない色にする
        if( request.textcount == '0' ){
          chrome.browserAction.setBadgeBackgroundColor({color:[36, 161, 211, 230]});
        } else {
          //textcountがゼロ以外の時はバッジテキストの背景色を赤にする
          chrome.browserAction.setBadgeBackgroundColor({color:[250, 0, 0, 250]});
        }
 
        //文字数を受け取ってバッジテキストに表示する
        chrome.browserAction.setBadgeText({"text":String(request.textcount)});
  
        sendResponse({message: "path check done"});
    }
);


});