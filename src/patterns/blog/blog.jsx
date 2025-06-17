import React from 'react';
import Section from '@/components/section/section';
import BlogCard from '@/components/cards/blogCard/blogCard';
import blog from '@/data/blog/blog.js';

export default function Blog() {
    return (
      <Section title={"Meus Pensamentos"} isAnimated={true}>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
          {blog.map(article => (
            <BlogCard 
            key={article.id}
                link={`/blog/${article.id}`}
                title={article.title}
                description={article.description}
                image={article.image}
                />))
            }
        </div>
        </Section>
    )
}