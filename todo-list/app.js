var model = {
    user: "Adam"
};

angular
    .module("todoApp", [])
    .run(getTodos)
    .filter("checkedItems", checkedItems)
    .controller("ToDoCtrl", ToDoCtrl);


function getTodos($http) {
    $http.get("todo.json").success(function(data) {
        model.items = data;
    });
}   // getTodos

function checkedItems() {
    return function(items, showComplete) {
        var resultArr = [];
        angular.forEach(items, function(item) {

            if (item.done === false || showComplete === true) {
                resultArr.push(item);
            }
        });
        return resultArr;
    }
} // checkedItems

function ToDoCtrl($scope) {
    $scope.todo = model;

    $scope.incompleteCount = function() {
        var count = 0;
        angular.forEach($scope.todo.items, function(item) {
            if (!item.done) {
                count++
            }
        });
        return count;
    }

    $scope.warningLevel = function() {
        return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
    }

    $scope.addNewItem = function(actionText) {
        $scope.todo.items.push({
            action: actionText,
            done: false
        });
    }
} // ToDoCtrl
