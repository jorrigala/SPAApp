(function(){
    'use strict';
    
    angular.module("LunchChecker",[])
    
    .controller('LunchCheckerController', LunchCheckerController);
    
    LunchCheckerController.$inject = ['$scope','$filter'];
    
    function LunchCheckerController($scope, $filter){
        $scope.numberOfItems="";
        $scope.message = "";
        $scope.showMessage = false;
        $scope.alertClass = "";
        
        var alertSuccess = "alert-success";
        var alertWarning = "alert-warning";
        var alertDanger = "alert-danger";
        
        $scope.checkNumberOfLunchItems = function(){
            
            var arr = $scope.numberOfItems.split(",");
            arr = arr.filter(v=>v.trim()!='');
            
              if(arr.length > 3){
                  $scope.message = "Too much!"
                  $scope.alertClass = alertWarning;
              }else if(arr.length > 0){
                  $scope.message = "Enjoy!"
                  $scope.alertClass = alertSuccess;
              }else if(arr.length == 0 ){
                  $scope.message = "Place enter data first";
                  $scope.alertClass = alertDanger;
              }
            
            $scope.showMessage = true;
        };
        
    };
    
})();