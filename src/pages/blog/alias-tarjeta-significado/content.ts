import { BLOG_ALIAS_CARD_ARTICLE_ROUTE } from "@constants";
import type { BasicTableContents, ExtendedTableContents } from "@interface";

export const tableContentsBasic: BasicTableContents[] = [
  {
    contentId: "card-alias",
    anchorId: "title-card-alias",
    text: "Alias de la Tarjeta: Qué Es, Para Qué Sirve y Cómo Usarlo",
  },
  {
    contentId: "security-benefits",
    anchorId: "title-security-benefits",
    text: "Beneficios y seguridad al usar un alias en tu tarjeta",
  },
  {
    contentId: "alias-examples",
    anchorId: "title-alias-examples",
    text: "Ejemplos de alias efectivos y cuáles evitar",
  },
  {
    contentId: "common-errors",
    anchorId: "title-common-errors",
    text: "Errores comunes al elegir un alias y cómo evitarlos",
  },
  { contentId: "conclusion", anchorId: "title-conclusion", text: "Conclusión" },
];

export const extendedTableContents: ExtendedTableContents[] = tableContentsBasic.map(
  (content) => ({
    ...content,
    href: `${BLOG_ALIAS_CARD_ARTICLE_ROUTE}#${content.contentId}`,
  })
);