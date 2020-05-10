var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "hm.js-b4ecd77a89fe462248468d8286f067a8"/*tpa=https://hm.baidu.com/hm.js?b4ecd77a89fe462248468d8286f067a8*/;
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

//加入百度推送
(function () {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'push.js'/*tpa=https://zz.bdstatic.com/linksubmit/push.js*/;
    }
    else {
        bp.src = 'push-1.js'/*tpa=http://push.zhanzhang.baidu.com/push.js*/;
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();