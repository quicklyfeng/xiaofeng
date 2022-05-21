   // 所用执行正在执行的定时器都在timer这个变量中保存

                // 尝试创建一个可以执行动画的函数
                // 参数:obj:执行动画的对象 speed:移动的速度(+向右 -向左).
                // target：执行动画的目标位置，attr，修改动画的样式
                // callback，回调函数，再动画执行完毕时调用
                // var timer,不要使用全局变量
                // 再传递一个参数作为更改样式
                function move(obj,attr,target,speed,callback) {

                    clearInterval(obj.timer);
                    // 获取元素当前位置
                    var current = parseInt(getStyle(obj, attr))
                    // 将元素当前位置于目标位置相比较，当当前位置小于目标位置时，speed取正号。当前位置大于目标位置取负号
                    if (current > target) {
                        speed = -speed;
                    }
                    // 向执行动画的对象中添加一个timer属性，用来保存他自己的定时器标识
                    obj.timer = setInterval(function () {
                        // 获取box1的原来的值
                        var oldValue = parseInt(getStyle(obj, attr));
                        // 在旧址的基础上增加
                        var newValue = oldValue + speed;
                        // 判断newvalue是否大于0
                        // 向左移动,需要判断newValue是否小于target
                        // 向右移动,需要判断newValue是否大于target

                        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
                            newValue = target;
                        }
                        // 将新值赋值给元素的样式
                        obj.style[attr] = newValue + "px";
                        if (newValue == target) {
                            //   当达到目标值时停止定时器
                            clearInterval(obj.timer);
                            // 动画执行完毕调用回调函数  
                            callback && callback();
                        }
                          
                           
                    }, 30)
                }
                function getStyle(obj, name) {
                    if (window.getComputedStyle) {
                        return getComputedStyle(obj, null)[name];
                    } else {
                        return obj.currentStyle[name];
                    }
                }

        