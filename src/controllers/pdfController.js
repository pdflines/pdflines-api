const { validationResult } = require('express-validator');
const pdfService = require('../services/pdfService');

// Handle PDF merge requests
const mergePdfs = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors.array(),
        requestId: req.id
      });
    }

    const { files } = req.body;
    const result = await pdfService.mergePdfs(files);

    res.json({
      message: 'PDFs merged successfully',
      requestId: req.id,
      ...result
    });
  } catch (error) {
    console.error('Error in mergePdfs:', error);
    res.status(500).json({
      error: 'Merge failed',
      message: 'Something went wrong merging PDFs',
      requestId: req.id
    });
  }
};

// Handle PDF split requests
const splitPdf = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors.array(),
        requestId: req.id
      });
    }

    const { file, pages } = req.body;
    const result = await pdfService.splitPdf(file, pages);

    res.json({
      message: 'PDF split successfully',
      requestId: req.id,
      ...result
    });
  } catch (error) {
    console.error('Error in splitPdf:', error);
    res.status(500).json({
      error: 'Split failed',
      message: 'Something went wrong splitting PDF',
      requestId: req.id
    });
  }
};

module.exports = {
  mergePdfs,
  splitPdf
};