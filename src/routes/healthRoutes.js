const express = require('express');
const router = express.Router();

// GET /health
router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'PDFLines API',
    version: '1.0.0',
    requestId: req.id
  });
});

// GET /version
router.get('/version', (req, res) => {
  res.json({
    version: '1.0.0',
    name: 'pdflines-api',
    description: 'Demo backend API for PDFLines',
    environment: process.env.NODE_ENV || 'development',
    requestId: req.id
  });
});

module.exports = router;