import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  img: string;
}

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const response = await fetch('../data/posts.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const found = data.find((p: any) => p.id === Number(id));
        setPost(found || null);
      } catch (err) {
        console.error('Erro ao carregar post:', err);
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, [id]);

  if (loading) {
    return <div className="pt-40 pb-20 text-center text-on-surface-variant">Carregando artigo...</div>;
  }

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-8">Artigo não encontrado</h1>
        <Link to="/blog" className="text-primary hover:underline">Voltar ao Blog</Link>
      </div>
    );
  }

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.img,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.id}`}
        ogType="article"
        ogImage={post.img}
        schema={postSchema}
      />
      <div className="max-w-4xl mx-auto px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-12 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Voltar ao Blog
        </Link>

        <header className="mb-12">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded mb-6">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-on-surface mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-on-surface-variant">
            <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime} de leitura</span>
          </div>
        </header>

        <div className="aspect-video rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>

        <div className="markdown-body prose prose-invert prose-primary max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </motion.div>
  );
}
