let usuario = 0;


const solicitar_numero = () =>{
    let usuario;
	let contador = 0;
    do{
        console.log(contador);

        usuario = prompt("Ingrese un número entre 1 y 20: ");
        usuario = Number.parseInt(usuario);
		contador += 1;

        if(contador == 3)
        {
            break;
        }

    } while((usuario < 1) || (usuario > 20));

    return usuario;
}

const multiplicacion = (numero) =>{
 
    console.log(`Tabla de Multiplicar`);
   
    for(let i = 1; i <= numero; i++){
        console.log(`${i} x ${numero} = ${i * numero}`);
    }
}


const factorial = (numero) =>{
    
    for(let i = 1; i <= numero; i++){
       
        let factorial = 1;
        for(let j = i; j>0; j--){
            factorial *= j;
        }
        console.log(`Factorial de ${i} es: ${factorial}`);
    }
}

usuario = solicitar_numero();

console.log(`El número ingresado es:  ${usuario}`);

multiplicacion(usuario);


factorial(usuario);
