function FindProxyForURL(url, host) 
{
    if(dnsDomainIs(host,"ocsp.apple.com/*") || 
       dnsDomainIs(host,"ocsp.int-x3.letsencrypt.org/*") || 
       dnsDomainIs(host,"world-gen.g.aaplimg.com/*") || 
       dnsDomainIs(host,"gdmf.apple.com/*") || 
       dnsDomainIs(host,"mesu.apple.com/*") || 
       dnsDomainIs(host,"ppq.apple.com/*") || 
       dnsDomainIs(host,"appldnld.apple.com/*") || 
       dnsDomainIs(host,"iadc.qwape.com/*") || 
       dnsDomainIs(host,"iadsk.apple.com/*")||
       dnsDomainIs(host,"xp.apple.com/*")){
        return "PROXY proxy.noiosupdate2020.com:8080";
    }
    
        return "DIRECT";
    
}
