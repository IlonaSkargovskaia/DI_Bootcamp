import express from 'express';
import { _getAllProducts, _getProduct } from '../controllers/products.js';

const prouter = express.Router();

prouter.get('/', _getAllProducts)
prouter.get('/:id', _getProduct)

export default prouter;