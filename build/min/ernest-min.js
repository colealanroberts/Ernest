!function(){"use strict";function e(e,t){console.log(t),chrome.tabs.query({active:!0,currentWindow:!0},function(o){chrome.tabs.sendMessage(o[0].id,{text:"createDialog",data:t,wordChosen:e})})}function t(t,n){var s=t.selectionText.toLowerCase(),r,a=new XMLHttpRequest;a.open("GET","http://words.bighugelabs.com/api/2/"+o+"/"+s+"/json",!0),a.onload=function(){if(a.status>=200&&a.status<400){var t=JSON.parse(a.responseText);e(s,t)}else console.log("We returned an error")},a.onerror=function(){},a.send()}var o="4f369c814c0d91e72780ce036d7ab0ba";chrome.runtime.onMessage.addListener(function(e,o,n){"createDialog"==e.text&&createDialog(e.wordChosen,e.data),"searchWord"==e.text&&t()}),chrome.contextMenus.create({title:"Earnest lookup '%s'",contexts:["selection"],onclick:t})}();