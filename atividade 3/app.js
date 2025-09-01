const express = require('express');
const app = express();
const port = 8081;//porta definida do server 

app.get('/operacao/:tipo', (req, res) => {
    try{
    const tipo = req.params.tipo;
    const numUm = Number(req.query.numUm);//definindo o numero 1 para os calculos
    const numDois = Number(req.query.numDois);//defiindo o numero 2 para os calculos

    let resultado;

    if (isNaN(numUm) || isNaN(numDois)) {
        return res.send('Por favor, envie números válidos nos parâmetros "numUm" e "numDois"');//caso os campos obrigatorios nao sejam preenchidos voltara com um erro
    }

    if (tipo === 'soma') {
        resultado = numUm + numDois;//quando colocar o numero 1 e o numero 2 ira somar
    } else if (tipo === 'subtracao') {
        resultado = numUm - numDois;//utilizamos o else if como o inverso da operação de soma
    } else if (tipo === 'multiplicacao') {
        resultado = numUm * numDois;//utilizamos a divisão 
    } else if (tipo === 'divisao') {
        if (numDois === 0) {
            return res.send('Erro: divisão por zero não é permitida.');//caso coloque 0 ira voltar um ero
        }
        resultado = numUm / numDois;
    } else {
        return res.send('Tipo de operação inválido, Use: soma, subtracao, multiplicacao ou divisao');//obrigatorio usar aulgumas dasd 4 operações
    }

    res.send(`Resultado da operação ${tipo}: ${resultado}`);
    
} catch (error){console.error(`Erro`)}})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
