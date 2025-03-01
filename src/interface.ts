export interface BasicTableContents {
  contentId: string;
  anchorId: string;
  text: string;
}

export interface ExtendedTableContents extends BasicTableContents {
  href: string;
}