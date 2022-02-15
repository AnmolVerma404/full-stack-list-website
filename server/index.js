import express from "express"; //We can use import instead of require just add - "type":"module" in the package.json
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true })); //Image size upload limit - 30 MB
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); //Image size upload limit - 30 MB
app.use(cors);

app.use("/posts", postRoutes);//Define this after app.use(cors); to not get network error
const CONNECTION_URL =
  "mongodb+srv://anmolDB:anmolDB1710@cluster0.qsmtv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true, //Using these we will not get error
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
