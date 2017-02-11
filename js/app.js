// 创建主模块，依赖route,service模块和nowplaying,later,top250控制器模块
angular.module('movieApp',['movieApp.route','movieApp.service','movieApp.nowplayingCtrl',
	'movieApp.laterCtrl','movieApp.top250Ctrl'])