//all querys
import {db} from '../config/db.js'

export const getAllProducts = () => {
    return db('products')
    .select('id', 'name', 'price')
    .orderBy('name')
}

export const getProduct = (id) => {
    return db('products')
    .select('id', 'name', 'price')
    .where({id})
}