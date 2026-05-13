import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} />,
    h2: (props) => <h2 {...props} />,
    p: (props) => <p {...props} />,
    li: (props) => <li {...props} />,
    ...components,
  };
}
