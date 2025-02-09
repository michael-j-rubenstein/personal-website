import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      ["remark-slug", { strict: true, throwOnError: true }],
      ["remark-toc", { strict: true, throwOnError: true }],
    ],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
