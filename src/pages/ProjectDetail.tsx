import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, LayoutGrid, Globe, Settings2, ShoppingBag } from 'lucide-react';
import SEO from '../components/SEO';

const projects = [
  {
    id: 1,
    category: 'Power Platform',
    title: 'Hub de Gestão Logística 4.0',
    desc: 'Sistema completo de monitoramento de frota e inventário em tempo real para operações nacionais de grande escala.',
    fullDesc: 'Este projeto foi desenvolvido para uma das maiores operadoras logísticas do país. O desafio era centralizar dados de múltiplas fontes legadas em uma única interface intuitiva para gestores de pátio e motoristas.',
    challenge: 'Dados fragmentados em planilhas e sistemas antigos, falta de visibilidade em tempo real e erros manuais constantes na entrada de dados.',
    solution: 'Implementamos um ecossistema Power Platform completo: Power Apps para a interface móvel, Power Automate para orquestração de dados e Power BI para dashboards analíticos.',
    results: ['Redução de 35% no tempo de carregamento', 'Eliminação de 98% dos erros de inventário', 'Acesso instantâneo a KPIs críticos via mobile'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5HMCDY1GQpq_1zTCjpL8KuYhu6F4OrmtXeWUavOA3fyk7q1rs-uCp0yF79mJbRctaJyOXyZ6TruGWwB8pYYSLvMcpyjYv3A6-n8Ro06Il4c-jWCqNwcDWn_gVtqZ_uhf-wlDweIhjfUW-CqcnevvYN4o0vlAonCuemttrGB6wuzv5AvaCD1YakX0ZMEaJeMAWrxSb1iemfw_oUFOMU9G6sFAqVKOe27Aw5O-eQZ7oO9Xptx-iKNNxhNBPqXY80Acu-ndPt7DYONQ',
    icon: <LayoutGrid className="w-12 h-12" />
  },
  {
    id: 2,
    category: 'WordPress',
    title: 'Portal Institucional Venture Capital',
    desc: 'Presença digital de alta performance com foco em autoridade de marca e conversão de investidores institucionais.',
    fullDesc: 'Um portal desenvolvido para uma firma de Venture Capital sediada em São Paulo. O objetivo era transmitir sofisticação, segurança e agilidade, atraindo tanto startups promissoras quanto investidores de alto calibre.',
    challenge: 'Site antigo lento, não responsivo e com design datado que não refletia a modernidade do fundo.',
    solution: 'Desenvolvimento de um tema WordPress exclusivo (headless approach para máxima performance), focado em Core Web Vitals e design minimalista de elite.',
    results: ['Carregamento em menos de 800ms', 'Aumento de 150% no tempo de permanência no site', 'Design premiado por excelência visual'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4JSKuOxg7KMMgWFfsURZFQ6x9eumpzpfBcSAles8N5nPtKbJ7_jrpyqbqA8lYua62wML2cFWqjfUX-EhfxysR0JrdDabRpRm2a-kisld8QcNXqwL9bTTWc5JDfrn0g35Tl84xYsue-C2sqF3UjM7P_otGNymCMEKLS1btw5xNRHsuDwV8VNYuj2CElrvRtiDVHeFQDLAcyOGJH_2ZLtsbNQFId2vAUBtBhwDh3onWUuWshUmcsDhFKyVr2mpbVaAeuKwr9PUaI4A',
    icon: <Globe className="w-12 h-12" />
  }
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  const projectSchema = project ? {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.desc,
    "genre": project.category,
    "image": project.img,
    "author": {
      "@type": "Organization",
      "name": "Retake Tecnologia & Design"
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
            <span className={`text-xs font-black uppercase tracking-widest mb-4 inline-block ${project.category === 'Power Platform' ? 'text-primary' : 'text-tertiary'}`}>
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
                <div className="text-outline/30">{project.icon}</div>
              )}
            </div>
            <div className="mt-8 p-8 glass-panel rounded-2xl border border-white/5">
              <h4 className="font-bold mb-4">Tecnologias Utilizadas</h4>
              <div className="flex flex-wrap gap-2">
                {project.category === 'Power Platform' ? 
                  ['Power Apps', 'Power Automate', 'Dataverse', 'Power BI'].map(t => <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">{t}</span>) :
                  ['WordPress', 'React', 'Tailwind CSS', 'Headless CMS'].map(t => <span key={t} className="px-3 py-1 bg-tertiary/10 text-tertiary text-xs font-bold rounded-full">{t}</span>)
                }
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
