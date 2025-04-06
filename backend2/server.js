const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded images

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const postRoutes = require("./routes/postRoutes");
app.use("/real-estate", postRoutes);
app.use("/vehicles", postRoutes);
app.use("/jobs", postRoutes);
app.use("/services", postRoutes);
app.use("/electronics", postRoutes);
app.use("/fashion", postRoutes);
app.use("/home-furniture", postRoutes);
app.use("/pets", postRoutes);
app.use("/hobbies", postRoutes);
app.use("/health-beauty", postRoutes);
app.use("/baby-kids", postRoutes);
app.use("/freelance", postRoutes);
app.use("/community", postRoutes);
app.use("/miscellaneous", postRoutes);










app.listen(5000, () => console.log("Server running on port 5000"));
