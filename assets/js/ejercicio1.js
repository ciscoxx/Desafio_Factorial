let n1 = parseInt(prompt("ingrese su numero para la calculadora: "));
let resultado = 1;

const valorx = () => {

  if (n1 <= 0 || n1 >= 20) {
    alert("ingrese un numero mayor a 0 ó menor a 20");
    
  } 
  else {

    for (let i = 1; i <= n1; i++) {
        console.log(i + " x " + n1 + " = " + (i * n1));
      }

      for (let i = 1; i <= n1; i++) {
        resultado = resultado * i;
        console.log("Factorial de " + i + " es: " + resultado);
      }

  }
};

valorx(n1);
