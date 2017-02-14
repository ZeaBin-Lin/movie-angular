angular.module('movieApp.indexCtrl',[])
.controller('indexCtrl',['$scope','$location',function($scope,$location){
	$scope.searchName = '';
	$scope.search = function(){
		// 与http跳转区别
		// window.location.href = '#/search/'+$scope.searchName;
		// console.log($scope.searchName);
		$location.url('/search/'+ $scope.searchName);
	}
}])