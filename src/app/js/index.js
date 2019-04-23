document.getElementById('contact').addEventListener('submit', enviarMensaje);

function noRefrecar(){
	return false;
};

//Función Enviar Mensaje
function enviarMensaje(e) {    
    swal("Mensaje Enviado", "OK", "success");
    
    limpiarFormulario();
    //Para que no refresque la Pantalla	
    e.preventDefault();
};

function limpiarFormulario() {    
    document.getElementById('txtName').value = '';
    document.getElementById('txtEmail').value = '';
    document.getElementById('txtMensaje').value = '';    
};
