var app = angular.module('app',[]) ;
app.controller('IndexController',function($scope){
    console.info('*******************') ;
    $scope.data = {
       name:'yicj'
    } ;
    $scope.test = function (){
        
    }
}) ;

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
