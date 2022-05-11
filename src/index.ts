rotulo1.innerHTML = "ingrese el primer numero";
rotulo2.innerHTML = "ingrese el segundo numero";
rotulo3.innerHTML = "ingrese el tercer numero";

let numero1 = document.getElementById("dato1");
let numero2 = document.getElementById("dato2");
let numero3 = document.getElementById("dato3");

btn1.addEventListener("click", () => {
  let numero1: number = dato1.value;
  let numero2: number = dato2.value;
  let numero3: number = dato3.value;

  if (numero1 > numero2 && numero1 > numero3) {
    console.log("El numero " + numero1 + " es el mayor");
  } else if (numero2 > numero1 && numero2 > numero3) {
    console.log("El numero " + numero2 + " es el mayor");
  } else if (numero3 > numero1 && numero3 > numero1) {
    console.log("El numero " + numero3 + " es el mayor");
  }
});
