import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectMongo from "./database/connect";
import { MONGODB_URI } from "./utils/secrets";
import Router from "./routes";
import { Container } from "typedi";
import { userData, alert } from "./models";

// Create Express server
const app = express();

// Connect to MongoDB
connectMongo(MONGODB_URI);

// Set userData model container
Container.set("model.userData", userData);
// Set alert model container
Container.set("model.alert", alert);

// Register router
Router.configure(app);

// Express configuration
app.set("port", process.env.PORT || 3500);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

export default app;
