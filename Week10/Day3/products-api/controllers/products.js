import { getAllProducts, getProduct } from "../models/products.js";

// GET - param

export const _getProduct = (req, res) => {
    getProduct(req.params.id)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({msg: 'not found'})
    })
}



//READ - GET - get all products
export const _getAllProducts = (req, res) => {
    getAllProducts()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({msg: 'not found'})
    })
}