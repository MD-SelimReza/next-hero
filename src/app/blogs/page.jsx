import { Headland_One } from "next/font/google";
const headland = Headland_One({ weight: ["400"], subsets: ["latin"] });
import BlogContents from "@/components/BlogContents";
import React from "react";
export const metadata = {
  title: "Blogs",
  description: "Blogs Page",
};

const BlogsPage = () => {
  return (
    <div className={headland.className}>
      <BlogContents />
    </div>
  );
};

export default BlogsPage;
