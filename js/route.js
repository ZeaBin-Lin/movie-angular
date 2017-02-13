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
	.when('/nowplaying/:pageid?',{
		templateUrl:'tmps/nowplaying.html',
		controller:'nowplayingCtrl'
	})
	.when('/later/:pageid?',{
		templateUrl:'tmps/later.html',
		controller:'laterCtrl'
	})
	.when('/top250/:pageid?',{
		templateUrl:'tmps/top250.html',
		controller:'top250Ctrl'
	})
	.when('/details/:id?', {
		templateUrl:'tmps/details.html',
		controller: 'detailsCtrl' 
	})
	.when('/search/:searchName?',{
		templateUrl:'tmps/search.html',
		controller:'searchCtrl'
	})
}])