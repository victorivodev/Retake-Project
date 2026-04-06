import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  const lastUpdated = "06 de Abril de 2026";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20"
    >
      <SEO 
        title="Política de Privacidade"
        description="Saiba como a Retake Tecnologia & Design protege seus dados e respeita sua privacidade."
        canonical="/politica-de-privacidade"
      />
      
      <div className="max-w-4xl mx-auto px-8">
        <div className="mb-16">
          <span className="inline-block px-4 py-1 mb-6 border border-primary/20 bg-primary/5 rounded-full text-xs font-bold uppercase tracking-widest text-primary">Jurídico</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-on-surface mb-6">
            Política de <span className="text-primary">Privacidade</span>
          </h1>
          <p className="text-on-surface-variant">Última atualização: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-12 text-on-surface-variant leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Introdução</h2>
            <p>
              A Retake Tecnologia & Design ("nós", "nosso") valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações quando você visita nosso site ou utiliza nossos serviços de Power Platform e WordPress.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Coleta de Dados</h2>
            <p>
              Coletamos informações que você nos fornece diretamente através de nossos formulários de contato, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome completo</li>
              <li>E-mail corporativo</li>
              <li>Informações sobre o projeto desejado</li>
              <li>Conteúdo da mensagem enviada</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Uso das Informações</h2>
            <p>
              As informações coletadas são utilizadas exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder às suas solicitações de orçamento ou contato;</li>
              <li>Fornecer informações sobre nossos serviços;</li>
              <li>Melhorar a experiência do usuário em nosso site;</li>
              <li>Cumprir obrigações legais.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Proteção de Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração. Utilizamos protocolos de criptografia (SSL) em todas as comunicações do site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Compartilhamento com Terceiros</h2>
            <p>
              Não vendemos ou alugamos seus dados pessoais. Podemos compartilhar informações com provedores de serviços essenciais (como o Web3Forms para processamento de formulários), que estão contratualmente obrigados a manter a confidencialidade de seus dados.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Seus Direitos</h2>
            <p>
              De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais a qualquer momento. Para isso, entre em contato através do e-mail: <span className="text-primary">contato@retaketecnologia.com.br</span>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">7. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta política periodicamente para refletir mudanças em nossas práticas ou por razões operacionais, legais ou regulatórias.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
