const express = require('express');
const app = express();
const hbs = require("hbs");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/parciales');
app.use(express.static(__dirname+'/public'));
require('./hbs/helpers/helpers');
app.get('/', (req, res)=>{
    let cuerpo = {
        name:"Irving",
        age:12.3,
        url:req.url,
        title:"Home"
    };
    res.render('home', cuerpo);
});
app.get('/about', (req, res)=>{
    let cuerpo = {
        title:"Autora"
    };
    res.render('about', cuerpo);
});
app.listen(3000);