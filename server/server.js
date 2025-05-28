require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');
const { sequelize } = require('./models');
const materialRoutes = require('./routes/materialRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');


// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/materials', materialRoutes);
app.use(cookieParser());

// Root route
app.get('/', (req, res) => {
  res.json({ 'message' : 'Hi ini API Safeena!'});
});

// Routes
app.use(routes);

// 404 Not Found handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Test connection to database
sequelize.authenticate()
  .then(() => {
    console.log('Database Successfully Connected ');
  })
  .catch(err => {
    console.error('Database Connection Error:', err);
  });

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

