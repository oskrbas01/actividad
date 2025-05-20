import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonPrimary from './ButtonPrimary';
import '../styles/blog-post-card.css';

const BlogPostCard = ({ post }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <div className="blog-post">
      <h3 className="blog-post__title">{post.title}</h3>
      <p className="blog-post__meta">
        Por {post.author} • {new Date(post.date).toLocaleDateString()}
      </p>
      <p className="blog-post__summary">{post.summary}</p>
      <ButtonPrimary onClick={handleReadMore}>
        Leer más
      </ButtonPrimary>
    </div>
  );
};

export default BlogPostCard;
