//


window.onload = (function() {
            var imgUrl = 'img/deng.png';  // 分享后展示的一张图片                 
            var lineLink = 'http://www.baidu.com'; // 点击分享后跳转的页面地址
    
            var descContent = "这里相当于简介";  // 分享后的描述信息
    
            var shareTitle = '这是要分享的标题';  // 分享后的标题
    
            var appid = '';  // 应用id,如果有可以填，没有就留空
    
            function shareFriend() {
    
                WeixinJSBridge.invoke('sendAppMessage',{
    
                    "appid": appid,
    
                    "img_url": imgUrl,
    
                    "img_width": "200",
    
                    "img_height": "200",
    
                    "link": lineLink,
    
                    "desc": descContent,
    
                    "title": shareTitle
    
                }, function(res) {
    
                    //_report('send_msg', res.err_msg);  // 这是回调函数，必须注释掉
    
                })
    
            }
    
            function shareTimeline() {
    
                WeixinJSBridge.invoke('shareTimeline',{
    
                    "img_url": imgUrl,
    
                    "img_width": "200",
    
                    "img_height": "200",
    
                    "link": lineLink,
    
                    "desc": descContent,
    
                    "title": shareTitle
    
                }, function(res) {
    
                       //_report('timeline', res.err_msg); // 这是回调函数，必须注释掉
    
                });
    
            }
    
            function shareWeibo() {
    
                WeixinJSBridge.invoke('shareWeibo',{
    
                    "content": descContent,
    
                    "url": lineLink,
    
                }, function(res) {
    
                    //_report('weibo', res.err_msg);
    
                });
    
            }
    
            // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
    
            document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    
                // 发送给好友
    
                WeixinJSBridge.on('menu:share:appmessage', function(argv){
    
                    shareFriend();
    
                });
    
               // 分享到朋友圈
    
                WeixinJSBridge.on('menu:share:timeline', function(argv){
    
                    shareTimeline();
    
                });
    
                // 分享到微博
    
                WeixinJSBridge.on('menu:share:weibo', function(argv){
    
                    shareWeibo();
    
                });
    
            }, false);
            
            console.log("测试");





            // 返回顶部
            var top = document.getElementById('top');
            var scrollH
            
            window.onscroll = function() {
                scrollH = document.documentElement.scrollTop;
                setTimeout(function() {
                    console.log(scrollH)
                     top.onclick =function() {
                        document.documentElement.scrollTop = 0;
                        console.log(scrollH)
                    }
                },500);
                
            }
            
})()
