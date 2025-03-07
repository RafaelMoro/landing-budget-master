import type { BasicTableContents, ExtendedTableContents } from "@interface";

interface GetExtendedTableContentsProps {
  tableContents: BasicTableContents[];
  route: string;
}

export const getExtendedTableContents = ({ tableContents, route }: GetExtendedTableContentsProps): ExtendedTableContents[] => {
  return tableContents.map(
    (content) => ({
      ...content,
      href: `${route}#${content.contentId}`,
    })
  );
} 