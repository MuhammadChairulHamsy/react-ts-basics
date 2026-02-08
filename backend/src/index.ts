import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import employeeRoute from "./routes/employee.route.js";
import userRoute from "./routes/user.route.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/users", userRoute);
app.use("/employes", employeeRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
