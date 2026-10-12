# pdflines-api

This repository is a small Express sample. The API that runs [PDFLines](https://www.pdflines.com) is a separate private codebase.

`POST /merge` and `POST /split` take JSON and return sample JSON. Those routes do not open or convert PDF files. `GET /health` and `GET /version` return status JSON.

```bash
npm install
cp .env.example .env
npm run dev
```

The sample server listens on port 3000.

## The live product

[PDFLines](https://www.pdflines.com) is a free set of PDF tools. You can use them without an account.

JPG and PNG to PDF run in the browser. The other tools upload files to PDFLines servers. PDF to Word uses Adobe PDF Services, and scanned pages are read with OCR.

Uploaded files are deleted after processing. Output files are kept for about 1 hour. Backup copies are removed within 2 hours. Download links expire after 15 minutes.

Google Analytics loads only after you accept it. PDFLines does not show ads.

## License

See [LICENSE](LICENSE).
