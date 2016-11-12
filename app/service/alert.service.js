app.service('AlertService', AlertService);

function AlertService(toastr) {
    this.success = success;
    this.error = error;

    function success(mensagem, titulo) {
        titulo = titulo || 'Ok'
        toastr.success(mensagem, titulo);
    }

    function error(mensagem, titulo) {
        titulo = titulo || 'Erro'
        toastr.error(mensagem, titulo);
    }
}