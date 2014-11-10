window.onload = function(){
	var button = document.getElementById('button');
	button.onclick = function(){
		var request = createCORSRequest('get', 'http://localhost:9494/today_weather.json');
		if(request){
			request.onload = function(){
			//do something with request.responseText
			var result = JSON.parse(request.responseText);
			var div = document.getElementById('message');
			div.innerHTML = "Weather: " + result.sun + " , temperature " + result.temp;
		};
		request.send();
		}
	};
};


function createCORSRequest(method, url){
	var xhr = new XMLHttpRequest();
	if('withCredentials' in xhr){
		xhr.open(method, url, true);
	}else if(typeof XDomainRequest != 'undefined'){
		xhr = new XDomainRequest();
        xhr.open(method, url);
	}else{
		xhr = null;
	}
	return xhr;
}




//from https://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/
// var url = "http://bar.other/publicNotaries/"
// if(XMLHttpRequest)
// {
//   var request = new XMLHttpRequest();
//   if("withCredentials" in request)
//   {
//    // Firefox 3.5 and Safari 4
//    request.open('GET', url, true);
//    request.onreadystatechange = handler;
//    request.send();
//   }
//   else if (XDomainRequest)
//   {
//    // IE8
//    var xdr = new XDomainRequest();
//    xdr.open("get", url);
//    xdr.send();
 
//    // handle XDR responses -- not shown here :-)
//   }
 
//  // This version of XHR does not support CORS  
//  // Handle accordingly
// }