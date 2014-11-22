function ListController ($scope) {
	
	$scope.items = [
        {product: 'Milk', quantity: 2, bought: false},
        {product: 'Beer', quantity: 12, bought: false}
    ];


    $scope.addItem = function () {
        $scope.items.push({product: $scope.item.product,
                           quantity: $scope.item.quantity,
                           bought: false});
        $scope.item.quantity = $scope.item.quantity = '';
    };
	
	$scope.addItem2 = function () {
        $scope.items2d.push({product: $scope.item.product,
                           quantity: $scope.item.quantity,
                           bought: false});
        $scope.item2d.quantity = $scope.item.quantity = '';
    };
}