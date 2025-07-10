require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const app = express();

const authRoutes = require("./routes/authRoutes.js");
const sessionRoutes = require("./routes/sessionRoutes.js");
const questionRoutes = require("./routes/questionRoutes.js");
const { protect } = require("./middlewares/authMiddleware.js");
const { generateInterviewQuestions, generateConceptExplanation } = require("./controllers/aiController.js");

app.use(express.json());

app.use(
  cors({
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB();


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/session", sessionRoutes);
app.use("/api/questions", questionRoutes);

app.use("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.use("/api/ai/generate-explanation", protect, generateConceptExplanation);

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
