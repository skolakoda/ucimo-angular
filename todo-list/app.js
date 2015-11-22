angular
    .module("todoApp", [])
    .controller("ToDoCtrl", ToDoCtrl)
    .filter("checkedItems", checkedItems);


function ToDoCtrl($scope, $http) {

    $http.get("todo.json").success(function(data) {
        $scope.items = data;
    });

    $scope.incompleteCount = function() {
        var count = 0;
        angular.forEach($scope.items, function(item) {
            if (!item.done) count++;
        });
        return count;
    };

    $scope.warningClass = function() {
        return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
    };

    $scope.addNewItem = function(actionText) {
        $scope.items.push({
            action: actionText,
            done: false
        });
    };
} // ToDoCtrl


function checkedItems() {
    return function(items, showComplete) {
        var resultArr = [];
        angular.forEach(items, function(item) {
            if (!item.done || showComplete) {
                resultArr.push(item);
            }
        });
        return resultArr;
    };
} // checkedItems
