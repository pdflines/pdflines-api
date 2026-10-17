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

[PDFLines](https://www.pdflines.com) is a free set of 18 PDF tools. You can use them without an account, and outputs have no watermark. The site is available in English, Spanish, Russian and Hindi.

The tools cover merge, split, compress, rotate, organize pages, delete pages, protect and unlock, plus conversions between PDF and Word, PowerPoint, Excel, JPG and PNG.

### How files are handled

- JPG to PDF and PNG to PDF run in your browser when the images are small enough. Larger images are uploaded only if you agree. JPG to PDF also accepts a mix of JPG and PNG files.
- All other tools upload your file over HTTPS to PDFLines servers for processing.
- PDF to Word, PDF to PowerPoint and PDF to Excel use Adobe PDF Services. PDF to Word reads scanned pages with OCR.
- Uploaded working files are deleted when processing finishes. Output files are deleted about one hour after the job.
- Download links expire after 15 minutes.
- Google Analytics loads only if you accept it. PDFLines does not show ads.

See the [privacy policy](https://www.pdflines.com/privacy) for details.

## License

See [LICENSE](LICENSE).
