angular.module('movieApp.indexCtrl',[])
.controller('indexCtrl',['$scope','$location',function($scope,$location){
	$scope.searchName = '';
	$scope.search = function(){
		// ???
		window.location.href = '#/search/'+$scope.searchName;
		// console.log($scope.$searchName);
		// $location.url('/search/'+ $scope.$searchName);
	}
}])