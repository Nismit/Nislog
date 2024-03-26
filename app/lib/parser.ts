import { remark } from "remark";
import remarkGfm from "remark-gfm";

const parser = remark().use(remarkGfm);

export const markdownParser = (markdown: string) => {
  const mdAst = parser.parse(markdown);
  return mdAst;
};
