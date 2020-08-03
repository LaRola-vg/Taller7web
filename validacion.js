var ccpaswd = document.getElementById('ccpaswd');
var ccpaswdValidate = document.getElementById('ccpaswdValidate');

function enviarFormulario(){

	if(ccpaswd.value != ccpaswdValidate.value){
		alert('Las contraseñas no coinciden')
	}
	return false;	
}