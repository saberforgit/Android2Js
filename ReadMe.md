1.使用方法，包含两个方法
@方法一：registPush 注册推送服务
调用方式：
 function registPush(){
        Push.registPush(function(res){JSON.stringify(res);},function(erro){alert(erro)});
        }

@方法二：logoutPush 取消推送服务
使用方法：
function logoutPush(){
Push.logoutPush(function(res){JSON.stringify(res);},function(erro){alert(erro)});
  }

返回的数据取出实例:{"status":"00","msg":"registComplete"},{"status":"00","msg":"logoutComplete"}

重要：需要在js中添加监听事件，在监听的回掉中接受消息
例：     
Push.on("receiveMsg", function (notification) {
                console.info(JSON.stringify(notification));
        });
注：添加完插件后需要在androidmainfest.xml中的application标签下添加
     android:name="com.zsmarter.push.AppApplication"
