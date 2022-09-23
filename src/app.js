import express from "express";
import morgan from "morgan";
import carreraRoutes from "./routes/carrera.routes";

const app = express();

app.set("port", 3000);

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/carreras", carreraRoutes);

export default app;

