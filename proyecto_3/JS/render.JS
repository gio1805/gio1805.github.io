
var aciertos=0;
function verificar() 
{
    var almacen = window.localStorage;//me guarda los datos en el disco ó en el navegador tipo cookies para generar archivos que se puedan sumar
    aciertos=Number(almacen.getItem("na"));
    
    var imar = document.getElementById("imagenrespuesta");
    var validar = document.getElementById('respuesta').checked;
        if (validar==true) 
        {
            aciertos++;
            alert("Hola\n La respuesta es Correcta! ");
            imar.innerHTML = "<img src ='./Images/correcta.gif'>";
             
        }
        else
        {
            alert("Vuelve a intentarlo ");
            imar.innerHTML = "<img src ='./Images/incorrecta.gif'>";
        }
        console.log(aciertos);
        almacen.setItem("na", aciertos);

}
