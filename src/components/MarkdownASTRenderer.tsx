import { FC, Fragment } from "hono/jsx";
import { RootContent, RootContentMap } from "mdast";

type Props = {
  nodes: RootContent[];
};

export const MarkdownASTRenderer: FC<Props> = ({ nodes }) => {
  const res = nodes.map((node, index) => {
    switch (node.type) {
      case "text": {
        return <Text key={`${index}`} node={node} />;
      }
      case "paragraph": {
        return <Paragraph key={index} node={node} />;
      }
      default: {
        return <div key={index}>node: {node.type}</div>;
      }
    }
  });

  return <Fragment>{res}</Fragment>;
};

const Text = ({
  node,
  key,
}: {
  node: RootContentMap["text"];
  key?: string;
}) => {
  return <Fragment key={key}>{node.value}</Fragment>;
};

const Paragraph = ({
  node,
  key,
}: {
  node: RootContentMap["paragraph"];
  key: string | number;
}) => {
  return (
    <p key={key}>
      <MarkdownASTRenderer nodes={node.children} />
    </p>
  );
};
