import createHttpError from "http-errors";
import Product from "../models/product.js";

export const addProduct = async (req, res, next) => {
  const { title, description, price } = req.body;
  const pri = parseInt(price);
  try {
    if (!title || !price) {
      throw createHttpError(400, "Please provide required fields");
    }
    if (typeof pri !== "number") {
      throw createHttpError(400, "Price must be a number");
    }
    console.log("before create");
    const newProd = await Product.create({
      title,
      description,
      price: pri,
    });
    res.status(201).json(newProd);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};
export const getSingleProducts = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};
export const updateProducts = async (req, res, next) => {
  const { id } = req.params;
  const {title, description, price} = req.body

  try {
    const product = await Product.findById(id);
    if(!product){
        throw  createHttpError(404, 'No such product')
    }
    product.title = title
    product.description = description
    product.price = price
    await product.save()
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};
export const deleteProducts = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if(!product){
        throw  createHttpError(404, 'No such product')
    }
    res.status(204).json("deleted");
  } catch (err) {
    next(err);
  }
};
