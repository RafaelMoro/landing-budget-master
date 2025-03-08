import { BLOG_CASHBACK_ROUTE } from "@constants";
import { getExtendedTableContents } from "@helpers/tableContents.helper";
import type { BasicTableContents } from "@interface";

export const tableContentsBasic: BasicTableContents[] = [
  {
    contentId: "cashback-intro",
    anchorId: "title-cashback-intro",
    text: "Cashback: qué es y cómo obtener reembolsos en cada compra",
  },
  {
    contentId: "history-cashback",
    anchorId: "title-history-cashback",
    text: "Del pasado al presente: Cómo evolucionó el cashback",
  },
  {
    contentId: "cashback-types",
    anchorId: "title-cashback-types",
    text: "Tipos de cashback",
  },
  { contentId: "conclusion", anchorId: "title-conclusion", text: "Conclusión" },
];

export const cashbackExtendedTableContents = getExtendedTableContents({
  tableContents: tableContentsBasic,
  route: BLOG_CASHBACK_ROUTE,
});