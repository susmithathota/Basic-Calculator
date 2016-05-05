(function(){
var app=angular.module('updates',['ngMaterial','ngMessages']);

app.controller('calculateCtrl',function($scope){
  $scope.input='0';
  this.onButton = function(btn){
    if(btn=='='){
      this.evaluate(btn);
    }
    else if(btn=='AC'){
      $scope.input=0;
    }
    else if(btn=='CE'){
      $scope.input=$scope.input.slice(0,-1);
    }
    else{
    if($scope.input=='0'){
      $scope.input= btn;
    }
    else{
      $scope.input = $scope.input + (btn+'');
    }
    }
     
  };
  this.evaluate=function(btnEquals){
      $scope.input=$scope.input+'';

      if(/.*\+.*/g.test($scope.input)){
        $scope.input=$scope.input.split('+');
        $scope.input = ($scope.input[0]*1)+($scope.input[1]*1);
      }
      else if(/.*\-.*/g.test($scope.input)){
        $scope.input=$scope.input.split('-');
        $scope.input = ($scope.input[0]*1)-($scope.input[1]*1);
      }
      else if(/.*\*.*/g.test($scope.input)){
        $scope.input=$scope.input.split('*');
        $scope.input = ($scope.input[0]*1)*($scope.input[1]*1);
      }
      else if(/.*\/.*/g.test($scope.input)){
        $scope.input=$scope.input.split('/');
        $scope.input = ($scope.input[0]*1)/($scope.input[1]*1);
      }
      if(/.*\%.*/g.test($scope.input)){
        $scope.input=$scope.input.split('%');
        $scope.input = ($scope.input[0]*1)%($scope.input[1]*1);
      }
  };
    
});

  
})(); //module