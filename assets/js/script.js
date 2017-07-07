var app = angular.module("ninja",['ngRoute']);
// app.config(function(){
//   alert("config function which acts before the actual application runs");
// });
// app.run(function(){
//     alert("run function which runs when application starts running");
// });use both if you need to show something before the actual application runs
app.config(['$routeProvider',function($routeProvider){

    $routeProvider
    .when('/home',{
      templateUrl:'views/home.html'
    })
    .when('/ninjas',{
      templateUrl:'views/ninjas.html',
      controller:'karate'
    }).otherwise({
      redirectTo:'/home'
    });
}]);

app.controller("karate",['$scope','$http',function($scope,$http){
            $http.get('json/json.json').then(
                    function(response) {
                        $scope.ninjas = response.data;
                    },
                    function(error) {
                        // a 500 error ocurred or any other....
                        $scope.ninjas = [];
                       // throw error message....
                       alert("xcvbn");
                    });

    $scope.removeNinja = function(ninja){
      var removeNinjaIndex = $scope.ninjas.indexOf(ninja);
      $scope.ninjas.splice(removeNinjaIndex,1);
    };
    $scope.addNewninja = function(){
        $scope.ninjas.push({
           name: $scope.newninja.name,
           belt: $scope.newninja.belt,
           rate: parseInt($scope.newninja.rate),
           available: true
        });
        // $scope.newninja = {};
       $scope.newninja = "";
    };
}]);
