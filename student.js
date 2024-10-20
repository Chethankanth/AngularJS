<html>
<head>
    <title>Student Details and CGPA</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script src="app.js"></script>
</head>
<body ng-app="studentApp" ng-controller="studentController">
    <h2>Student Details</h2>

    <div>
        <button ng-click="countStudents()">Count Students</button>
        <p>Number of Students: {{ studentCount }}</p>
    </div>

    <table border="1">
        <tr>
            <th>Name</th>
            <th>CGPA</th>
        </tr>
        <tr ng-repeat="student in students">
            <td>{{ student.name }}</td>
            <td>{{ student.cgpa }}</td>
        </tr>
    </table>
</body>
</html>
//app.js file

var app = angular.module('studentApp', []);

app.controller('studentController', function($scope) {
    $scope.students = [
        { name: 'Alice', cgpa: 3.5 },
        { name: 'Bob', cgpa: 3.7 },
        { name: 'Charlie', cgpa: 3.8 }
        // Add more students as needed
    ];

    $scope.studentCount = 0;

    $scope.countStudents = function() {
        $scope.studentCount = $scope.students.length;
    };
});
