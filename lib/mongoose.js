import mongoose from "mongoose";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri = process.env.MONGODB_URI;
    return mongoose.connect(uri);
  }
}
// This module handles the connection to the MongoDB database using Mongoose.
// The `mongooseConnect` function checks if there is already an active connection.
// If there is an active connection (readyState === 1), it returns the existing connection as a promise.
// If there is no active connection, it retrieves the MongoDB URI from the environment variables
// and establishes a new connection using `mongoose.connect(uri)`.
