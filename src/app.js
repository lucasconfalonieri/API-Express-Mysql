import express from "express";
import morgan from "morgan";
import carreraRoutes from "./routes/carrera.routes";

const app = express();
var cors = require('cors');


app.set("port", 4000);

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/carreras", carreraRoutes);

export default app;

