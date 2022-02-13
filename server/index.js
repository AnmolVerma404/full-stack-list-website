import express from "express"; //We can use import instead of require just add - "type":"module" in the package.json
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true })); //Image size upload limit - 30 MB
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); //Image size upload limit - 30 MB
app.use(cors);

const CONNECTION_URL =
  "mongodb+srv://anmolDB:<password>@cluster0.qsmtv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
