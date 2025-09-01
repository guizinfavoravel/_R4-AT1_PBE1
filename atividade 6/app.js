const express = require('express');
const app = express();
const PORT = 8081;//local definido do servidor

app.get('/imc', (req, res) => {

    try{

  const peso = parseFloat(req.query.peso);//constante peso para informar o peso
  const altura = parseFloat(req.query.altura);//constatne altura para informar a altura

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    return res.send('Por favor, informe o peso e altura corretamente.');//caso nao digite um dos campos voltara com erro
  }

  const imc = peso / (altura * altura);
  let classificacao = '';

  if (imc < 18.5) {
    classificacao = 'Baixo peso';
  } else if (imc >= 18.5 && imc < 25) {//caso seja menor que 25 sera baixo peso
    classificacao = 'Peso normal';
  } else if (imc >= 25 && imc < 30) {//entre 30 e 25 medio
    classificacao = 'Sobrepeso';//e se passar sobre peso clasificando em obesidade
  } else {
    classificacao = 'Obesidade';
  }

  res.send(`IMC: ${imc.toFixed(2)} - ${classificacao}`);//pega o imc(indice de massa corporal) e arredonda 

}catch (error){
    console.error(`Erro`)}

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
})});