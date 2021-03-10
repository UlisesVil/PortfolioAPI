'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3700;

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/portafolio')
mongoose.connect('mongodb+srv://UlisesVil:<Password>@dbapinodejs.1xodm.mongodb.net/dbportfolio?retryWrites=true&w=majority')
        .then(()=>{
            console.log('Conexion a la base de datos establecida satisfactoriamente');
        
            app.listen(port, ()=> {
                console.log("Servidor corriendo correctamente en la url localhost:3700");
            });
        }).catch(err=> console.log(err));
        
//mongoose.connect("mongodb://localhost/portafolio", {
mongoose.connect("mongodb+srv://UlisesVil:<Password>@dbapinodejs.1xodm.mongodb.net/dbportfolio?retryWrites=true&w=majority", {
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
     