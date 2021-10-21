$(document).ready(function(){

    $('#cifrado').click(function(){
        var bandera = true;
        var mensaje = document.getElementById('mensaje').value;
        var clave = document.getElementById('clave').value;
        if($('input[name=tipo-cifrado]:radio').is(':checked')){
            if(bandera){
                var eleccion = $('input:radio[name=tipo-cifrado]:checked').val();
                if(verificar(clave, eleccion)){
                    var cifrado = CryptoJS.AES.encrypt(mensaje, clave);
                    document.getElementById('MCif').value = cifrado;
                }
            }
        }else{
            alert("selecione una opcion de cifrado para continuar");
        }
    });
});

function verificar(clave, eleccion){
    var longitud = clave.length;
    if(eleccion == "A128" && longitud > 16){
        return false;
    }
    if(eleccion == "A192" && (longitud > 24 || longitud <= 16)){
        return false;
    }
    if(eleccion == "A256" && longitud <= 34){
        return false;
    }
    return true;
}
$(document).ready(function(){
    $('#descifrado').click(function(){
        var bandera = true;
        var clave = document.getElementById('clave').value;
        var contenido = document.getElementById('contenido').value;
        
        if(contenido == ""){
            alert("No se ha seleccionado ningun archivo");
            bandera = false;
        }
        if(clave == ""){
            alert("Debe de llenar el campo de clave");
            bandera = false;
        }
        if(bandera){
            var descifrado = CryptoJS.AES.decrypt(contenido, clave);
            document.getElementById('MDesHex').value = descifrado;
            document.getElementById('MDes').value = descifrado.toString(CryptoJS.enc.Utf8);
        }
    });
});