import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './rtk-logo-original-1.svg';

export default function Footer() {
  return (
    <footer className="bg-[#0c1324] w-full py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img 
              src={logo} 
              alt="Retake Tecnologia" 
              className="h-14 w-auto object-contain brightness-0 invert opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-xs text-slate-500 max-w-sm mb-8 leading-relaxed">
            © 2024 Retake Tecnologia. Excelência em Soluções Digitais. Forjando o amanhã através da inovação implacável, precisão técnica e compromisso total com o sucesso do cliente.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://instagram.com/retaketecnologia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/company/retake-tecnologia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-on-surface font-bold text-sm mb-6 uppercase tracking-widest">Navegação</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-xs text-slate-500 hover:text-primary transition-colors">Início</Link></li>
            <li><Link to="/portfolio" className="text-xs text-slate-500 hover:text-primary transition-colors">Portfólio</Link></li>
            <li><Link to="/contato" className="text-xs text-slate-500 hover:text-primary transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-on-surface font-bold text-sm mb-6 uppercase tracking-widest">Legal</h4>
          <ul className="space-y-4">
            <li><Link to="/politica-de-privacidade" className="text-xs text-slate-500 hover:text-primary transition-colors">Política de Privacidade</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
