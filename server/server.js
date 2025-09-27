const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database setup
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("❌ Error opening database: " + err.message);
  } else {
    console.log("✅ Connected to SQLite database.");

    // Create table if not exists
    db.run(
      `CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        message TEXT
      )`,
      (err) => {
        if (err) {
          console.error("❌ Error creating table: " + err.message);
        } else {
          console.log("✅ Bookings table ready.");
        }
      }
    );
  }
});

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Backend running successfully!");
});

// Save booking (from your form)
app.post("/api/bookings", (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Please fill all required fields." });
  }

  db.run(
    `INSERT INTO bookings (name, email, phone, message) VALUES (?, ?, ?, ?)`,
    [name, email, phone, message],
    function (err) {
      if (err) {
        console.error("❌ Error inserting booking:", err.message);
        return res.status(500).json({ error: "Database error." });
      }
      res.json({ success: true, id: this.lastID });
    }
  );
});

// Get all bookings (for testing)
app.get("/api/bookings", (req, res) => {
  db.all("SELECT * FROM bookings", [], (err, rows) => {
    if (err) {
      console.error("❌ Error fetching bookings:", err.message);
      return res.status(500).json({ error: "Database error." });
    }
    res.json(rows);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
