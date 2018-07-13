function iniciarpresentacion() {
    setInterval(cambiarimagen, 12000);
}
var numero = 0;
function cambiarimagen() {
    var cambioimagen = document.getElementById("imagenespresentacion");
    cambioimagen.src = "Images/" + numero + ".gif";
    numero = numero + 1;
    if (numero == 6) {
        numero = 0;
    }
}
function solicitar() {
    //Declaración del Flag tipo booleano, para las condiciones obligatorias no presente Resultado
    var marca = false;

    // Toma de ID's de Datos Basicos

    var nombre = document.getElementById("nombre").value.toLowerCase();
    var apellido = document.getElementById("apellidos").value.toLowerCase();
    var nacimiento = document.getElementById("fechanacimiento").value;
    var nacimientonum = Number(nacimiento);
    var dni = document.getElementById("dni").value;
    var telefono = document.getElementById("telefono").value;
    var correoelectronico = document.getElementById("email").value.toLowerCase();

    //Condicionales de los  Datos basicos
    // Condicional del Nombre
    if (nombre.trim() == "" /*|| apellido.trim() == "" || nacimiento.trim() == "" || dni.trim() == "" || telefono.trim() == "" || correoelectronico.trim() == ""*/) {
        //alert("Digite su Nombre");
        var nombrefalta = document.getElementById("nombrefalta");
        nombrefalta.innerHTML = "Por favor diligencie su Nombre";
        marca = true;

    }
    // Condicional del Apellido
    if (apellido.trim() == "") {
        var apellidofalta = document.getElementById("apellidofalta");
        apellidofalta.innerHTML = "Digite su Apellido";
        //alert("Digite sus Apellidos");
        marca = true;

    }
    // Condicional del Nacimiento
    if (nacimiento.trim() == "") {
        var fechanacimientofalta = document.getElementById("fechanacimientofalta");
        fechanacimientofalta.innerHTML = "Digite su año de nacimiento";
        // alert("Digite su año de nacimiento");
        marca = true;

    }
    // Condicional del Dni
    if (dni.trim() == "") {
        var dnifalta = document.getElementById("dnifalta");
        dnifalta.innerHTML = "Digite su DNI";
        //alert("Digite su DNI");
        marca = true;

    }
    // Condicional del Telefono
    if (telefono.trim() == "") {
        var telefonofalta = document.getElementById("telefonofalta");
        telefonofalta.innerHTML = "Digite su Telefono";
        //alert("Digite su Telefono");
        marca = true;

    }
    // Condicional del E-mail
    if (correoelectronico.trim() == "") {
        var emailfalta = document.getElementById("emailfalta");
        emailfalta.innerHTML = "Digite su E-mail";
        //alert("Digite su E-mail");
        marca = true;

    }
    //Condicional de la Mayoria de Edad      
    var hoy = new Date();
    console.log(hoy);
    var yearac = hoy.getFullYear();// es el año actual
    console.log(yearac);
    var edad = yearac - nacimientonum;
    console.log(edad);
    if (edad < 18) {

        alert("Debe estar autorizado por sus Tutores");

    }
    //Condicional de preferencias de Contacto
    var contacto = document.getElementById("contacto").value;
    if (contacto == "Elegir") {
        alert("Debe elegir una opcion de Contacto");
        marca = true;
    }
    else if (contacto == "telefonocontacto") {
        document.getElementById("EntradaContacto").placeholder = "Digite su Telefono";
    }
    else if (contacto == "emailcontacto") {
        document.getElementById("EntradaContacto").placeholder = "Digite su E-mail";

    }
    else if (contacto == "correopostal") {
        document.getElementById("EntradaContacto").placeholder = "Digite su Dirección";

    }

    //Condicionales y Calcular  del importe y la suma del total
    var importetotal = 0;

    var html = document.getElementById("html").checked;
    var css3 = document.getElementById("css3").checked;
    var ijavascript = document.getElementById("ijavascript").checked;
    var javascriptA = document.getElementById("javascriptA").checked;
    var bootstrap = document.getElementById("bootstrap").checked;
    var jquery = document.getElementById("jquery").checked;
    var angular5 = document.getElementById("angular5").checked;

    if (html == true) {
        let importehtml = 300;
        importetotal += importehtml;
        console.log(importetotal);
    }
    if (css3 == true) {
        let importecss3 = 300;
        importetotal += importecss3;
        console.log(importetotal);
    }
    if (ijavascript == true) {
        let importeijavascript = 500;
        importetotal += importeijavascript;
        console.log(importetotal);
    }
    if (javascriptA == true) {
        let importejavascriptA = 300;
        importetotal += importejavascriptA;
        console.log(importetotal);
    }
    if (bootstrap == true) {
        let importebootstrap = 200;
        importetotal += importebootstrap;
        console.log(importetotal);
    }
    if (jquery == true) {
        let importejquery = 200;
        importetotal += importejquery;
        console.log(importetotal);
    }
    if (angular5 == true) {
        let importeangular5 = 800;
        importetotal += importeangular5;
        console.log(importetotal);
    }

    //Condicional de proteccion de Datos
    var protecciondatos = document.getElementById("condicionesdatos").checked;
    if (protecciondatos == false) {

        alert("Acepte el Tratamiento de Datos");
        marca = true;
    }

    //Condicional de la Bandera
    if (marca == false) {
        console.log("No hay error");
        var resultadoimporte = document.getElementById("resultadoimporte");
        resultadoimporte.innerHTML = "El importe total de su compra es:  " + importetotal + " €";
    }
    else {
        alert("Diligencia todo la Solicitud");
    }

}

