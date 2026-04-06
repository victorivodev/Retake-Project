import { motion, AnimatePresence } from 'motion/react';
import { Verified, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_type: 'Microsoft Power Apps',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação robusta de e-mail
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '43375ebb-1b60-4125-bbca-3648105332ed');
      
      // Nomes de campos amigáveis para o e-mail (Web3Forms usa a chave como label)
      formDataToSend.append('Nome Completo', formData.name);
      formDataToSend.append('E-mail Corporativo', formData.email);
      formDataToSend.append('Serviço de Interesse', formData.project_type);
      formDataToSend.append('Mensagem do Cliente', formData.message);
      
      // Configurações de Identidade do E-mail
      formDataToSend.append('title', 'Novo Lead do Site - Retake Tecnologia & Design');
      formDataToSend.append('subject', `🚀 Novo Contato: ${formData.name} (${formData.project_type})`);
      formDataToSend.append('from_name', 'Retake Tecnologia & Design');
      formDataToSend.append('replyto', formData.email); // Facilita a resposta direta ao cliente

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', project_type: 'Microsoft Power Apps', message: '' });
      } else {
        console.error('Erro retornado pela API:', result);
        setStatus('error');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setStatus('error');
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contato - Retake Tecnologia & Design",
    "description": "Entre em contato conosco para iniciar seu projeto de Power Platform ou WordPress.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Retake Tecnologia & Design",
      "telephone": "+55-11-93057-9963",
      "email": "contato@retaketecnologia.com.br"
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <SEO 
        title="Contato"
        description="Pronto para o próximo nível? Entre em contato com a Retake Tecnologia & Design e descubra como podemos acelerar seu negócio com tecnologia de ponta."
        canonical="/contato"
        schema={contactSchema}
      />
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden px-8 py-24">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl text-center">
          <span className="inline-block px-4 py-1 mb-6 border border-primary/20 bg-primary/5 rounded-full text-xs font-bold uppercase tracking-widest text-primary">Contato</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-white">
            Sua Próxima Evolução <br/>
            <span className="text-primary">Começa Aqui</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
            Transformamos processos complexos em experiências digitais fluidas. Fale com nossos especialistas em Power Apps e WordPress.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="max-w-7xl mx-auto px-8 mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              {[
                { label: 'E-mail Corporativo', value: 'contato@retaketecnologia.com.br' },
                { label: 'WhatsApp Business', value: '+55 (11) 93057-9963' }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <h3 className="text-tertiary font-bold uppercase tracking-widest text-xs mb-4">{item.label}</h3>
                  <p className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{item.value}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-xl bg-surface-container-low border border-white/5 kinetic-shadow"
            >
              <div className="flex items-center gap-4 mb-4 text-primary">
                <Verified className="w-6 h-6 fill-primary/20" />
                <span className="text-sm font-bold uppercase tracking-tighter">Experiência de Mercado</span>
              </div>
              <p className="text-sm text-on-surface-variant italic">
                "Nossa equipe é composta por especialistas com passagens por grandes instituições como Banco Sofisa, Cognizant, MSD e Funcional Health Tech trazendo bagagem técnica de elite para o seu projeto."
              </p>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="glass-panel p-10 md:p-16 rounded-2xl border border-white/5 kinetic-shadow">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-3xl font-black text-white">Proposta Enviada!</h3>
                    <p className="text-on-surface-variant max-w-md mx-auto">
                      Recebemos sua mensagem. Nossa equipe de especialistas analisará seu desafio e entrará em contato em até 24 horas úteis.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-primary font-bold hover:underline"
                    >
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                ) : (
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-outline">Nome Completo</label>
                        <input 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/50 p-4 rounded text-on-surface placeholder:text-outline/50 transition-all" 
                          placeholder="Ex: João Silva" 
                          type="text"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-outline">E-mail Corporativo</label>
                        <input 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/50 p-4 rounded text-on-surface placeholder:text-outline/50 transition-all" 
                          placeholder="joao@empresa.com.br" 
                          type="email"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-outline">Tipo de Projeto</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.label 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative flex items-center p-4 rounded cursor-pointer group transition-colors ${formData.project_type === 'Microsoft Power Apps' ? 'bg-primary/10 border border-primary/30' : 'bg-surface-container-lowest hover:bg-surface-container-high'}`}
                        >
                          <input 
                            className="w-4 h-4 text-primary bg-surface border-outline-variant focus:ring-primary" 
                            name="project_type" 
                            type="radio"
                            checked={formData.project_type === 'Microsoft Power Apps'}
                            onChange={() => setFormData({...formData, project_type: 'Microsoft Power Apps'})}
                          />
                          <span className={`ml-3 font-bold text-sm transition-colors ${formData.project_type === 'Microsoft Power Apps' ? 'text-primary' : 'text-on-surface-variant group-hover:text-white'}`}>Microsoft Power Apps</span>
                        </motion.label>
                        <motion.label 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative flex items-center p-4 rounded cursor-pointer group transition-colors ${formData.project_type === 'Websites WordPress' ? 'bg-primary/10 border border-primary/30' : 'bg-surface-container-lowest hover:bg-surface-container-high'}`}
                        >
                          <input 
                            className="w-4 h-4 text-primary bg-surface border-outline-variant focus:ring-primary" 
                            name="project_type" 
                            type="radio"
                            checked={formData.project_type === 'Websites WordPress'}
                            onChange={() => setFormData({...formData, project_type: 'Websites WordPress'})}
                          />
                          <span className={`ml-3 font-bold text-sm transition-colors ${formData.project_type === 'Websites WordPress' ? 'text-primary' : 'text-on-surface-variant group-hover:text-white'}`}>Websites WordPress</span>
                        </motion.label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-outline">Mensagem</label>
                      <textarea 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/50 p-4 rounded text-on-surface placeholder:text-outline/50 transition-all resize-none" 
                        placeholder="Descreva brevemente seu desafio tecnológico..." 
                        rows={5}
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-red-400 text-sm font-bold"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email) 
                          ? 'Por favor, insira um e-mail corporativo válido.' 
                          : 'Ocorreu um erro ao enviar. Por favor, tente novamente ou use nosso WhatsApp.'}
                      </motion.div>
                    )}

                    <motion.button 
                      disabled={status === 'loading'}
                      whileHover={status === 'loading' ? {} : { scale: 1.02, boxShadow: "0 0 30px -5px rgba(14,165,233,0.4)" }}
                      whileTap={status === 'loading' ? {} : { scale: 0.95 }}
                      className={`w-full md:w-auto bg-primary text-background px-12 py-5 rounded font-black uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-2 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {status === 'loading' ? (
                        <>Processando... <Loader2 className="w-4 h-4 animate-spin" /></>
                      ) : (
                        <>Enviar Proposta <Send className="w-4 h-4" /></>
                      )}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">Dúvidas Frequentes</h2>
            <div className="h-1 w-24 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { q: 'Quanto custa um projeto de Power Apps?', a: 'O investimento varia conforme a complexidade dos fluxos de trabalho e integrações. Projetos típicos iniciam com uma análise de arquitetura detalhada para garantir escalabilidade.' },
              { q: 'Qual o prazo médio de entrega para WordPress?', a: 'Nossa metodologia ágil permite entregar MVPs funcionais em 3 a 5 semanas, com ciclos de refinamento contínuos baseados em dados de performance.' },
              { q: 'Vocês oferecem suporte pós-lançamento?', a: 'Sim. Mantemos contratos de SLA (Service Level Agreement) que garantem manutenção proativa, atualizações de segurança e otimização de performance mensal.' },
              { q: 'Minha empresa já possui dados. Como integrar?', a: 'Somos especialistas em conectores de dados. Seja via API, SQL ou Sharepoint, garantimos que sua nova solução converse perfeitamente com seu ecossistema atual.' }
            ].map((faq, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-xl font-bold text-primary">{faq.q}</h4>
                <p className="text-on-surface-variant leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image CTA */}
      <section className="h-[400px] relative overflow-hidden group">
        <img 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3JK6pbbpO-ZdeCpLY4_Ya-yTyAp4KzTNlVHPkqyDuM9funlDC2lrBfYx6zT2zRvCb2klx-pdZOZ1DasuEQpaTvD9j-MLdpYWleDLwK2bVrxuPbSxbgiIOP6WImQtPPjw4j4P5at5ULTM67XJLZCJ5HifoQyY_pW_MgP6EcoEYdTzRA9iokQtVU19XTH7lSzstwlIZ0Wh3jpq-GqmpmhrBExd5c76xVA-aypcfhXDprkOllKLv1KnukIuMjvjuvqQeCPhe5m42bOA" 
          alt="Office CTA"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex items-center justify-center">
          <div className="text-center p-8">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">Pronto para o próximo nível?</h3>
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Design • Tecnologia • Estratégia</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}