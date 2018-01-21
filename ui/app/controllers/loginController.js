app.controller("LoginController", function($scope, $http, $httpParamSerializerJQLike) {

    $scope.login_submit = function(obj) {
    console.log("submitted");
    var data = {};
    data['username'] = $scope.username;
    data['password'] = $scope.password;
    $http({
        method : "POST",
        url : "http://0.0.0.0:8000/login/",
        data: $httpParamSerializerJQLike(data),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        xhrFields: {
                withCredentials: true
        },
    }).then(function mySuccess(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });

  }
});
