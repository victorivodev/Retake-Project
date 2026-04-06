import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const posts = [
  {
    id: 1,
    title: 'Por que a Power Platform é o futuro da automação corporativa?',
    excerpt: 'Descubra como empresas de todos os tamanhos estão economizando milhares de horas com aplicativos internos e automação inteligente.',
    date: '15 Mar 2026',
    author: 'Victor Ivo',
    readTime: '5 min',
    category: 'Tecnologia',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3xXvWC3RYwtKTx_a8TBQoOvuauZM1j7q6Vl1qzF0OqOTF2uEqWeo69tijwNJcuMt8YbX3eQVmyNcH_Fbx1Fm0erJ6XdIMSkzwQvktH2ICDtHf2xwdvtRPuYL2FHKC21y0h4FFlHCJ-5Xo_spxcfg4PAIxeog0siZ14wfdvuMDNhk0hY4P5MXXkBDtbcai6a1L1dO2xXOyO6vbNP2pFbZKShIRuV02bkT9mvDVUUa1hjeFgdFOA2Ui0rMGGchaD40wvjkGS7ty_80'
  },
  {
    id: 2,
    title: 'WordPress vs. Outras Plataformas: O que realmente importa para a performance?',
    excerpt: 'Analisamos os Core Web Vitals e como o WordPress de alta performance pode ser a chave para o seu ranking no Google.',
    date: '10 Mar 2026',
    author: 'Victor Ivo',
    readTime: '7 min',
    category: 'Design & Web',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3JK6pbbpO-ZdeCpLY4_Ya-yTyAp4KzTNlVHPkqyDuM9funlDC2lrBfYx6zT2zRvCb2klx-pdZOZ1DasuEQpaTvD9j-MLdpYWleDLwK2bVrxuPbSxbgiIOP6WImQtPPjw4j4P5at5ULTM67XJLZCJ5HifoQyY_pW_MgP6EcoEYdTzRA9iokQtVU19XTH7lSzstwlIZ0Wh3jpq-GqmpmhrBExd5c76xVA-aypcfhXDprkOllKLv1KnukIuMjvjuvqQeCPhe5m42bOA'
  }
];

export default function Blog() {
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
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-6">
            Insights & <span className="text-primary">Tecnologia</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">
            Nossa visão sobre o futuro do desenvolvimento digital, automação e design de alta performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
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
          ))}
        </div>
      </div>
    </motion.div>
  );
}
