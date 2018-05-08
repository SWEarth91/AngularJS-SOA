var app = angular.module('app', ['ngRoute']);

app.controller('body', function ($scope, $http) {
    $http.get("https://productapi977377.herokuapp.com/Products.php/api/products")
        .then(function (response) {

            for (i = 0; i < response.data.length; i++) {
                console.log(response.data[i]);
            }
        });
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'login.html'
        })
        .when('/',{
            templateUrl: 'main.html'
        });
});