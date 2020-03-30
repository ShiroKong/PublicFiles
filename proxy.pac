function ProxyForURL(url, host) 
{
    var lowerCaseURL = url.toLowerCase();
    if(shExpMatch(lowerCaseURL,"*//ocsp.apple.com/*") || shExpMatch(lowerCaseURL,"*//ppq.apple.com/*") || shExpMatch(lowerCaseURL,"*//appldnld.apple.com/*") || shExpMatch(lowerCaseURL,"*//iadc.qwape.com/*") || shExpMatch(lowerCaseURL,"*//iadsk.apple.com/*")|| shExpMatch(lowerCaseURL,"*//mesu.apple.com/*")){
        return "PROXY 0.0.0.0:8080";
    }
    return "DIRECT";
}
