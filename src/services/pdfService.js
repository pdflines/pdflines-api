// PDF processing service
// Mock implementations for demo purposes

const mergePdfs = async (files) => {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, Math.random() * 200 + 100));

  const processingTime = `${Math.floor(Math.random() * 200 + 100)}ms`;

  return {
    output: 'merged.pdf',
    processingTime,
    fileCount: files.length,
    totalPages: files.length * 10
  };
};

const splitPdf = async (file, pages) => {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, Math.random() * 150 + 50));

  const processingTime = `${Math.floor(Math.random() * 150 + 50)}ms`;
  const outputFiles = pages.map(page => `page${page}.pdf`);

  return {
    output: outputFiles,
    processingTime,
    pagesExtracted: pages.length,
    originalFile: file
  };
};

module.exports = {
  mergePdfs,
  splitPdf
};