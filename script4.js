var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope) {
    $scope.todoList=[];
     $scope.addElement = function() {  
        $scope.todoList.push({todoText:$scope.element});
        $scope.element = "";
    };
})