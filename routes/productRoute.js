import * as ProductController from "../controllers/productController.js"
import express from 'express'
const router = express.Router()

console.log("jerrymiah");
router.post('/products', ProductController.addProduct )
router.get('/products', ProductController.getProducts )
router.get('/products/:id', ProductController.getSingleProducts )
router.patch('/products/:id', ProductController.updateProducts )
router.delete('/products/:id', ProductController.deleteProducts )

export default router