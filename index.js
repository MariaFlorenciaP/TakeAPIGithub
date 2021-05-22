const express = require('express')
const axios = require("axios");
const app = express()

app.get('/',  async(req, res) => {

    //tirando diretamente o data do res.data
    const { data } = await axios('https://api.github.com/users/takenet/repos')
   
    console.log(data)

    return res.send(data)
    //return res.json(data)
})    

app.listen(3000)

