import { visit } from "unist-util-visit";
import type { Root, Heading, PhrasingContent } from "mdast";
import type { ExtendedRoot, TocNode } from "#/types/remark";

const transformNode = (
  node: Heading,
  value: string,
  output: TocNode[],
  indexMap: {
    [key: number]: TocNode;
  }
) => {
  const transformedNode = {
    value: value,
    depth: node.depth,
    data: node.data,
    children: [],
  };

  if (node.depth === 1) {
    output.push(transformedNode);
    indexMap[node.depth] = transformedNode;
  } else {
    const parent = indexMap[node.depth - 1];
    if (parent) {
      parent.children.push(transformedNode);
      indexMap[node.depth] = transformedNode;
    }
  }
};

const getHeadings = (tree: Root) => {
  const output: TocNode[] = [];
  const indexMap = {};
  visit(tree, "heading", (node) => {
    const childrenText = (function getChildrenText(
      children: PhrasingContent[]
    ): string {
      return children.reduce((acc, child) => {
        if ("value" in child) {
          return acc + child.value;
        }
        if ("children" in child) {
          return acc + getChildrenText(child.children);
        }
        return acc;
      }, "");
    })(node.children);

    node.data = node.data || {
      hProperties: {
        id: encodeURIComponent(childrenText.toLowerCase()),
      },
    };

    transformNode(node, childrenText, output, indexMap);
  });

  tree.data = { toc: output };
  return tree as ExtendedRoot;
};

export const remarkToc = () => {
  return (root: Root) => getHeadings(root);
};
