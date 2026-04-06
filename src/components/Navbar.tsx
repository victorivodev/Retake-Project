import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import logo from './rtk-logo-original-1.svg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      isScrolled 
        ? "bg-[#0c1324]/80 backdrop-blur-xl border-white/10 py-4" 
        : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={logo} 
            alt="Retake Tecnologia & Design" 
            className="h-16 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-bold uppercase tracking-tight transition-colors",
                location.pathname === link.path 
                  ? "text-primary border-b-2 border-primary pb-1" 
                  : "text-slate-400 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <a href="https://instagram.com/retaketecnologia" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/retake-tecnologia" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/contato"
              className="inline-block bg-primary hover:bg-primary-container text-background px-6 py-2.5 rounded font-bold text-sm transition-all shadow-lg shadow-primary/20"
            >
              Pedir Orçamento
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-white/10 p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-lg font-bold uppercase tracking-tight",
                location.pathname === link.path ? "text-primary" : "text-slate-400"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-background px-6 py-4 rounded font-bold text-center"
          >
            Pedir Orçamento
          </Link>
          <div className="flex gap-6 mt-4">
            <a href="https://instagram.com/retaketec" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
              <Instagram className="w-6 h-6" /> <span className="text-sm font-bold uppercase tracking-tight">Instagram</span>
            </a>
            <a href="https://linkedin.com/company/retaketec" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
              <Linkedin className="w-6 h-6" /> <span className="text-sm font-bold uppercase tracking-tight">Linkedin</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
