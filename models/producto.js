/**
 * Created by Raul Perez on 21/04/2017.
 */
'use strict'

const ProductModel = require('./coneccion')

function getProductById(idProduct, next) {
    ProductModel.query(`SELECT * FROM productos p WHERE p.idProducto = ?`, idProduct ,(error, resultado, fields) => {
        next(error, resultado[0])
    })
}

function getIdProductoAndIdCategoriaByName(name, next) {
    ProductModel.query(`SELECT p.idProducto, p.idCategoria FROM productos p WHERE p.nombre = ?`, name ,(error, resultado, fields) => {
        next(error, resultado[0])
    })
}

function getIdProductoAndIdCategoriaOfSucursales(next) {
    ProductModel.query(`SELECT p.idProducto, p.idCategoria FROM productos p`, (error, resultado, fields) => {
        next(error, resultado)
    })
}

function getProducts(next) {
    let seleccion = 'p.idProducto, p.nombre, p.descripcion, p.codigo, p.minimo, p.esBasico, c.nombre nombrec'
    ProductModel.query(`SELECT ${seleccion} FROM productos p INNER JOIN categorias c ON p.idCategoria = c.idCategoria` ,(error, resultado, fields) => {
        next(error, resultado)
    })
}

function getProductsBasicos(next) {
    ProductModel.query(`SELECT p.nombre FROM productos p WHERE p.esBasico = 1` ,(error, resultado, fields) => {
        next(error, resultado)
    })
}

function getIdProductsBasicos(next) {
    ProductModel.query(`SELECT p.idProducto FROM productos p WHERE p.esBasico = 1` ,(error, resultado, fields) => {
        next(error, resultado)
    })
}

function createProduct(product, next) {
    ProductModel.query('INSERT INTO productos SET ?', product, (error, resultado, fields) => {
        next(error)
    })
}

function updateProduct(product, next) {
    ProductModel.query('UPDATE productos p SET ? WHERE p.idProducto = ?', [product,product.idProducto], (error, resultado, fields) => {
        next(error)
    })
}

module.exports = {
    getProductById,
    getIdProductoAndIdCategoriaByName,
    getIdProductoAndIdCategoriaOfSucursales,
    getProducts,
    getProductsBasicos,
    getIdProductsBasicos,
    createProduct,
    updateProduct
}