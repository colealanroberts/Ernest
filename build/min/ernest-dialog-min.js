function createDialog(e){var a=document.createElement("div");document.body.appendChild(a),a.classList.add("ernest-dialog"),a.innerHTML=e}chrome.runtime.onMessage.addListener(function(e,a,r){var t=e.data;for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];for(var o in i)if(i.hasOwnProperty(o))var d=o+" = "+i[o]}"createDialog"==e.text&&(createDialog(d),r({type:"test"}))});