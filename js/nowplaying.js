'use strict';

angular.module('movieApp.nowplayingCtrl',['movieApp.service'])
// 创建nowplaying控制器，注入$scope,  $http发送ajax请求
.controller('nowplayingCtrl',['$scope','$movieServ',function($scope,$movieServ){
	$scope.movie = {};
	// $http({
	// 	// 这里的url也是index.html的路径
	// 	url:'data.json',
	// }).success(function(data){
	// 	$scope.movie = data;
	// 	console.log(data)
	// })
	$movieServ.jsonp('https://api.douban.com/v2/movie/in_theaters', {
        count: 5,
        start: 0
    }, function(data) {
        $scope.movie = data;
        // 脏检查
        $scope.$apply();
    })

}])