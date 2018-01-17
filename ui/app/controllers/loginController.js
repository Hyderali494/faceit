app.controller("LoginController", function($scope, $http) {
    $scope.username = "";
    $scope.password = "";

    $scope.login_submit = function() {
    console.log("submitted");
    $http({
        method : "POST",
        url : "login/"
    }).then(function mySuccess(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });

  }
});
