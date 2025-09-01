const express = require('express');
const app = express();
const PORT = 8081;//porta definida do servidor 

app.get('/saudacao/:nome', (req, res) => {
    try{
  const nome = req.params.nome;//constante nome
  const hora = parseInt(req.query.hora);//constantehora definida

  if (isNaN(hora) || hora < 0 || hora > 23) {
    return res.send('Por favor, informe a hora corretamente (entre 0 e 23).');//calculo feito das horas e caso nao seja informado voltara com um erro pedindo para falar as horas de 0 a 23
  }

  let saudacao;

  if (hora >= 0 && hora < 12) {
    saudacao = 'Bom dia';//caso menos de meio dia sera bom dia 
  } else if (hora >= 12 && hora < 18) {
    saudacao = 'Boa tarde';//das 12 as 18 boa tarde 
  } else {
    saudacao = 'Boa noite';//e caso passse desses horarios vai ser boa noiten 
  }

  res.send(`${saudacao}, ${nome}!`);
}catch (error){console.error(`Erro`)}

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
})});