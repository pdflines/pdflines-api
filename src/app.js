const express = require('express');
const morgan = require('morgan');
const crypto = require('crypto');
require('dotenv').config();

const { pdfRoutes, healthRoutes } = require('./routes');

const app = express();

// Request ID middleware
app.use((req, res, next) => {
  req.id = crypto.randomUUID();
  res.setHeader('X-Request-ID', req.id);
  next();
});

// Logging
app.use(morgan('combined'));

// JSON parsing
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/health', healthRoutes);
app.use('/', pdfRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: 'The requested endpoint does not exist'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: 'Something went wrong on the server'
  });
});

module.exports = app;