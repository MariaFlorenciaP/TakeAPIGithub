const express = require('express')
const axios = require("axios")
const app = express()

app.get('/',  async(req, res) => {

    try{
        const { data } = await axios('https://api.github.com/users/takenet/repos?per_page=5')
   
           
         return res.send(data)
         
    }catch(error){
        console.error(error)
    }
})    

app.listen(process.env.PORT || 3000)

