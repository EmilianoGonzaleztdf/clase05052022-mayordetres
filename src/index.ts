rotulo1.innerHTML = "ingrese el primer numero";
rotulo2.innerHTML = "ingrese el segundo numero";
rotulo3.innerHTML = "ingrese el tercer numero";

btn1.addEventListener("click", () => {
  let dato1: number = Number(dato1.value);
  let dato2: number = Number(dato2.value);
  let dato3: number = Number(dato3.value);
  let dato1 = document.getElementById(dato1);
  let dato2 = document.getElementById(dato2);
  let dato3 = document.getElementById(dato3);

  if (dato1 > dato2 && dato1 > dato3) {
    console.log("el numero " + dato1 + "es el mayor");
  } else if (dato2 > dato1 && dato2 > dato3) {
    console.log("el numero " + dato2 + "es el mayor");
  } else if (dato3 > dato1 && dato3 > dato2) {
    console.log("el numero " + dato3 + "es el mayor");
  }
});
