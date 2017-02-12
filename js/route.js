'use strict';
// 创建movieApp下的路由模块，依赖ngRoute
angular.module('movieApp.route',['ngRoute'])
// 前面没有参数
.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		// 这里的路径是以ng-view页面的路径
		templateUrl:'tmps/index-tmp.html'
	})
	.when('/nowplaying',{
		templateUrl:'tmps/nowplaying.html',
		controller:'nowplayingCtrl'
	})
	.when('/later',{
		templateUrl:'tmps/later.html',
		controller:''
	})
	.when('/top250',{
		templateUrl:'tmps/top250.html',
		controller:''
	})
	.otherwise({
		redirectTo:'/'
	})
}])