
function autonomiaAutomotiva(){
  let valorAbastecido = parseFloat(document.getElementById('valorAbastecido').value);
  
  let valorCombustivel = parseFloat(document.getElementById('precoCombustivel').value);
  
  let kmPorLitro = parseFloat(document.getElementById('kmPorLitro').value);
  
  let calculo = (valorAbastecido / valorCombustivel)*kmPorLitro;

  let elementoCalculo = document.getElementById("resultado");

  let autonomia = calculo

  elementoCalculo.innerHTML = autonomia;

};
function litros(){
  let valorAbastecido = parseFloat(document.getElementById('valorAbastecido').value);
  
  let valorCombustivel = parseFloat(document.getElementById('precoCombustivel').value);
  
  let kmPorLitro = parseFloat(document.getElementById('kmPorLitro').value);
  
  let calculo = (valorAbastecido / valorCombustivel);

  let elementoCalculo = document.getElementById("litro");

  let litros = calculo

  elementoCalculo.innerHTML = litros;

};


