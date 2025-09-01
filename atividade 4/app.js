const express = require('express');
const app = express();
const PORT = 8081;//porta definida do nosso servidor 

app.get('/ano/:ano', (req, res) => {
    try{
  const ano = parseInt(req.params.ano); // constante do ano 

  if (isNaN(ano)) {
    return res.send('Por favor, informe um ano válido.');//aqui e necessario informar um ano 
  }

  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {//calculo feito para saber se o ano for bissexto ou nao
    res.send(`O ano ${ano} é bissexto.`);//caso for volta positivo informando que o ano e bissexto
  } else {
    res.send(`O ano ${ano} não é bissexto.`);//e caso for negativo volta informando que o ano nao é bissexto
  }
}
catch (error){console.error(`Erro`)}})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
//4.http://localhost:8081/ano/2020