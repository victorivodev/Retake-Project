import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  img: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch('data/posts.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error('Erro ao carregar blog:', err);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  if (loading) {
    return <div className="pt-40 pb-20 text-center text-on-surface-variant">Carregando artigos...</div>;
  }
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Retake Tecnologia",
    "description": "Insights sobre o futuro do desenvolvimento digital, automação e design de alta performance.",
    "publisher": {
      "@type": "Organization",
      "name": "Retake Tecnologia & Design"
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
        title="Blog & Insights"
        description="Fique por dentro das últimas tendências em Power Platform, automação corporativa e WordPress de alta performance."
        canonical="/blog"
        schema={blogSchema}
      />
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 mb-6 border border-primary/20 bg-primary/5 rounded-full text-xs font-bold uppercase tracking-widest text-primary">Blog & Insights</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-6">
            Insights & <span className="text-primary">Tecnologia</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">
            Nossa visão sobre o futuro do desenvolvimento digital, automação e design de alta performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-surface-container-low rounded-2xl border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-background text-[10px] font-black uppercase tracking-widest rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary font-bold text-sm group/link">
                    Ler Artigo Completo <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-on-surface-variant">
              Nenhum artigo encontrado no momento.
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
