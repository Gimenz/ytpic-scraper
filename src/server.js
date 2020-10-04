import express from "express";
import routes from "./routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(routes);
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
