const express = require('express');
const app = express();
const PORT = 8081; //porta onde o servidor sera rodado 

app.get("/adicao/:NumUm/:NumDois", (req, res) => {
    try {

        const { NumUm } = req.params;//declaro o primeiro numero que vao utilizar para o calculo
        const { NumDois } = req.params//declaro o segundo numero que vao utilizar para o calculo
        const resultado = parseFloat(NumUm) + parseFloat(NumDois)// aqui vamos somar o numero 1 e o numero 2 para saber o resultado

        res.send(`o numero que voce busca é ${resultado}`)
        if (NumUm == undefined || NumDois == undefined) {
            res.status(400).send("Os parametros NumUm e NumDois são obrigatorios!!")//aqui caso o numero 1 ou 2 nao forem escritos ou definidos volta um erro 400

        }
    } catch (error) {
        console.error(`erro ao te dizer seus resultados`);
        res.send(500).send("Erro ao processar a requisição!")

    }
});

app.get("/subtracao/:NumUm/:NumDois", (req, res) => {
    try {

        const { NumUm } = req.params;
        const { NumDois } = req.params
        const resultado = parseFloat(NumUm) - parseFloat(NumDois)

        res.send(`o numero que voce busca é ${resultado}`)
        if (NumUm == undefined || NumDois == undefined) {
            res.status(400).send("Os parametros NumUm e NumDois são obrigatorios!!")

        }
    } catch (error) {
        console.error(`erro ao te dizer seus resultados`);
        res.send(500).send("Erro ao processar a requisição!")

    }
});

app.get("/divisao/:NumUm/:NumDois", (req, res) => {
    try {

        const { NumUm } = req.params;
        const { NumDois } = req.params
        const resultado = parseFloat(NumUm) / parseFloat(NumDois)

        res.send(`o numero que voce busca é ${resultado}`)
        if (NumUm == undefined || NumDois == undefined) {
            res.status(400).send("Os parametros NumUm e NumDois são obrigatorios!!")

        }
    } catch (error) {
        console.error(`erro ao te dizer seus resultados`);
        res.send(500).send("Erro ao processar a requisição!")

    }
});

app.get("/multiplicacao/:NumUm/:NumDois", (req, res) => {
    try {

        const { NumUm } = req.params;
        const { NumDois } = req.params
        const resultado = parseFloat(NumUm) * parseFloat(NumDois)

        res.send(`o numero que voce busca é ${resultado}`)
        if (NumUm == undefined || NumDois == undefined) {
            res.status(400).send("Os parametros NumUm e NumDois são obrigatorios!!")

        }
    } catch (error) {
        console.error(`erro ao te dizer seus resultados`);
        res.send(500).send("Erro ao processar a requisição!")

    }
});//repetimos essa operação varias vezes utilizando soma multiplicação subtração e divisão com o mesmo raciocinio de codigo
//Ultima linha do codigo
app.listen(PORT, () => {
    console.log(`o servidor esta rodando em localhostt ${PORT}`)//informamos a porta que esta ocorrendo os servidor
});