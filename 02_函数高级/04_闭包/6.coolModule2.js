/**
 * 自定义模块2
 */
(function (window) {
    //私有的数据
    var msg = "hello";
    var names = ["I", "Love", "you"];
    //操作数据的函数
    function a() {
        console.log(msg.toUpperCase());
    }
    function b() {
        console.log(names.join(" "));
    }

    window.coolModule2 = {
        doSomething: a,
        doOtherthing: b,
    };
})(window);
