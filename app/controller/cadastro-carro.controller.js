app.controller('CadastroCarroController', CadastroCarroController);

function CadastroCarroController($scope, AlertService) {

    $scope.nome = 'fabricio';
    $scope.entidade = {};
    $scope.listaCarros = [];
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;

    function salvar() {

        if ($scope.carroForm.$invalid) {
            $scope.carroForm.nomeCarro.$setTouched();
            $scope.carroForm.cor.$setTouched();
            AlertService.error('Formulário inválido');
            return;
        }

        $scope.listaCarros.push($scope.entidade);
        AlertService.success('Registro salvo com sucesso', 'Ok');
        limpar();
    }

    function limpar() {
        $scope.entidade = {};
        $scope.carroForm.$setUntouched();
    }

    function excluir(index) {
        $scope.listaCarros.splice(index);
    }
}





