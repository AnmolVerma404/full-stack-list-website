import express from "express";//We can use import instead of require just add - "type":"module" in the package.json
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express;
