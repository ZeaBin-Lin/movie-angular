'use strict';

angular.module('movieApp.top250Ctrl',['movieApp.service'])
// 创建top250控制器，注入$scope,  $http发送ajax请求
.controller('top250Ctrl',['$scope','$movieServ','$routeParams',function($scope,$movieServ,$routeParams){
	console.log($routeParams)
	$scope.movie = {};
	// $http({
	// 	// 这里的url也是index.html的路径
	// 	url:'data.json',
	// }).success(function(data){
	// 	$scope.movie = data;
	// 	console.log(data)
	// })
	var start = ($routeParams.pageid - 1) * 5;
	$movieServ.jsonp('https://api.douban.com//v2/movie/top250', {
        count: 5,
        start: start
    }, function(data) {
       $scope.movie = data || {};
        $scope.prevPage = $routeParams.pageid - 1;
        $scope.nextPage = ($routeParams.pageid-0) + 1;
        $scope.pageCount = Math.ceil(data.total/5);
        $scope.pageid = $routeParams.pageid || 1;
        console.log($scope.pageid)
        if($routeParams.pageid <= $scope.prevPage){
        	$scope.prevPage = 1;
        }
        if($routeParams.pageid >= $scope.nextPage){
        	$scope.nextPage = $scope.pageCount;
        }
        $scope.total = data.total;

        // 脏检查
        $scope.$apply();

    })

}])