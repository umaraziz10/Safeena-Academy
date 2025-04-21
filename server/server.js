const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const { sequelize } = require('./models');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Root route
app.get('/', (req, res) => {
  res.json({ 'message' : 'HALLO FROM EXPRESS!!!'});
});

// Routes
app.use(routes);

// Test connection to database
sequelize.authenticate()
  .then(() => {
    console.log('Database connected ✅');
  })
  .catch(err => {
    console.error('Database connection error ❌:', err);
  });

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
