//调用java api的url

var serverUrl = process.env.SERVER;

//var requestHeader = "?phone=13920170000" ;
var requestHeader="";
if(window.SERVICESURL!=''){
  serverUrl = window.SERVICESURL
}
//友报账
// serverUrl='http://172.20.13.229:28080/'
var Config = {
  

};

export default Config;
