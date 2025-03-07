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

export const getContentIds = ({ tableContents }: { tableContents: ExtendedTableContents[] }) => {
  return tableContents.flatMap((content) => {
    if (content.subcontent !== undefined && content.subcontent.length > 0 ) {
      return [content.contentId, ...content.subcontent.map((subcontent) => subcontent.contentId)]
    }
    return [content.contentId]
  })
}