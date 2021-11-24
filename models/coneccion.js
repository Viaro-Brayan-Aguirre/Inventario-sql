/**
 * Created by Raul Perez on 11/04/2017.
 */
'use strict'

const mysql = require('mysql'),
    //dbOptions = require('./config'),
    //myConnection = mysql.createConnection(dbOptions)
    myConnection = mysql.createConnection({  
        host: "127.0.0.1",  
        user: "root",  
        password: "1234",  
        database: "inventario"  
        })

myConnection.connect( err => {
    return (err) ? console.log('Error al conectarse a mysql: '+err.stack) : console.log('Coneccion establecida con mysql')
})

module.exports = myConnection