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
    var dinero = document.getElementById("cantidad").value;
    
    for(var bi of caja){

          if(dinero > 0){
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad){
                papeles = bi.cantidad
                if(papeles = bi.cantidad){
                    entregado.push( new Billete(bi.valor,papeles))
                    dinero = dinero - (bi.valor * papeles);
                }else
 
            }
          }
    }    
    
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