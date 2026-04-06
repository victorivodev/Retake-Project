import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Globe, Settings2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface Project {
  id: number;
  category: string;
  title: string;
  desc: string;
  img: string | null;
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid className="w-12 h-12" />,
  Globe: <Globe className="w-12 h-12" />,
  Settings2: <Settings2 className="w-12 h-12" />,
  ShoppingBag: <ShoppingBag className="w-12 h-12" />
};

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('Todos');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('data/projects.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error('Erro ao carregar portfólio:', err);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  if (loading) {
    return <div className="pt-40 pb-20 text-center text-on-surface-variant">Carregando portfólio...</div>;
  }

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://ais-pre-lxf34zc4gd2r3ldgl2zwbx-199811131034.us-east1.run.app/portfolio/${p.id}`,
      "name": p.title
    }))
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <SEO 
        title="Portfólio de Projetos"
        description="Confira nossos estudos de caso em Power Platform e WordPress. Soluções reais para desafios complexos de logística, finanças e e-commerce."
        canonical="/portfolio"
        schema={portfolioSchema}
      />
      <section className="relative py-24 flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl z-10">
          <span className="inline-block px-4 py-1 mb-6 border border-primary/20 bg-primary/5 rounded-full text-xs font-bold uppercase tracking-widest text-primary">Portfólio</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-6">
            Nosso <span className="text-primary">Portfólio</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">
            Uma seleção de projetos que demonstram nossa capacidade técnica e compromisso com resultados em Power Apps e WordPress.
          </p>
        </div>
      </section>

      <section className="pb-32 px-8 max-w-7xl mx-auto">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 pb-6 border-b border-white/5">
          <div className="flex gap-4">
            {['Todos', 'Power Platform', 'WordPress'].map((f) => (
              <motion.button
                key={f}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(f)}
                className={`text-sm font-bold transition-all pb-1 border-b-2 ${
                  filter === f ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-white'
                }`}
              >
                {f}
              </motion.button>
            ))}
          </div>
          <div className="text-on-surface-variant text-xs font-medium uppercase tracking-widest">
            {filteredProjects.length} Projetos Selecionados
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link to={`/portfolio/${project.id}`} className="group block">
                    <div className="aspect-video overflow-hidden rounded-xl bg-surface-container-low mb-6 border border-white/5 flex items-center justify-center relative">
                      {project.img ? (
                        <img 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" 
                          src={project.img} 
                          alt={project.title}
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full bg-surface-container flex items-center justify-center rounded-lg text-outline">
                          {iconMap[project.icon] || <LayoutGrid className="w-12 h-12" />}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-background px-4 py-2 rounded font-bold text-xs uppercase tracking-widest">Ver Estudo de Caso</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className={`text-[10px] font-black uppercase tracking-widest ${project.category === 'Power Apps' || project.category === 'Power Platform' ? 'text-primary' : 'text-tertiary'}`}>
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed max-w-lg">{project.desc}</p>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-on-surface-variant">
                Nenhum projeto encontrado nesta categoria.
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-6">Pronto para o próximo projeto?</h2>
          <p className="text-on-surface-variant text-lg mb-10">Entre em contato e descubra como podemos ajudar sua empresa a evoluir tecnologicamente.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contato" className="inline-block px-8 py-4 bg-primary text-background font-bold rounded transition-all">Iniciar Projeto</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contato" className="inline-block px-8 py-4 bg-transparent border border-outline text-on-surface font-bold rounded hover:bg-white/5 transition-all">Ver Contato</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
