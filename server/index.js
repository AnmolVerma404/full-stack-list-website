import express from "express"; //We can use import instead of require just add - "type":"module" in the package.json
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true })); //Image size upload limit - 30 MB
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); //Image size upload limit - 30 MB
app.use(cors());//But at c2ba31c was here, forgot to add () after cores and some typo mistake in controllers/posts.js

app.use("/posts", postRoutes); //Define this after app.use(cors); to not get network error

app.get('/',(req,res)) // In progress

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
