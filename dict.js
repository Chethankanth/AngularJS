<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>
<div ng-app="" ng-init="names=[
{name:'James',country:'England'},
{name:'Haaland',country:'Norway'},
{name:'Kai',country:'Germany'}]">


<p>Looping with objects:</p>
<ul>
  <li ng-repeat="x in names">
  {{ x.name + ', ' + x.country }}</li>
</ul>
</div>
</body>
</html>
