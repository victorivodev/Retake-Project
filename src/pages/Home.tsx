import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Verified, LayoutGrid, Globe as GlobeIcon, CheckCircle2, ArrowRight, Quote, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Fetch blog posts for preview
    fetch('data/posts.json')
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 2)))
      .catch(err => console.error('Erro ao carregar preview do blog:', err));

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const clients = [
    'Saboremio Refeições Coletivas', 
    'NDC', 
    'Idea Remota', 
    'PetDream', 
    'Switches Express', 
    'Enprodes', 
    'Lançamentos Rio de Janeiro', 
    'Instituto Conecte'
  ];

  const nextClient = () => {
    setCurrentClientIndex((prev) => (prev + 1) % clients.length);
  };

  const prevClient = () => {
    setCurrentClientIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Retake Tecnologia & Design",
    "url": "https://ais-pre-lxf34zc4gd2r3ldgl2zwbx-199811131034.us-east1.run.app",
    "logo": "https://ais-pre-lxf34zc4gd2r3ldgl2zwbx-199811131034.us-east1.run.app/logo.png",
    "description": "Especialistas em Power Platform e WordPress de Alta Performance.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-99999-9999",
      "contactType": "customer service"
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <SEO 
        title="Especialistas em Power Platform & WordPress"
        description="A Retake Tecnologia & Design entrega vantagem competitiva através de automação Microsoft Power Platform e ecossistemas web WordPress ultra-rápidos."
        schema={organizationSchema}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background"></div>
          <img 
            className="w-full h-full object-cover opacity-20" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvgh12Jo6Bj43m-KqFKo6zOPoX2_bOpoPq8y_mFqv_PUXYqOurzF92w9J9u91qbACfG_pdj4o-tOdZT-gNpPR-7jDYq2eub7s1loWGpet7C9z4N-WVseFx9JmEzXW2ZJDn3Pkwy_DXtbvMvqxQvtGzj_u-5US1hso8DqVNrlbukZbs9o46hyaNSkDRzYAfjoId3isR8XY6ufVSSY5zndmzt6GVvHBSs-2fUeX1qi_kz6X0kOdxRTOExzXxOjZVTHpVJ9dwIr8bzF4" 
            alt="Hero Background"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center lg:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <span className="inline-block px-4 py-1 mb-6 border border-primary/20 bg-primary/5 rounded-full text-primary text-xs font-bold tracking-widest uppercase">
              Líderes em Inovação
            </span>
            <h1 className="text-display-lg text-on-surface mb-8">
              Retake Tecnologia & Design: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Especialistas</span> em Power Platform e WordPress de <span className="brand-signature">Alta Performance</span>.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-10 mx-auto lg:mx-0">
              Não apenas desenvolvemos software. Entregamos vantagem competitiva através de automação Microsoft e ecossistemas web ultra-rápidos que convertem.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contato" className="inline-block px-8 py-4 bg-primary text-background font-bold rounded transition-all shadow-xl shadow-primary/20">
                  Inicie sua Jornada
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/portfolio" className="inline-block px-8 py-4 border border-outline-variant text-on-surface font-bold rounded backdrop-blur-md hover:bg-white/5 transition-all">
                  Ver Soluções
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="glass-panel p-1 rounded-xl border border-white/5 shadow-inner">
              <div className="bg-surface-container-lowest p-8 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Verified className="w-24 h-24 text-primary" />
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center">
                    <Star className="text-primary w-6 h-6 fill-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-on-surface">Padrão Retake</h3>
                    <p className="text-xs text-on-surface-variant">Qualidade sem concessões</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>UX/UI</span>
                      <span>100%</span>
                    </div>
                    <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-primary" 
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Segurança</span>
                      <span>100%</span>
                    </div>
                    <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                        className="h-full bg-tertiary" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section - Manual Carousel */}
      <section className="py-24 bg-background/50 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-2">Nossos Clientes</p>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">Empresas que confiam na nossa tecnologia</h2>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={prevClient}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all group"
                aria-label="Cliente anterior"
              >
                <ChevronLeft className="w-6 h-6 group-active:scale-90 transition-transform" />
              </button>
              <button 
                onClick={nextClient}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all group"
                aria-label="Próximo cliente"
              >
                <ChevronRight className="w-6 h-6 group-active:scale-90 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="relative h-48 md:h-64 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              <AnimatePresence mode="popLayout">
                {[0, 1, 2].map((offset) => {
                  const index = (currentClientIndex + offset) % clients.length;
                  // Hide extra items on smaller screens
                  if (isMobile && offset > 0) return null;
                  if (window.innerWidth < 1024 && offset > 1) return null;

                  return (
                    <motion.div 
                      key={`${clients[index]}-${index}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="text-center px-4 flex items-center justify-center h-full group"
                    >
                      <span className="text-xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50 tracking-tighter leading-tight block group-hover:text-primary transition-all duration-300 cursor-default">
                        {clients[index]}
                      </span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            
            {/* Indicators */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {clients.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentClientIndex(i)}
                  className={`h-1 transition-all duration-300 rounded-full ${i === currentClientIndex ? 'w-8 bg-primary' : 'w-2 bg-white/10'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-surface-container-lowest border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-display-md mb-4 text-on-surface">Core <span className="text-primary">Services</span></h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Nossa expertise é focada em onde podemos gerar o maior impacto para o seu negócio.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="group bg-surface-container-low p-10 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <LayoutGrid className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-on-surface">Desenvolvimento Low-Code com Power Apps</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Aceleramos sua transformação digital com aplicativos internos personalizados. Automatize fluxos complexos, elimine processos manuais e ganhe agilidade operacional com o poder da plataforma Microsoft.
              </p>
              <ul className="space-y-3 mb-8">
                {['Automação de Processos de Negócio', 'Dashboards e BI Integrados', 'ROI acelerado em infraestrutura legada'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="text-primary w-5 h-5" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-surface-container-low p-10 rounded-2xl border border-white/10 hover:border-tertiary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-tertiary/5"
            >
              <div className="w-16 h-16 rounded-xl bg-tertiary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <GlobeIcon className="text-tertiary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-on-surface">Websites WordPress de Elite</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Desenvolvemos sites institucionais e e-commerces que não são apenas bonitos, mas máquinas de conversão. Foco total em Core Web Vitals, SEO técnico avançado e design exclusivo.
              </p>
              <ul className="space-y-3 mb-8">
                {['Carregamento em menos de 1.5s', 'Otimização máxima para Google (SEO)', 'Segurança reforçada e Manutenção Ativa'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="text-tertiary w-5 h-5" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-display-md mb-8">O Método <span className="italic text-primary">Retake</span></h2>
              <p className="text-lg text-on-surface-variant mb-12">
                Nosso diferencial está no compromisso inabalável com três pilares fundamentais que guiam cada linha de código e cada pixel desenhado.
              </p>
              <div className="space-y-8">
                {[
                  { id: '01', title: 'Responsabilidade Técnica', desc: 'Entregamos o que prometemos. Transparência total em cronogramas e arquitetura de sistemas.' },
                  { id: '02', title: 'Qualidade de Ponta', desc: 'Código limpo, escalável e pronto para o crescimento do seu negócio. Padrão enterprise em cada projeto.' },
                  { id: '03', title: 'Acessibilidade & Inclusão', desc: 'Produtos digitais feitos para todos. Seguimos rigorosamente as diretrizes WCAG de acessibilidade.' }
                ].map((item, index) => (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold">{item.id}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
              <img 
                className="relative rounded-2xl border border-white/10 shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3xXvWC3RYwtKTx_a8TBQoOvuauZM1j7q6Vl1qzF0OqOTF2uEqWeo69tijwNJcuMt8YbX3eQVmyNcH_Fbx1Fm0erJ6XdIMSkzwQvktH2ICDtHf2xwdvtRPuYL2FHKC21y0h4FFlHCJ-5Xo_spxcfg4PAIxeog0siZ14wfdvuMDNhk0hY4P5MXXkBDtbcai6a1L1dO2xXOyO6vbNP2pFbZKShIRuV02bkT9mvDVUUa1hjeFgdFOA2Ui0rMGGchaD40wvjkGS7ty_80" 
                alt="Method Image"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-display-md mb-4">A Confiança de Quem <span className="text-tertiary">Lidera</span></h2>
              <p className="text-on-surface-variant">Resultados tangíveis entregues para empresas que não aceitam o medíocre.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial cards */}
            {[
              {
                quote: "A migração para o ecossistema Microsoft orquestrada pela Retake mudou nossa produtividade. O suporte técnico é impecável e proativo.",
                author: "Ricardo Mendes",
                role: "CTO, Global Logistics",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFuIfPrvofQHsKijBYsBIdtk4I3M7B7Ss7crJI5iLDN0WAQn5RQc-l5Jk7nvCIwRwCqnqqdm0KQW-EJutNt7wlFvJU5je1o3R49-Z8iOrLimGoWIbKVxbrkWwF84TSdfujx2IjCm0eyHMomjvq1fuIJeWKpQMHOmCVuvjNRzTR3tzOuPA_PBjavnJWWz-g5E6fWTKQ9k2RLt0oo94AWeCAY3zVdEvZWZECTFUvE_ZY8FZtvmlLwdOSs98WOO4YhQebegsoVv8Zxs8"
              },
              {
                quote: "Nosso novo portal WordPress superou todas as metas de conversão. A velocidade de carregamento é algo que nunca tínhamos visto antes.",
                author: "Ana Paula Silva",
                role: "Diretora de Marketing, TechStream",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxU3C0aCes_GWp6z5L6X8xBJLOtK3clLjihSmp3kKPTY0w07y-ZSLijlrQrPiRA8XVJ9R8rC-QIO08FcyT7v2eaAHWu_Toy_Q6UAFQZj5mCCqKL8kl5gNHuDWRy8V7Q5YMtKiQ1-6q6wm_BjGU50YEN_w0GOGZZVRIVcv7_iV3VG40rPp9675fOdnrUYRE2AKC4O-gC7Gifr382JArDp_v7fUd-_noYY5zyNLiKXVed_3oITbxT8K_1QtKbbZ9uaqJbDySCGbadng"
              }
            ].map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="glass-panel p-10 rounded-2xl border border-white/5 relative group hover:bg-white/5 transition-colors"
              >
                <Quote className="text-primary/20 w-16 h-16 absolute top-6 right-8" />
                <p className="text-lg italic text-on-surface mb-8 relative z-10">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" src={t.img} alt={t.author} referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-sm text-on-surface">{t.author}</h4>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-display-md mb-4">Insights & <span className="text-primary">Tecnologia</span></h2>
              <p className="text-on-surface-variant">Fique por dentro das últimas tendências em Power Platform e desenvolvimento web.</p>
            </div>
            <Link to="/blog" className="text-primary font-bold flex items-center gap-2 hover:underline">
              Ver todos os artigos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-surface-container-low border border-white/5 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-primary text-sm font-bold flex items-center gap-2">
                  Ler mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[150px] rounded-full"></div>
        <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
          <h2 className="text-display-md mb-8">Pronto para a sua <span className="text-primary">Evolução Digital?</span></h2>
          <p className="text-xl text-on-surface-variant mb-12">
            Vamos transformar sua visão técnica em realidade de mercado com o selo de excelência da Retake Tecnologia & Design.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contato" className="inline-block px-10 py-5 bg-primary text-background font-black rounded-lg transition-all shadow-2xl shadow-primary/30">
                Solicitar Diagnóstico Gratuito
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/portfolio" className="inline-block px-10 py-5 glass-panel border border-white/10 text-on-surface font-bold rounded-lg hover:bg-white/5 transition-all">
                Explorar Portfólio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
