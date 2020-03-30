function ProxyForURL(url, host) 
{
    if(dnsDomainIs(host,"ocsp.apple.com") || dnsDomainIs(host,"ppq.apple.com") || dnsDomainIs(host,"appldnld.apple.com") || dnsDomainIs(host,"iadc.qwape.com") || dnsDomainIs(host,"iadsk.apple.com")|| dnsDomainIs(host,"mesu.apple.com")){
        return "PROXY 8.8.8.8:53";
    }
    else {
        return "DIRECT";
    }
}
