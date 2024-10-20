<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.0/angular.min.js"></script>
</head>
<body ng-app="mathApp">

<div ng-controller="MathController">
    <input type="number" ng-model="number1" placeholder="Enter first number">
    <input type="number" ng-model="number2" placeholder="Enter second number">

    <button ng-click="add()">Add</button>
    <button ng-click="subtract()">Subtract</button>
    <button ng-click="multiply()">Multiply</button>
    <button ng-click="divide()">Divide</button>

    <p>Result: {{result}}</p>
</div>

<script>

 angular.module('mathApp', [])
.controller('MathController', function($scope) {
    $scope.number1 = 0;
 $scope.number2 = 0;
    $scope.result = 0;

    $scope.add = function() {
        $scope.result = $scope.number1 + $scope.number2;
    };

    $scope.subtract = function() {
        $scope.result = $scope.number1 - $scope.number2;
    };

    $scope.multiply = function() {
        $scope.result = $scope.number1 * $scope.number2;
    };

    $scope.divide = function() {
        if ($scope.number2 !== 0) {
            $scope.result = $scope.number1 / $scope.number2;
        } else {
            $scope.result = 'Division by zero!';
        }
    };
});
   
</script>

</body>
</html>

