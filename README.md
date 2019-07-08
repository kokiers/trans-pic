# trans-pic

#### 左右轮播

监听 touch 事件，捕获手指滑动方向，进行轮播。

每个元素占屏幕的1/2宽度。

#### aTotal 

aTotal 全部轮播的元素的总个数+2, 

其中2个元素是辅助hack。


2.0 版本

+ 增加轮播id
+ 增加自动轮播，
+ 轮播结束回调

```
// SwipeDou(id,max,auto,autoTime,clas,width,callback)
 var arr = new SwipeDou('line2',10,true);
        arr.init();
```



