const http = require('http');
http.createServer((req, res) => {
    res.write("Hola");  //Mensaje enviado al sistema
    res.end();          //Fin de la lectura del archivo
}).listen(8282);