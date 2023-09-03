import mongoose from "mongoose"

const ProductSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    price: {type: Number, required: true}
})

const Product = mongoose.model("products", ProductSchema)
export default  Product