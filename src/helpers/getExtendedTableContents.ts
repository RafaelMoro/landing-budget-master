import type { BasicTableContents, ExtendedTableContents } from "@interface";

interface GetExtendedTableContentsProps {
  tableContents: BasicTableContents[];
  route: string;
}

export const getExtendedTableContents = ({ tableContents, route }: GetExtendedTableContentsProps): ExtendedTableContents[] => {
  return tableContents.map(
    (content) => {
      if (content.subcontent !== undefined && content.subcontent?.length > 0) {
        return {
          ...content,
          href: `${route}#${content.contentId}`,
          subcontent: content.subcontent.map((subcontent) => ({ ...subcontent, href: `${route}#${subcontent.contentId}` }))
        }
      }

      return {
        ...content,
        href: `${route}#${content.contentId}`,
        subcontent: []
      }
    }
  );
} 