import Handlebars from 'handlebars';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { cvData } = await req.json();

  // Leer el archivo de plantilla HTML
  const templatePath = path.resolve(process.cwd(), 'src/template/cv-template.html');
  
  // Leer el archivo de plantilla HTML
  const templateHtml = fs.readFileSync(templatePath, 'utf8');


  // Compilar la plantilla con Handlebars
  const template = Handlebars.compile(templateHtml);

  // Renderizar el HTML con los datos del CV
  const htmlContent = template(cvData);

  // Lanzar Puppeteer para generar el PDF
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Cargar el contenido HTML en la página
  await page.setContent(htmlContent);

  // Generar el PDF con márgenes personalizados desde Puppeteer
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20mm', // Márgenes superiores amplios
      bottom: '20mm', // Márgenes inferiores amplios
      left: '15mm', // Márgenes izquierdos más amplios
      right: '15mm', // Márgenes derechos más amplios
    },
  });

  await browser.close();

  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="CV - ${cvData.name}".pdf`,
    },
  });
}