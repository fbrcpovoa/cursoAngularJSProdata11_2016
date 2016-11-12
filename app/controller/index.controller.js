app.controller('IndexController', IndexController);

function IndexController($scope) {
    $scope.nome = "fabricio";
    $scope.ola = ola;

    function ola() {
        alert('ola');
    }
}


