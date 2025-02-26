import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    images: [{ type: String }],
    category: { type: mongoose.Types.ObjectId, ref: "Category" },
    properties: { type: Object },
  },
  {
    timestamps: true,
  }
);

export const Product = models.Product || model("Product", ProductSchema);

// This module defines the Mongoose schema and model for a Product.
// The `productSchema` defines the structure of the Product document with the following fields:
// - `title`: a required string representing the product's title.
// - `description`: an optional string for the product's description.
// - `price`: a required number representing the product's price.
// - `images`: an array of strings representing the URLs of the product's images.
// - `category`: a reference to the Category model, represented by a MongoDB ObjectId.
// - `properties`: an object to store additional properties of the product.
// The schema also includes timestamps, which automatically add `createdAt` and `updatedAt` fields to the documents.
// The model is exported as `Product`, and if it already exists in the `models` collection, it reuses the existing model.
// However, to display a product, it must first be created!!!
// I need API for that!!!
