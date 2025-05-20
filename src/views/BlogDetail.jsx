import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ButtonPrimary from '../components/ButtonPrimary';
import '../styles/blog-detail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id.toString() === id);

  if (!post) {
    return <p className="blog-detail__notfound">Artículo no encontrado.</p>;
  }

  return (
    <div className="blog-detail">
     
      <div className="blog-detail__content">
        <h2 className="blog-detail__title">{post.title}</h2>
        <p className="blog-detail__meta">
          Por {post.author} • {new Date(post.date).toLocaleDateString()}
        </p>
        <p className="blog-detail__text">{post.content}</p>
        <ButtonPrimary onClick={() => navigate('/blog')}>Volver</ButtonPrimary>
      </div>
      
    </div>
  );
};

export default BlogDetail;
