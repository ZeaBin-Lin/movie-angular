'use strict';

angular.module('movieApp.nowplayingCtrl',['movieApp.service'])
// ����nowplaying��������ע��$scope,  $http����ajax����
.controller('nowplayingCtrl',['$scope','$movieServ','$routeParams',function($scope,$movieServ,$routeParams){
	console.log($routeParams)
	// $scope.movie = {};
	// $http({
	// 	// �����urlҲ��index.html��·��
	// 	url:'data.json',
	// }).success(function(data){
	// 	$scope.movie = data;
	// 	console.log(data)
	// })
	$scope.isLoading = false;
    $scope.pageid = $routeParams.pageid || 1;
	var start = ($routeParams.pageid - 1) * 5;
	$movieServ.jsonp('https://api.douban.com/v2/movie/in_theaters', {
        count: 5,
        start: start
    }, function(data) {
        $scope.movie = data || {};
        $scope.prevPage = $routeParams.pageid - 1;
        $scope.nextPage = ($routeParams.pageid-0) + 1;
        $scope.pageCount = Math.ceil(data.total/5);
        if($routeParams.pageid <= $scope.prevPage){
        	$scope.prevPage = 1;
        }
        if($routeParams.pageid >= $scope.nextPage){
        	$scope.nextPage = $scope.pageCount;
        }
        $scope.total = data.total;
        $scope.isLoading = true;
        // ����
        $scope.$apply();

    })

}])