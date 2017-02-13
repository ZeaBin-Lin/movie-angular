angular.module('movieApp.searchCtrl',[])
.controller('searchCtrl',['$scope','$routeParams','$movieServ',function($scope,$routeParams,$movieServ){
	$scope.movie = {};
	var start = ($routeParams.pageid - 1) * 5;
	$movieServ.jsonp('https://api.douban.com/v2/movie/search',{
		q:$routeParams.searchName,
		count:5,
		start:start
	},function(data){
		$scope.movie = data || {};
        $scope.prevPage = $routeParams.pageid - 1;
        $scope.nextPage = ($routeParams.pageid-0) + 1;
        $scope.pageCount = Math.ceil(data.total/5);
        console.log($scope.pageCount);
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