# PublicFiles
# The file 'proxy.pac' is for test purpose. Please do not use it.
# The file 'proxy2.pac' is stable. It is to block the iOS update. 

中文说明：
文件 'proxy2.pac' 是用来阻止 iOS 升级的。在 iOS 13 之后，原来的描述文件已经失效了，而我又不想用VPN的方式来屏蔽苹果的服务器（因为感觉这样很耗电，而且我自己也有梯子需要走VPN通道）

使用方法是：打开 iOS 设置 -- WIFI -- 点击你WiFi名称右侧的按钮进入详情，翻到最下面 -- HTTP代理 -- 自动 -- URL处填写https://raw.githubusercontent.com/ShiroKong/PublicFiles/master/proxy.pac

然后把wifi关掉再重连接一遍即可
