function buscar() 
{
    resetear();
    var selector =document.getElementById("categoria").value;
    var colorcelda = document.getElementsByClassName(selector);
   for (let i = 0; i <colorcelda.length; i++)
   {
       colorcelda[i].style.backgroundColor="yellow";
   }
}
function selcnombre()
{
    resetear();
    var selectornom =document.getElementById("empleado").value;
    var colornombre = document.getElementsByClassName(selectornom);
    for (let i = 0; i <colornombre.length; i++)
    {
        colornombre[i].style.backgroundColor="red";
    }
}
function resetear()
{
    var filas = document.getElementsByTagName("tr");
    for (let i = 0; i < filas.length; i++) 
    {
      filas[i].style.backgroundColor="white";        
    }
}
