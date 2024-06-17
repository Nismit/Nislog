import type {
  Root,
  RootData,
  HeadingData,
  FootnoteDefinition,
  Parent,
} from "mdast";

export interface HeadingProperties extends HeadingData {
  hProperties?: {
    id?: string;
  };
}

interface ExtendedRootData extends RootData {
  toc?: TocNode[];
  footnotes?: FootnotesParentNode;
}

export interface ExtendedRoot extends Root {
  data: ExtendedRootData;
}

export type TocNode = {
  value: string;
  depth: number;
  data: any;
  children: TocNode[];
};

export interface FootnotesParentNode extends Parent {
  type: "footnotesParent";
  children: FootnoteDefinition[];
}
