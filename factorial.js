<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.0/angular.min.js"></script>
</head>
<body ng-app="calcApp">

<div ng-controller="CalcController">
    <input type="number" ng-model="number" placeholder="Enter a number">

    <button ng-click="calculateFactorial()">Factorial</button>
    <button ng-click="calculateSquare()">Square</button>

    <p>Factorial: {{factorialResult}}</p>
    <p>Square: {{squareResult}}</p>
</div>

<script>
angular.module('calcApp', [])
.controller('CalcController', function($scope) {
    $scope.number = 0;
    $scope.factorialResult = 1;
    $scope.squareResult = 0;

    $scope.calculateFactorial = function() {
        var num = $scope.number;
        $scope.factorialResult = factorial(num);
 };

    function factorial(n) {
        if(n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    $scope.calculateSquare = function() {
        $scope.squareResult = $scope.number * $scope.number;
    };
});

</script>

</body>
</html>
