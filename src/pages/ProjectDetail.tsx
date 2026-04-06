import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, LayoutGrid, Globe, Settings2, ShoppingBag } from 'lucide-react';
import SEO from '../components/SEO';

interface Project {
  id: number;
  category: string;
  title: string;
  desc: string;
  fullDesc: string;
  challenge: string;
  solution: string;
  results: string[];
  img: string | null;
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid className="w-12 h-12" />,
  Globe: <Globe className="w-12 h-12" />,
  Settings2: <Settings2 className="w-12 h-12" />,
  ShoppingBag: <ShoppingBag className="w-12 h-12" />
};

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const response = await fetch('../data/projects.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const found = data.find((p: any) => p.id === Number(id));
        setProject(found || null);
      } catch (err) {
        console.error('Erro ao carregar projeto:', err);
      } finally {
        setLoading(false);
      }
    };
    loadProject();
  }, [id]);

  if (loading) {
    return <div className="pt-40 pb-20 text-center text-on-surface-variant">Carregando detalhes do projeto...</div>;
  }

  const projectSchema = project ? {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.desc,
    "genre": project.category,
    "image": project.img,
    "author": {
      "@type": "Organization",
      "name": "Retake | Tecnologia & Design"
    }
  } : undefined;

  if (!project) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-8">Projeto não encontrado</h1>
        <Link to="/portfolio" className="text-primary hover:underline">Voltar ao Portfólio</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <SEO 
        title={project.title}
        description={project.desc}
        canonical={`/portfolio/${project.id}`}
        ogType="article"
        ogImage={project.img || undefined}
        schema={projectSchema}
      />
      <div className="max-w-7xl mx-auto px-8">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-12 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Voltar ao Portfólio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className={`inline-block px-4 py-1 mb-6 border rounded-full text-xs font-bold uppercase tracking-widest ${project.category === 'Power Platform' ? 'border-primary/20 bg-primary/5 text-primary' : 'border-tertiary/20 bg-tertiary/5 text-tertiary'}`}>
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-on-surface mb-8 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">
              {project.fullDesc}
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">O Desafio</h3>
                <p className="text-on-surface-variant leading-relaxed">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">Nossa Solução</h3>
                <p className="text-on-surface-variant leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">Resultados de Impacto</h3>
                <ul className="space-y-4">
                  {project.results.map((res, i) => (
                    <li key={i} className="flex items-center gap-3 text-on-surface-variant">
                      <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" /> {res}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="sticky top-32"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface-container-low flex items-center justify-center">
              {project.img ? (
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                <div className="text-outline/30">{iconMap[project.icon] || <LayoutGrid className="w-12 h-12" />}</div>
              )}
            </div>
            <div className="mt-8 p-8 glass-panel rounded-2xl border border-white/5">
              <h4 className="font-bold mb-4">Tecnologias Utilizadas</h4>
              <div className="flex flex-wrap gap-2">
                {project.category === 'Power Platform' ? 
                  ['Power Apps', 'Power Automate', 'Dataverse', 'Power BI'].map(t => <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">{t}</span>) :
                  ['WordPress', 'Elementor', 'CSS', 'JavaScript'].map(t => <span key={t} className="px-3 py-1 bg-tertiary/10 text-tertiary text-xs font-bold rounded-full">{t}</span>)
                }
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
