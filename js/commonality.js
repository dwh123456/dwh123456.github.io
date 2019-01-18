// 公共js


window.onload = (function() {
    
    const icon = document.getElementById('icon');
    const check = document.getElementById('check');
    
    console.dir(check)
    
    
    icon.onclick = function () {

        if(check.checked) {
            icon.className = 'iconfont icon-option';
            
        }else {
            icon.className = 'iconfont icon-shanchuxuanxiang';
        }
          
    }
    
    
})()