class Billete
{
   constructor(v, c)
   {
       this.valor = v;
       this.cantidad = c;
   } 
}

function entregarDinero()
{ 
   var dinero = parseInt(document.getElementById("cantidad").value);
    console.log(dinero);
    for(var bi of caja)
    {
        if(dinero < 211)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {
            papeles = bi.cantidad;
            }
            else
            {
            papeles = div;
            }              
            entregado.push( new Billete(bi.valor,papeles));
            dinero = dinero - (bi.valor * papeles);
        }
        
        
    }
    if(dinero > 211)
    {
        alert("El monto supera lo disponible en el cajero");  
    }
          
        
   console.log(entregado);
}

var caja = [];
var entregado = [];
caja.push ( new Billete(50, 3) );
caja.push ( new Billete(20, 2) );
caja.push ( new Billete(10, 2) );
var div = 0;
var papeles = 0;


var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);