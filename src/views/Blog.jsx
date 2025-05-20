import React from 'react';
import { blogPosts } from '../data/blogPosts';
import BlogPostCard from '../components/BlogPostCard';
import '../styles/blog.css';

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog__content">
        <h2 className="blog__title">Relatos y artículos</h2>
        <div className="blog__list">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
