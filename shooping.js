<html>
<head>
    <title>Shopping List Application</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script src="app.js"></script>
</head>
<body ng-app="shoppingApp" ng-controller="shoppingController">
    <h2>Shopping List</h2>

    <input type="text" ng-model="newItem" placeholder="Enter a new item">
    <button ng-click="addItem()">Add Item</button>

    <table>
        <tr ng-repeat="item in items">
           <td> {{ item }} </td>
           <td> <button ng-click="removeItem($index)">Remove</button></td>
        </tr>
    </table>
</body>
</html>
//app.js fle
var app = angular.module('shoppingApp', []);
app.controller('shoppingController', function($scope) {
    $scope.items = ['Milk', 'Bread', 'Cheese']; // Default shopping items
  $scope.addItem = function() {
        if ($scope.newItem) {
            $scope.items.push($scope.newItem);
            $scope.newItem = ''; // Clear the input field
        }
    };
  $scope.removeItem = function(index) {
        $scope.items.splice(index, 1);
    };
});
