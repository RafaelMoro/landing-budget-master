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

export const getContentsIds = ({ tableContents }: { tableContents: ExtendedTableContents[]}): (Element | null)[] => {
  return tableContents.flatMap((content) => {
    if (
      content.subcontent !== undefined &&
      content.subcontent?.length > 0
    ) {
      return content.subcontent.map((subcontent) => {
        return document.querySelector(`#${subcontent.contentId}`) ?? null;
      });
    }
    return document.querySelector(`#${content.contentId}`) ?? null;
  });
}

export const getContentIds = ({ tableContents }: { tableContents: ExtendedTableContents[] }) => {
  return tableContents.flatMap((content) => {
    if (content.subcontent !== undefined && content.subcontent.length > 0 ) {
      return [{ contentId: content.contentId, anchorId: content.anchorId}, ...content.subcontent.map((subcontent) => ({ contentId: subcontent.contentId, anchorId: subcontent.anchorId }))]
    }
    return [{ contentId: content.contentId, anchorId: content.anchorId }]
  })
}