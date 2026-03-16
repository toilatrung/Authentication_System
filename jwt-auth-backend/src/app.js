import express from "express";
import authRoutes from "#routes/auth.routes";

const app = express();

// Middleware parse JSON body
app.use(express.json());

// Health check route
app.get("/health", (req, res) => {
	res.status(200).json({
		status: "OK",
		message: "Server is running"
	});
});

// Auth routes
app.use("/api/auth", authRoutes);

export default app;
