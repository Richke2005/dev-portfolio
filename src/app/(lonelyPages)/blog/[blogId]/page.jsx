import React from "react";
import blog from "@/data/blog/blog.js";
import Article from "@/components/article/article.jsx";
import RightContent from "@/components/rightContent/rightContent";

export default  async function BlogPage({ params }) {
  const { blogId } = await params;
  
  const blogPost = fetchBlogData(Number(blogId));

    function fetchBlogData(blogId){
        return blog.find(post => post.id === blogId);
    }

  return (
    <RightContent>
      {blogPost ? (
            <Article
            {...blogPost} // Spread the blogPost object to pass its properties as props
            />
        ) : (
            <p>Blog post not found.</p>
        )}
    </RightContent>
  );
}