
const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to my Express Lab!");
});

// About route
app.get("/about", (req, res) => {
    res.json({
        name: "Naveen",
        section: "CSE"
    });
});

// Time route
app.get("/time", (req, res) => {
    res.send(new Date().toString());
});

// Contact route (optional)
app.get("/contact", (req, res) => {
    res.send("This is the Contact page.");
});

// 404 handler for unknown routes
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
