
function autonomiaAutomotiva(){
  let valorAbastecido = parseFloat(document.getElementById('valorAbastecido').value);
  
  let valorCombustivel = parseFloat(document.getElementById('precoCombustivel').value);
  
  let kmPorLitro = parseFloat(document.getElementById('kmPorLitro').value);

  if(valorAbastecido && valorCombustivel && kmPorLitro){
    let calculo = (valorAbastecido / valorCombustivel)*kmPorLitro;
  
    let elementoCalculo = document.getElementById("resultado");
  
    let autonomia = calculo
  
    elementoCalculo.innerHTML = autonomia;
  
    //litros
  
    let calculo1 = (valorAbastecido / valorCombustivel);
  
    let elementoCalculo1 = document.getElementById("litro");
  
    let litros = calculo1
  
    elementoCalculo1.innerHTML = litros;
  }else{
    alert("Os campo precisa ser preenchido")
  }
  

};



