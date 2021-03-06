
(function () {
    'use strict';

    angular.module('starter').controller('AuthCtrl', ['$scope','$state','$rootScope','$ionicHistory','$http', AuthCtrl]);

    function AuthCtrl($scope,$state,$rootScope,$ionicHistory,$http ) {       
     
     $scope.login = function(){
       // console.log($scope.data.username + '' + $scope.data.password);
       $state.go('tabs.theWall');
        $http({
                url: $rootScope.baseUrl + 'loginVerification' + '/' + $scope.data.username + '/' + $scope.data.password,
                method: "GET",
            }).success(function(response){
                console.log(response);
                if(response.loginVerificationResult.EmailId.length > 0){
                    $rootScope.personalInfo = response.loginVerificationResult;
                    console.log($rootScope.personalInfo);
                    $state.go('tabs.home');
                }
            }).error(function(error){
                 console.log(error);
            });
     	//$state.go('tabs.home');
     
     };

      $scope.goTologin = function(){
     	$state.go('login');
     }; 


      $scope.goTosignup = function(){
     	$state.go('signup');
     }; 

     $scope.skipBanners = function(){
        $state.go('loginIntro');
     };  

     $rootScope.$ionicGoBack = function() {
        $ionicHistory.goBack();
    
        };
    }
})();