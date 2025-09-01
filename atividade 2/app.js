const express = require('express');
const app = express();
const PORT = 8081;//porta definida para o servidor

app.get("/calculadora", (req, res) => {

  try{

  const operacao = req.query.operacao;
  const numUm = parseFloat(req.query.numUm);//definindo o numero 1 para os calculos
  const numDois = parseFloat(req.query.numDois);//definindo os numero 2 para poder calcular 

  if (!operacao || isNaN(numUm) || isNaN(numDois)) {//caso nao seja um numeri voltara um erro ou nao dizer qual equação deseja 
    return res.send("Por favor, informe os qual equação voce deseja: digite numero um e numero dois corretamente")
  }

  let resultado;

  if (operacao === "soma") {
    resultado = numUm + numDois;//temos o calculo soma do numero 1 e o numero 2 
  } else if (operacao === "subtracao") {//se for ao contrario de soma e subtração por isso else if
    resultado = numUm - numDois;
  } else if (operacao === "multiplicacao") {//multiplicando o numero 1 e o 2 
    resultado = numUm * numDois;
  } else if (operacao === "divisao") {//caso for ao contrario ia dividir 
    if (numDois === 0) {
      return res.send("Erro: não é possível dividir por zero");//se dividir pro 0 vai dar erro
    }
    resultado = numUm / numDois;
  } else {
    return res.send("Operação inválida. Use: soma, subtracao, multiplicacao ou divisao.");//caso nao seja as quatro operações vai volta rum erro
  }

  res.send(`Resultado: ${resultado}`);

} catch (error){console.error(`Erro`)}});

app.listen(PORT, () => {
  console.log(`o servidor esta rodando em localhostt ${PORT}`)
});
