const express = require('express');
const { body, validationResult } = require('express-validator');
const pdfController = require('../controllers/pdfController');

const router = express.Router();

// Validation for merge
const mergeValidation = [
  body('files')
    .isArray({ min: 2 })
    .withMessage('At least 2 PDF files are required for merging'),
  body('files.*')
    .isString()
    .notEmpty()
    .withMessage('Each file name must be a non-empty string')
];

// Validation for split
const splitValidation = [
  body('file')
    .isString()
    .notEmpty()
    .withMessage('Source PDF file name is required'),
  body('pages')
    .isArray({ min: 1 })
    .withMessage('At least 1 page number is required for splitting'),
  body('pages.*')
    .isInt({ min: 1 })
    .withMessage('Page numbers must be positive integers (starting from 1)')
];

// POST /merge
router.post('/merge', mergeValidation, pdfController.mergePdfs);

// POST /split
router.post('/split', splitValidation, pdfController.splitPdf);

module.exports = router;