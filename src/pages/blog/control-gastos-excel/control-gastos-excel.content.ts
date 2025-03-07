import { BLOG_CONTROL_EXCEL_ROUTE } from "@constants";
import { getExtendedTableContents } from "@helpers/getExtendedTableContents";
import type { BasicTableContents } from "@interface";

export const tableContentsBasic: BasicTableContents[] = [
  {
    contentId: "introduction",
    anchorId: "title-introduction",
    text: "Introducción",
  },
  {
    contentId: "real-example",
    anchorId: "title-real-example",
    text: "Ejemplo real: Cómo usar un control de gastos en Excel en el día a día",
  },
  {
    contentId: "download-template",
    anchorId: "title-download-template",
    text: "Descarga una plantilla gratuita para control de gastos",
  },
  {
    contentId: "alternatives-excel",
    anchorId: "title-alternatives-excel",
    text: "Alternativas a Excel para gestionar gastos personales",
  },
  { contentId: "conclusion", anchorId: "title-conclusion", text: "Conclusión" },
];

export const extendedTableContents = getExtendedTableContents({
  tableContents: tableContentsBasic,
  route: BLOG_CONTROL_EXCEL_ROUTE,
});