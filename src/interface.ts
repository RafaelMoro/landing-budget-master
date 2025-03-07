export interface Subcontent {
  contentId: string;
  anchorId: string;
  text: string;
}

export interface SubcontentExtended extends Subcontent {
  href: string;
}

export interface BasicTableContents {
  contentId: string;
  anchorId: string;
  text: string;
  subcontent?: Subcontent[];
}

export interface ExtendedTableContents extends Omit<BasicTableContents, 'subcontent'> {
  href: string;
  subcontent?: SubcontentExtended[];
}