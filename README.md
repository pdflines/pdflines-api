# PDFLines API

## ⚠️ Public Demo Project

**This is a SAFE PUBLIC DEMO project** designed to showcase a production-style Node.js Express backend architecture. It contains:
- ✅ No real secrets or API keys
- ✅ No production integrations or external services
- ✅ Mock-only PDF processing operations
- ✅ Safe for public GitHub repositories and Trust & Safety reviews

## Purpose

This project serves as a demonstration backend for PDFLines, a hypothetical SaaS platform for PDF processing operations. It implements clean architecture principles with modular routing, controllers, and services to illustrate best practices for building scalable Node.js APIs.

The API provides mock implementations of common PDF operations (merge, split) that simulate real processing without any actual file manipulation or external dependencies.

## Overview

This project demonstrates a production-style Express.js backend with clean architecture principles, including:
- Modular routing, controllers, and services
- Request logging and validation
- Mock PDF processing endpoints
- Professional project structure
- Comprehensive error handling

## Features

- **POST /merge**: Mock PDF merging functionality
- **POST /split**: Mock PDF splitting functionality
- **GET /health**: Health check endpoint
- **GET /version**: API version information
- Clean architecture with separation of concerns
- Request logging with Morgan
- Input validation with express-validator
- Request ID tracking for debugging
- Comprehensive error handling

## Project Structure

```
src/
├── routes/          # Route definitions
├── controllers/     # Request handlers
├── services/        # Business logic (mock implementations)
├── app.js          # Express app configuration
└── server.js       # Server startup
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment file:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## API Documentation

### Base URL
```
http://localhost:3000
```

### Endpoints

#### Health Check
Returns the current status of the API service.

```http
GET /health
```

**Response (200 OK):**
```json
{
  "status": "ok",
  "timestamp": "2023-12-01T12:00:00.000Z",
  "service": "PDFLines API",
  "version": "1.0.0"
}
```

#### Get Version
Returns version information about the API.

```http
GET /version
```

**Response (200 OK):**
```json
{
  "version": "1.0.0",
  "name": "pdflines-api",
  "description": "Demo backend API for PDFLines",
  "environment": "development"
}
```

#### Merge PDFs
Combines multiple PDF files into a single document.

```http
POST /merge
Content-Type: application/json

{
  "files": ["document1.pdf", "document2.pdf", "document3.pdf"]
}
```

**Request Body:**
- `files` (array of strings, required): Array of PDF filenames to merge (minimum 2 files)

**Response (200 OK):**
```json
{
  "message": "PDFs merged successfully",
  "output": "merged.pdf",
  "processingTime": "150ms",
  "fileCount": 3,
  "totalPages": 30
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Validation failed",
  "details": [
    {
      "msg": "Files must be an array with at least 2 items",
      "param": "files",
      "location": "body"
    }
  ]
}
```

#### Split PDF
Extracts specific pages from a PDF file into separate documents.

```http
POST /split
Content-Type: application/json

{
  "file": "input.pdf",
  "pages": [1, 3, 5, 7]
}
```

**Request Body:**
- `file` (string, required): Name of the PDF file to split
- `pages` (array of integers, required): Array of page numbers to extract (minimum 1 page)

**Response (200 OK):**
```json
{
  "message": "PDF split successfully",
  "output": ["page1.pdf", "page3.pdf", "page5.pdf", "page7.pdf"],
  "processingTime": "120ms",
  "pagesExtracted": 4,
  "originalFile": "input.pdf"
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Validation failed",
  "details": [
    {
      "msg": "Each page must be a positive integer",
      "param": "pages.0",
      "location": "body"
    }
  ]
}
```

## Architecture

This project follows clean architecture principles:

- **Routes**: Define API endpoints and delegate to controllers
- **Controllers**: Handle HTTP requests, perform validation, and call services
- **Services**: Contain business logic (mocked for this demo)
- **App.js**: Configures Express middleware and routes
- **Server.js**: Starts the HTTP server

## Technologies Used

- Node.js
- Express.js
- Morgan (logging)
- express-validator (validation)
- dotenv (environment variables)

## Security Note

This is a demonstration project only. It contains no real PDF processing, secrets, or production integrations. All responses are mocked for illustrative purposes.

## License

MIT