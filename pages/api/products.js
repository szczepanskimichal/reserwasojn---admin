import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    }
    res.json(await Product.find());
  }

  if (method === "POST") {
    const { title, description, price, images, category, properties } =
      req.body;
    const productDoc = await Product.create({
      title,
      description,
      price,
      images,
      category: category || undefined,
      properties,
    });
    res.json(productDoc);
  }

  if (method === "PUT") {
    const { title, description, price, images, category, properties, _id } =
      req.body;
    await Product.updateOne(
      { _id },
      { title, description, price, images, category, properties }
    );
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Product.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}

// This API route handles CRUD operations for products.
// It first connects to the MongoDB database using the `mongooseConnect` function.
// The route checks the HTTP method of the request using `req.method`.
// If the method is `GET`, the route retrieves products from the database.
// If a product ID is provided in the query string, it returns a single product by ID.
// If no ID is provided, it returns all products.
// If the method is `POST`, the route creates a new product in the database.
// It extracts the product data from the request body and creates a new `Product` document using `Product.create`.
// If the method is `PUT`, the route updates an existing product in the database.
// It extracts the updated product data and ID from the request body and uses `Product.updateOne` to update the product.
// If the method is `DELETE`, the route deletes a product from the database.
// If a product ID is provided in the query string, it deletes the product using `Product.deleteOne`.
// The route sends JSON responses for each operation.
// This API route provides a backend for managing products in the application.
