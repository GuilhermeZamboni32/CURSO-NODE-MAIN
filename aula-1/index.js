require('dotenv').config();

const db = require('./db')

const port = process.env.PORT // processo que roda o Node,  env: ambiente,  port:configuracões

const express = require("express");
const app = express();


//cria uma rota
app.get("/" ,(req, res) =>{  //pegar dados

    res.json({
        message:"funcionando"
    })
})


//cria uma rota
app.get("usuario" ,(req, res) =>{  //pegar dados
    const usuario = await db.selectCustomers();
    res.json(usuario);
})





