function FindProxyForURL(url, host) {
	if (host == 'ocsp.int-x3.letsencrypt.org' || host == 'ocsp.apple.com' || host == 'world-gen.g.aaplimg.com' || host == 'mesu.apple.com' || host == 'gdmf.apple.com')
	{
	return 'PROXY 127.0.0.1:80;'
	}
    return 'DIRECT;'
}
