function contratar()
    {
      var nombre = document.getElementById("nombre").value; 
      console.log(nombre);  
        if (nombre=="BATMAN") 
                {
                    alert("Donde esta robin");
                }
      
      var apellido = document.getElementById("apellido").value; 
      console.log(apellido);
      
      var cumple = document.getElementById("fechacumple").value; 
      console.log(cumple);

      var telefono = document.getElementById("telefono").value; 
      console.log(telefono);

      var nacionalidad = document.getElementById("nacionalidad").value; 
      console.log(nacionalidad);
         if (nacionalidad=="España") 
            {
          alert("Me encantan las tapas");
            }


      var correo = document.getElementById("email").value; 
      console.log(correo);

      var usuario = document.getElementById("usuario").value; 
      console.log(usuario);

      var pass = document.getElementById("password").value; 
      console.log(pass);

      var series = document.getElementById("series").checked; 
      //console.log(series);

      var peliculas = document.getElementById("peliculas").checked; 
     //console.log(peliculas);

      var documentales = document.getElementById("documentales").checked; 
      console.log(documentales);
        
        if(series==true)
            {
                console.log("Usted a seleccionado series"); 
            }
        if(peliculas==true)
            {
                console.log("Usted a seleccionado peliculas "); 
            }
        if(documentales==true)
            {
                 console.log("Usted a seleccionado documentales"); 
                 alert("Tengo sueño")
            }

      var anual = document.getElementById("anual").checked; 
      //console.log(anual);
      

      var mensual = document.getElementById("mensual").checked; 
      console.log(mensual);
      
      
        if (anual==true)
            {
                console.log("Usted a seleccionado pago mensual");
            }

        else if(mensual==true)
            {
                 console.log("Usted a seleccionado pago es mensual"); 
            }

     

      var hijosi = document.getElementById("si").checked; 
      console.log(hijosi); 

      var hijono = document.getElementById("no").checked; 
      console.log(hijono);
      
        if (hijosi==true)
            {
                console.log("Usted a seleccionado que tienes hijos ");
            }

        if (hijono==true)
            {
                console.log("Usted a seleccionado  no tiene hijos "); 
            }

      var color = document.getElementById("colortema").value; 
      document.body.style.backgroundColor=color;
      console.log(color);


      var area = document.getElementById("comentario").value; 
      console.log(area);

      if (nombre="GiovaNNI" && nacionalidad == "" && documentales==true && peliculas==false && series==false)
        {
          alert("PAGAS EL DOBLE POR CHORIZO");
        }
    }