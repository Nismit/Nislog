import type { Root, RootData, HeadingData } from "mdast";

export interface HeadingProperties extends HeadingData {
  hProperties?: {
    id?: string;
  };
}

interface ExtendedRootData extends RootData {
  toc?: TocNode[];
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
