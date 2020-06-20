(function(){
  'use strict';
  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCounter);
    LunchCounter.$inject = ['$scope'];

    function LunchCounter($scope){
      $scope.messagetodisplay = " ";
      $scope.texts = " ";

      $scope.displaymessage = function(){
        var str = $scope.texts;
        var arr = str.split(',');
      if(arr.length<=3){
        $scope.messagetodisplay = "Enjoy!";
      }
      else {
        $scope.messagetodisplay = "Too Much!";
      }
      console.log(arr);
    }
    }


})();
