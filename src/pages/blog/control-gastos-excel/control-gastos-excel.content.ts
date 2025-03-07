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
    subcontent: [
      { contentId: 'saving-control-expenses', text: 'Control de gastos personales para ahorro', anchorId: 'title-saving-control-expenses' },
      { contentId: 'practical-example', text: 'Ejemplo práctico con un ingreso de $12,000', anchorId: 'title-practical-example' },
    ]
  },
  {
    contentId: "download-template",
    anchorId: "title-download-template",
    text: "Descarga una plantilla gratuita para control de gastos",
    subcontent: [
      { contentId: 'how-obtain-copy', text: '¿Cómo puedo obtener una copia?', anchorId: 'title-how-obtain-copy' },
      { contentId: 'monthly-budget-template', text: 'Presupuesto mensual.', anchorId: 'title-monthly-budget-template' },
      { contentId: 'two-weekly-budget-template', text: 'Presupuesto quincenal.', anchorId: 'title-two-weekly-budget-template' },
      { contentId: 'budget-70-20-10-template', text: 'Planeador de presupuesto 70/20/10.', anchorId: 'title-budget-70-20-10-template' },
    ]
  },
  {
    contentId: "alternatives-excel",
    anchorId: "title-alternatives-excel",
    text: "Alternativas a Excel para gestionar gastos personales",
    subcontent: [
      { contentId: 'budget-master-option', text: 'Budget Master', anchorId: 'title-budget-master-option' },
      { contentId: 'fintonic-option', text: 'Fintonic', anchorId: 'title-fintonic-option' },
      { contentId: 'splitwise-option', text: 'Splitwise', anchorId: 'title-splitwise-option' },
    ]
  },
  { contentId: "conclusion", anchorId: "title-conclusion", text: "Conclusión" },
];

export const extendedTableContentsExpenseControl = getExtendedTableContents({
  tableContents: tableContentsBasic,
  route: BLOG_CONTROL_EXCEL_ROUTE,
});