function FindProxyForURL(url, host) {
	if (host == 'ocsp.int-x3.letsencrypt.org' || host == 'ocsp.apple.com' || host == 'world-gen.g.aaplimg.com' || host == 'mesu.apple.com' || host == 'gdmf.apple.com'){return 'PROXY 127.0.0.1��80;'}
    if (host == 'music.163.com' || host == 'interface.music.163.com' || host == 'interface3.music.163.com' || host == 'apm.music.163.com' || host == 'apm3.music.163.com' || host == '59.111.181.38' || host == '59.111.181.60' || host == '223.252.199.66' || host == '223.252.199.67' || host == '59.111.160.195' || host == '59.111.160.197' || host == '193.112.159.225' || host == '39.105.63.80' || host == '47.100.127.239' || host == '118.24.63.156' || host == '59.111.181.35'|| host == '115.236.118.33'|| host == '115.236.121.1'|| host == '112.13.122.1'|| host == '112.13.119.17'|| host == '103.126.92.132') {
        return 'PROXY 106.52.127.72:19951;'
    }
    return 'DIRECT;'
}