var app = angular.module('myApp', []);

app.controller('myController2',function($scope,$http){
    $scope.save = function(){
    $http({
        url:'https://my-json-server.typicode.com/typicode/demo/posts',
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            'id':$scope.element3,
            'title':$scope.element4      
        })
         })
       .then(function success(response){
          $scope.mySuccess=response.data;
        console.log($scope.mySuccess);
        
       // $scope.weather1=mySucc.current.name;
          },
          function myDelete(response){
        $scope.myfailure= response.statusText;
    
              })
    }
})

app.controller('myCtrl', function($scope, $window,$http,$timeout) {
    $scope.todoList=[];
    $scope.todoComplete=[];
    //$scope.mySuccess;
  startTime();
    
     $scope.addElement = function() {  
        $scope.todoList.push({todoText:$scope.element,todoText1:$scope.element1});
        $scope.element = "";
         pendingTask();
    };
     
    $scope.deleteElement = function(deleteIndex) {  
    alert(deleteIndex);
         //var index = $scope.todoList.indexOf(x);
        $scope.todoList.splice(deleteIndex,1);
          pendingTask();
         
     };
     $scope.completeElement = function(completeIndex) {  
        $window.alert("completed") 
         //console.log($scope.todoList[completeIndex]);
         $scope.todoComplete.push($scope.todoList[completeIndex]);
          $scope.todoList.splice(completeIndex,1);
           pendingTask();
         completedTask();
     };
    
    $scope.deleteElement1 = function(deleteIndex) {  
    alert(deleteIndex);
         //var index = $scope.todoList.indexOf({todoText:"a",todoText1:"b"});
        //console.log(index);
        $scope.todoComplete.splice(deleteIndex,1);
           pendingTask();
        completedTask();
     };
    $scope.weather=function(){
    $http({
        url:'http://api.apixu.com/v1/current.json?key=23319fb777b04d468cc173118173112&q='+ $scope.element2,
        method:'GET',
        headers:{'Content-Type':'application/json'}
        
    })
    .then(function success(response){
          $scope.mySuccess=response.data;
        console.log($scope.mySuccess);
        
       // $scope.weather1=mySucc.current.name;
          },
          function myDelete(response){
        $scope.myfailure= response.statusText;
    
              })
    }
    function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    h=checkTime(h);
    m =checkTime(m);
    s =checkTime(s);
   $scope.clock = h + ":" + m + ":" + s;
    $timeout(startTime, 500);
    
   
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}
    function pendingTask(){
    $scope.pendingtask=$scope.todoList.length;
    
    
}
    function completedTask(){
        $scope.completedTask=$scope.todoComplete.length;
    }
})