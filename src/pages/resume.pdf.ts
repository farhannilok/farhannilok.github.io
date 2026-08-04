// src/pages/resume.pdf.ts
import fs from "node:fs"
import path from "node:path"

export async function GET() {
  // Read the PDF file directly from your public directory
  const filePath = path.resolve("./src/assets/Farhan_Hasan_Resume.pdf")
  const fileBuffer = fs.readFileSync(filePath)

  return new Response(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      // 'inline' ensures the browser's PDF engine launches instead of initiating a download
      "Content-Disposition": 'inline; filename="Farhan_Hasan_Resume.pdf"',
    },
  })
}
