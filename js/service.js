'use strict';
// 创建movieApp下的服务模块
angular.module('movieApp.service',[])
.service('$movieServ',['$document','$window',function($document,$window){
	// console.log(this)
	this.jsonp = function(url, params, callback) {
            //1.动态创建一个script标签
            var script = $document[0].createElement('script');
            //2. 拼接url https://api.douban.com/v2/movie/in_theaters?count=1&start=0&callback=aa
            url += '?';
            for (var key in params) {
                url += key + '=' + params[key] + '&';
            }
            url += 'callback=aa';
            //3.把url设置到script的src上
            script.src = url;
            //4.把script添加到页面上
            $document[0].body.appendChild(script);
            //5.在window里面创建一个aa全局函数
            // aa({数据})
            $window.aa = function(data) { //形参
                //  6.在函数里面能拿到数据 然后传给 success的回调函数作为参数
                callback(data); //实参
                //7. 获取完成数据后删除script标签
                $document[0].body.removeChild(script);
            }
        }
}])