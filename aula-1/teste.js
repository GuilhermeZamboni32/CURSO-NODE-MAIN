
/*
const express = require ('express')
const app = express()

var veiculos = [];

app.get('/veiculos' , (req, res) =>{
    res.json(veiculos);
})

app.get('/veiculo/:place', (req, res) => {
    const {placa} = req.params;
    const veiculo = veiculos.find(v => v.placa === placa)

    if (veiculos){
        res.json(veiculo);
    }else {
        res.status(404).json({messege:'veiculo não encontrado.'});
    }
   
});


app.post('/veiculos', (req, res) => {
    const {placa, marca, ano } = req.body;
    veiculos.push(veiculo)
    res.status(201).json({messege: 'veiculo cadastrado com sucesso.'})
});



app.put('veiculos/:placa', (req, res) =>{
    const {placa} = req.params;
    const {marca, modelo, ano } = req.body;
    const veiculo = veiculos.find(v => v.placa === placa);
    if (veiculo) {
        veiculo.marca = marca || veiculo.marca;
        veiculo.modelo = modelo || veiculo.modelo;
        veiculo.ano = ano|| veiculo.ano;

        res.json({mesege: 'informação do veiculo atualizadas com sucesso'})
    }
})



app.delete('veiculo', (req, res) =>{
    const {placa} = req.params;
    const veiculo = veiculos.find(v => v.placa === placa);
    if (veiculo) {
        veiculos.splice(veiculos.indexOf(veiculo), 1);
        res.json({mesege: 'veiculo deletado com sucesso.'})
    }   
})
    */