const hbs = require("hbs");
hbs.registerHelper('getAño', ()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar',(texto)=>{
    let palabras = text.split(' ');
    palabras.forEach((palabra, index)=>{
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});