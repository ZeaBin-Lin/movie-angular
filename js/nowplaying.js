'use strict';

angular.module('movieApp.nowplayingCtrl',['movieApp.service'])
// ����nowplaying��������ע��$scope,  $http����ajax����
.controller('nowplayingCtrl',['$scope','$movieServ',function($scope,$movieServ){
	$scope.movie = {};
	// $http({
	// 	// �����urlҲ��index.html��·��
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
        // ����
        $scope.$apply();
    })

}])