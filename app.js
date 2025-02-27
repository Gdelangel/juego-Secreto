

// let parrafo = document.querySelector('p');
// parrafo.innerHTML="Indica un numero del 1 al 10";

// ALCANCE | SCOPE
let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;
condicionesIniciales()


function generarNumeroSecreto() {

    let numeroGenerado  = Math.floor(Math.random()*10)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');    
    }else{


        //SI EL NUMERO GENERADO ESTA EN LA LISTA
        if(listaNumerosSorteados.includes(numeroGenerado)){
            console.log("ya lo incluye: " + numeroGenerado)
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    
    }
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    //titulo.textContent="Gustavo Del Angel";
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarcaja();
    }
}

function limpiarcaja(){
    document.querySelector('#valorUsuario').value='';
}

function reiniciarJuego() {
    //limpiar caja
    limpiarcaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicizalizar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}



function intentoDeUsuario(){    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario === numeroSecreto);
}

function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del numero Secreto");
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

