import { remark } from "remark";
import remarkGfm from "remark-gfm";
import { remarkToc, remarkGfmFootnote } from "./plugin";

const parser = remark().use(remarkGfm).use(remarkToc).use(remarkGfmFootnote);

export const markdownParser = async (markdown: string) => {
  const mdAst = parser.parse(markdown);
  const rootContent = await parser.run(mdAst);
  return rootContent;
};
