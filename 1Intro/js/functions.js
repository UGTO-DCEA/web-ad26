function alerta() {
  window.alert("Aviso");
}

function suma() {
  let numA = parseFloat(document.getElementById("numA").value);
  let numB = parseFloat(document.getElementById("numB").value);
  let resultado = numA + numB;
  window.alert(resultado);
  document.getElementById("resultado").value = resultado;
}
