
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PDF from "./assets/document.pdf";
import "./App.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const App = () => (
  <Document file={PDF} onContextMenu={(e) => e.preventDefault()} className="pdf-container">
    <Page pageNumber={100} />
  </Document>
);

export default App;