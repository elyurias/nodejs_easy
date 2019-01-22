const express = require('express');
const app = express();
app.use(express.static(__dirname+'/public'));
app.get('/', (req, res)=>{
    let salida = {
        name:"Irving",
        age:12.3,
        url:req.url
    };
    res.send(salida);
});
app.listen(3000);