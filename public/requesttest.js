// function createCORSRequest(method, url){
// 	var xhr = new XMLHttpRequest();
// 	if('withCredentials' in xhr){
// 		xhr.open(method, url, true);
// 	}else if(typeof XDomainRequest != 'undefined'){
// 		xhr = new XDomainRequest();
//         xhr.open(method, url);
// 	}else{
// 		xhr = null;
// 	}

// 	return xhr;
// }

// var request = createCORSRequest('get', 'http://example.com')
// if(request){
// 	request.onload = function(){
// 		//do something with request.responseText
// 		alert(request.responseText);
// 	};
// 	request.send();
// }


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