import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check, ChevronDown, MapPin, Calendar, Clock, AlertTriangle, Zap, Funnel, TrendingUp, Users } from "lucide-react";
import heroBgMobile from "@assets/bg_lpmobil_1766376649299.png";
import heroBg from "@assets/bg_lp_1766376649298.png";
import dashboardImg from "@assets/generated_images/futuristic_ai_dashboard_for_insurance_brokers_with_gold_accents.png";
import logoEusou from "@assets/logo_erika_1766334069365.png";
import logoErika from "@assets/LOGO_Erika_1766334075618.png";
import abstractImg from "@assets/generated_images/abstract_visualization_of_sales_chaos_vs_order_gold.png";
import keyImg from "@assets/generated_images/golden_key_or_vip_card_floating.png";
import ticketImg from "@assets/generated_images/luxurious_golden_event_ticket_floating.png";
import libraryImg from "@assets/generated_images/orlando_public_library_stylized_architecture.png";
import orlandoImg from "@assets/generated_images/premium_orlando_skyline_evening_luxury_background.png";
import bgSessaoAbaixo from "@assets/bg_sessao_abaixo_1766408226673.png";
import brokerMale1 from "@assets/generated_images/professional_male_insurance_broker_portrait.png";
import brokerFemale from "@assets/generated_images/professional_female_insurance_broker_portrait.png";
import brokerMale2 from "@assets/generated_images/professional_latin_male_broker_portrait.png";
import brokerNotebook from "@assets/generated_images/broker_working_on_ai_notebook.png";
import { useState } from "react";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#070607] text-white overflow-hidden selection:bg-[#D8B366] selection:text-black font-sans relative">
      
      {/* GLOBAL BACKGROUND ELEMENTS - "Light Points" & "Noise" */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D8B366]/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-[#D8B366]/5 blur-[100px] rounded-full mix-blend-screen opacity-50" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#D8B366]/5 blur-[150px] rounded-full mix-blend-screen opacity-30" />
      </div>

      {/* 1) NAVBAR (Sticky) */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-[#070607]/55 backdrop-blur-md border-b border-[#D8B366]/20 flex items-center transition-all duration-300">
        <div className="container mx-auto max-w-6xl px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <button onClick={scrollToTop} className="group cursor-pointer hover:drop-shadow-lg transition-all duration-300 active:scale-95">
              <img 
                src={logoEusou} 
                alt="Eusou360" 
                className="h-6 md:h-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </button>
            <button onClick={scrollToTop} className="group cursor-pointer hover:drop-shadow-lg transition-all duration-300 active:scale-95">
              <img 
                src={logoErika} 
                alt="Erika Crivellari" 
                className="h-3 md:h-4 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </button>
          </div>
          
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-[#D8B366] font-display font-bold text-lg tracking-widest uppercase">
              Governe seus resultados
            </h1>
          </div>

          <a href="https://sun.eduzz.com/E9OO22V59B" target="_blank" rel="noopener noreferrer" className="relative flex items-center gap-2 bg-[#D8B366] text-black text-xs md:text-sm font-bold px-4 md:px-6 h-9 md:h-10 rounded-lg transition-all duration-300 group overflow-hidden hover:shadow-[0_0_20px_rgba(216,179,102,0.4)] hover:scale-105 active:scale-95">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">Garantir minha vaga</span>
            <ArrowRight className="relative z-10 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </nav>

      {/* 2) HERO (Cinematic) */}
      <section id="hero" className="relative min-h-[160vh] md:min-h-[110vh] flex items-start md:items-center pt-32 md:pt-40 pb-40 md:pb-20 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `var(--hero-bg)` }}>
        <style>{`
          #hero {
            --hero-bg: url(${heroBgMobile});
            background-position: center top;
          }
          @media (min-width: 768px) {
            #hero {
              --hero-bg: url(${heroBg});
              background-position: center center;
            }
          }
        `}</style>
        
        {/* Gradient for text contrast - left to right (Desktop) / Top to bottom (Mobile) */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[75%] bg-gradient-to-b md:bg-gradient-to-r from-[#0a0809] via-[#0a0809]/60 md:via-[#0a0809]/85 to-transparent z-0 h-[70%] md:h-full" />
        
        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="max-w-2xl w-full">
            {/* Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6 md:space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex px-3 py-1.5 rounded-full border border-[#D8B366]/25 bg-[#D8B366]/10 text-[#F6E6C6] text-[10px] md:text-[11px] font-bold tracking-[0.08em] uppercase">
                  ENCONTRO PRESENCIAL E EXCLUSIVO
                </span>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-2">
                <h1 className="text-4xl md:text-[56px] font-display font-bold text-white leading-[1.05] tracking-tight">
                  Venda não é sorte.<br />É processo.
                </h1>
                <p className="text-xl md:text-[32px] font-serif italic font-normal text-[#D8B366] leading-[1.15]">
                  Agora, com inteligência artificial a seu favor.
                </p>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-sm md:text-lg text-white/80 leading-relaxed font-light max-w-lg">
                Um encontro presencial e exclusivo para Corretores de Seguro de Vida e Distribuidores de Produtos Financeiros que querem controle, previsibilidade e resultado real em vendas.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-white/90 font-light">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D8B366]" /> Orlando
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                  <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D8B366]" /> 13 de janeiro
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                  <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#D8B366]" /> 12:30 PM às 5:30 PM
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4 pt-2">
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a href="https://sun.eduzz.com/E9OO22V59B" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto relative flex items-center justify-center gap-2 bg-[#D8B366] text-black text-base font-bold px-8 h-12 rounded-lg transition-all duration-300 group overflow-hidden hover:shadow-[0_0_30px_rgba(216,179,102,0.5)] hover:scale-105 active:scale-95">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                    <span className="relative z-10">Garanta sua vaga</span>
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button onClick={() => document.getElementById('launch')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto relative flex items-center justify-center gap-2 bg-white/5 text-white text-base font-bold px-8 h-12 rounded-lg transition-all duration-300 group border border-white/10 overflow-hidden hover:bg-white/10 hover:border-[#D8B366]/50 hover:shadow-[0_0_20px_rgba(216,179,102,0.1)]">
                    <span className="relative z-10">Ver o que vai acontecer</span>
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3 justify-start pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D8B366]/15 border border-[#D8B366]/30 backdrop-blur-sm">
                    <AlertTriangle className="w-3 h-3 text-[#D8B366]" />
                    <span className="text-[10px] md:text-xs text-white/80 font-semibold">Vagas limitadas</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D8B366]/15 border border-[#D8B366]/30 backdrop-blur-sm">
                    <MapPin className="w-3 h-3 text-[#D8B366]" />
                    <span className="text-[10px] md:text-xs text-white/80 font-semibold">Presencial</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D8B366]/15 border border-[#D8B366]/30 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 text-[#D8B366]" />
                    <span className="text-[10px] md:text-xs text-white/80 font-semibold">Condição especial</span>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3) DOR / CONTEXTO */}
      <section id="context" className="py-16 md:py-32 relative border-t border-[#D8B366]/10 bg-[#0C0B0D] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D8B366]/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D8B366]/5 blur-[100px] rounded-full mix-blend-screen pointer-events-none -translate-x-1/3 translate-y-1/4" />
        
        {/* Subtle Background Image */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
            <img src={abstractImg} alt="" className="w-full h-full object-cover object-center" />
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-[42px] font-display font-bold text-white mb-8 relative leading-tight">
                Você pode até <span className="font-serif italic text-white">vender bem</span>.
              </motion.h2>

              <motion.div variants={fadeInUp} className="p-8 md:p-10 rounded-[24px] bg-[#131116]/80 backdrop-blur-md border border-[#D8B366]/20 shadow-[0_10px_30px_rgba(0,0,0,0.35)] relative overflow-hidden group hover:border-[#D8B366]/40 hover:shadow-[0_20px_50px_rgba(216,179,102,0.1)] transition-all duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#D8B366]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#D8B366]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <p className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed relative z-10">
                  Mas se não tiver <span className="text-[#D8B366] font-semibold font-serif italic">processo, organização e inteligência</span>, você sempre vai depender do improviso.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "E improviso não escala.",
                    "Improviso cansa.",
                    "Improviso custa dinheiro."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E45B5B]" />
                      <span className="text-white/80 text-lg font-light">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-lg text-white font-medium border-t border-[#D8B366]/10 pt-6">
                  Este evento foi criado para quem quer <span className="font-serif italic text-[#D8B366]">governar seus resultados</span>, não torcer por eles.
                </p>
              </motion.div>
            </motion.div>
            
            {/* Right Side Visual - Broker with AI Notebook */}
             <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="hidden md:block relative h-full min-h-[500px]"
            >
              <motion.div variants={fadeInUp} className="relative rounded-[32px] overflow-hidden border border-[#D8B366]/30 shadow-[0_20px_80px_-20px_rgba(216,179,102,0.15)] group h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D8B366]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070607]/60 z-10" />

                <img 
                  src={brokerNotebook} 
                  alt="Corretor usando IA" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
              </motion.div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 4) O QUE VAI ACONTECER */}
      <section className="py-16 md:py-24 relative bg-[#070607] overflow-hidden">
        {/* Background Grid/Noise */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D8B366]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="text-[#D8B366] text-xs font-bold tracking-widest uppercase mb-3 block">O que vai acontecer nesse evento</span>
              <h2 className="text-3xl md:text-[38px] font-display font-bold text-white leading-tight max-w-2xl">
                Este não é um <span className="font-serif italic text-white">evento motivacional</span>. <br />
                <span className="text-white/60">É um encontro estratégico, onde você vai:</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Previsibilidade", desc: "Entender como processo de vendas gera previsibilidade" },
                { title: "Conversão e ticket", desc: "Aprender como planejamento aumenta conversão e ticket médio" },
                { title: "Tempo e foco", desc: "Ver como organização libera tempo e foco" },
                { title: "Tecnologia e IA", desc: "Conhecer como tecnologia, CRM e IA podem trabalhar a seu favor" },
                { title: "Gestão do resultado", desc: "Mudar o jogo: de vendedor reativo para gestor do próprio resultado", full: true }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-6 rounded-[18px] bg-[#131116]/60 backdrop-blur-md border border-[#D8B366]/10 hover:border-[#D8B366]/40 hover:bg-[#131116]/90 hover:shadow-[0_10px_40px_rgba(216,179,102,0.1)] hover:-translate-y-1 transition-all duration-300 group ${item.full ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#131116] to-[#D8B366]/10' : ''}`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#D8B366]/10 border border-[#D8B366]/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#D8B366] group-hover:text-black transition-all duration-300">
                    <Sparkles className="w-5 h-5 text-[#D8B366] group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D8B366] transition-colors">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5) BLOCO ESPECIAL - LANÇAMENTO */}
      <section id="launch" className="py-16 md:py-32 relative border-y border-[#D8B366]/10 bg-[#0C0B0D]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D8B366]/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Content Left */}
            <div className="flex-1 space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D8B366]/10 border border-[#D8B366]/20 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 text-[#D8B366]" />
                  <span className="text-[#D8B366] text-xs font-bold uppercase tracking-widest">Lançamento Exclusivo</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1]">
                  O primeiro sistema de IA <br />
                  <span className="font-serif italic text-[#D8B366]">criado para corretores</span>
                </h2>
                
                <p className="text-xl text-white/80 font-light leading-relaxed max-w-xl">
                  Durante o evento, você terá acesso em primeira mão a uma tecnologia capaz de <span className="font-serif italic text-white">transformar dados em contratos fechados</span>.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Organização Total",
                    desc: "Centralize seu processo de vendas e elimine o caos operacional."
                  },
                  {
                    icon: <Funnel className="w-6 h-6" />,
                    title: "Visão de Funil",
                    desc: "Clareza absoluta sobre oportunidades e próximos passos."
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: "Decisões com Dados",
                    desc: "Pare de agir por intuição e comece a agir por inteligência."
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Foco no Cliente",
                    desc: "A IA cuida da burocracia para você cuidar do relacionamento."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group hover:bg-white/5 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-[#D8B366]/20">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D8B366]/20 to-[#D8B366]/5 border border-[#D8B366]/30 flex items-center justify-center flex-shrink-0 text-[#D8B366] group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(216,179,102,0.3)]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base mb-2 group-hover:text-[#D8B366] transition-colors">{item.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#E45B5B]/10 border border-[#E45B5B]/20 max-w-md">
                <AlertTriangle className="w-5 h-5 text-[#E45B5B] flex-shrink-0" />
                <p className="text-sm text-[#E45B5B]/90 font-medium">
                  Disponível apenas para participantes presenciais.
                </p>
              </div>
            </div>

            {/* Visual Right */}
            <div className="w-full lg:w-[45%] relative">
               <div className="relative rounded-[32px] overflow-hidden border border-[#D8B366]/30 shadow-[0_20px_80px_-20px_rgba(216,179,102,0.15)] group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#D8B366]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                  
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070607]/80 z-10" />

                  <img 
                    src={dashboardImg} 
                    alt="Sistema de IA" 
                    className="w-full aspect-[4/5] object-cover object-left-top transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  
                  {/* Floating UI Element */}
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="p-5 rounded-2xl bg-[#131116]/80 backdrop-blur-xl border border-[#D8B366]/20 shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-[#D8B366] uppercase tracking-wider">Performance de Vendas</span>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#D8B366]" />
                          <div className="w-2 h-2 rounded-full bg-[#D8B366]/30" />
                          <div className="w-2 h-2 rounded-full bg-[#D8B366]/30" />
                        </div>
                      </div>
                      <div className="flex items-end gap-3">
                        <span className="text-3xl font-display font-bold text-white">+127%</span>
                        <span className="text-sm text-white/60 mb-1">em conversão este mês</span>
                      </div>
                    </div>
                  </div>
               </div>
               
               {/* Decorative Elements behind image */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D8B366]/10 blur-[60px] rounded-full pointer-events-none" />
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D8B366]/10 blur-[60px] rounded-full pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* 6) BENEFÍCIO EXCLUSIVO */}
      <section id="benefit" className="py-16 md:py-40 relative overflow-hidden bg-[#070607]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D8B366]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
             <div className="md:w-1/2 space-y-8 md:space-y-10 text-left">
                <span className="text-[#D8B366] text-xs font-bold tracking-widest uppercase mb-2 block">Vantagem Presencial</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
                    Vantagem exclusiva para <span className="text-[#D8B366] font-serif italic">participantes presenciais</span>
                </h2>

                <div className="space-y-6 text-base md:text-lg text-white/80 font-light leading-relaxed">
                    <p>
                    Os participantes presenciais do evento terão <strong className="text-white font-semibold">acesso antecipado ao sistema de IA</strong>, além de um benefício especial de lançamento, reservado apenas para quem estiver no encontro em Orlando.
                    </p>
                    <p>
                    Essa condição <span className="text-[#E45B5B] font-medium border-b border-[#E45B5B]/30 pb-0.5">não será disponibilizada online</span> nem após o evento.
                    </p>
                </div>

                <p className="text-xl md:text-2xl font-serif italic text-[#D8B366] font-semibold pt-6 md:pt-8 border-l-2 border-[#D8B366] pl-6">
                    Quem entende o jogo, garante a vantagem antes dos outros.
                </p>
             </div>
             
             <div className="md:w-1/2 relative">
                <div className="relative rounded-[24px] overflow-hidden border border-[#D8B366]/20 shadow-[0_0_100px_rgba(216,179,102,0.1)] group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070607]/80 via-[#070607]/20 to-transparent z-10" />
                    <img src={keyImg} alt="Benefício Exclusivo" className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    
                    <div className="absolute bottom-6 left-6 z-20 bg-[#131116]/95 backdrop-blur-md px-6 py-3 rounded-full border border-[#D8B366]/40">
                        <span className="text-[#D8B366] font-bold text-sm tracking-wider uppercase">Acesso VIP</span>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7) PREÇO */}
      <section id="pricing" className="py-16 md:py-40 relative bg-[#0C0B0D] overflow-hidden">
         {/* Background Glow for Pricing */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#D8B366]/5 to-[#B98A3B]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-20">
            
            {/* Left Side: Value Proposition */}
            <div className="lg:w-1/2 space-y-8 relative">
                <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                        Um investimento que <br />
                        <span className="font-serif italic text-[#D8B366]">se paga na primeira venda</span>.
                    </h2>
                    <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                        Chega de eventos que entregam apenas motivação. O caminho para <strong className="text-white">dominar seu processo</strong> e escalar seus resultados está a um clique de distância.
                    </p>
                    <p className="text-sm text-white/50 border-l-2 border-[#D8B366]/30 pl-4 italic">
                        "Pelo conteúdo, pela exclusividade e pelo lançamento do sistema de IA, ele poderia facilmente custar algumas centenas de dólares."
                    </p>
                </div>

                {/* Visual Element floating */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#D8B366]/20 shadow-[0_20px_60px_-10px_rgba(216,179,102,0.1)] group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#D8B366]/10 to-transparent z-10" />
                    <img 
                        src={ticketImg} 
                        alt="Golden Ticket" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>

            {/* Right Side: Pricing Card */}
            <div className="lg:w-1/2 w-full">
                <div className="relative rounded-[32px] bg-[#131116]/90 backdrop-blur-sm border border-[#D8B366]/30 overflow-hidden shadow-[0_0_80px_-20px_rgba(216,179,102,0.15)]">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D8B366] to-transparent opacity-50" />
                    
                    <div className="p-10 md:p-16 space-y-8 md:space-y-10">
                        <div className="text-center pb-8 border-b border-white/5">
                            <h3 className="text-xl font-medium text-white/90 mb-2">Ao se inscrever, você terá acesso a:</h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Acesso completo ao evento presencial",
                                "Lançamento exclusivo do Sistema de IA",
                                "Networking com a elite do mercado",
                                "Coffee break e experiência premium"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/80 font-light">
                                    <Check className="w-5 h-5 text-[#D8B366] flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="p-4 rounded-xl bg-[#D8B366]/5 border border-[#D8B366]/10">
                            <div className="flex items-center gap-2 mb-1">
                                <Sparkles className="w-4 h-4 text-[#D8B366]" />
                                <span className="text-[#D8B366] font-bold text-sm uppercase tracking-wide">Bônus Exclusivo</span>
                            </div>
                            <p className="text-white/70 text-sm">
                                Acesso antecipado à tecnologia de IA para corretores.
                            </p>
                        </div>

                        <div className="text-center space-y-2 pt-4">
                            <p className="text-white/40 text-sm line-through decoration-[#E45B5B]">valor inestimável</p>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-xl text-[#D8B366]">por</span>
                                <span className="text-5xl md:text-6xl font-display font-bold text-white">US$ 49,90</span>
                            </div>
                            <p className="text-[#D8B366]/80 text-sm font-medium">pagamento único</p>
                        </div>

                        <a href="https://sun.eduzz.com/E9OO22V59B" target="_blank" rel="noopener noreferrer" className="w-full relative flex items-center justify-center gap-2 bg-[#D8B366] text-black h-16 md:h-14 text-base md:text-lg font-bold rounded-xl transition-all duration-300 group overflow-hidden hover:shadow-[0_0_30px_rgba(216,179,102,0.4)] hover:scale-[1.02] active:scale-95">
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                            <span className="relative z-10">Quero me inscrever agora</span>
                            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8) INFO FINAIS */}
      <section id="info" className="py-16 md:py-40 relative border-b border-[#D8B366]/10 overflow-hidden">
        <div className="absolute inset-0">
            <img src={bgSessaoAbaixo} alt="Orlando Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070607]/40 md:from-[#070607]/50 via-[#070607]/20 md:via-[#070607]/30 to-[#070607]/40 md:to-[#070607]/50" />
        </div>

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-8">
            {/* Location */}
            <div className="p-3 md:p-12 rounded-[24px] bg-[#131116]/85 md:bg-[#131116]/75 backdrop-blur-lg border border-[#D8B366]/15 flex flex-col md:flex-row md:gap-6 items-start hover:border-[#D8B366]/40 transition-colors group md:col-span-1">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-[#D8B366]/15 flex items-center justify-center flex-shrink-0 text-[#D8B366] group-hover:scale-110 transition-transform duration-300 border border-[#D8B366]/30">
                <MapPin className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-sm md:text-2xl font-bold text-white font-display">Local do Evento</h3>
                <div className="text-white/80 text-xs md:text-base space-y-0.5 md:space-y-1.5 font-light">
                  <p className="font-semibold text-white text-xs md:text-lg">📍 Orlando Public Library</p>
                  <p className="text-xs md:text-base">101 E. Central Blvd.</p>
                  <p className="text-xs md:text-base">Orlando, FL 32801</p>
                  <p className="text-[#D8B366] font-medium text-xs md:text-base">Albertson Room</p>
                </div>
              </div>
            </div>

            {/* Date/Time */}
            <div className="p-3 md:p-12 rounded-[24px] bg-[#131116]/85 md:bg-[#131116]/75 backdrop-blur-lg border border-[#D8B366]/15 flex flex-col md:flex-row md:gap-6 items-start hover:border-[#D8B366]/40 transition-colors group md:col-span-1">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-[#D8B366]/15 flex items-center justify-center flex-shrink-0 text-[#D8B366] group-hover:scale-110 transition-transform duration-300 border border-[#D8B366]/30">
                <Calendar className="w-5 h-5 md:w-7 md:h-7" />
              </div>
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-sm md:text-2xl font-bold text-white font-display">Data e Horário</h3>
                <div className="text-white/80 text-xs md:text-base space-y-0.5 md:space-y-1.5 font-light">
                  <p className="font-semibold text-white text-xs md:text-lg">📅 13 de janeiro</p>
                  <p className="text-xs md:text-lg">⏰ 12:30 PM a 5:30 PM</p>
                  <p className="text-white/50 text-[10px] md:text-sm pt-1 md:pt-2 border-t border-white/10 mt-1 md:mt-2">(Chegada recomendada a partir das 12:00 PM para credenciamento)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9) FAQ */}
      <section id="faq" className="py-16 md:py-24 relative bg-[#070607]">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-display font-bold text-white mb-10 text-center">Perguntas Frequentes</h2>
          
          <div className="space-y-3">
            {[
              { q: "Para quem é o evento?", a: "Para Corretores de Seguro de Vida e Distribuidores de Produtos Financeiros que buscam profissionalizar sua gestão e vendas." },
              { q: "É somente presencial?", a: "Sim, o evento é 100% presencial em Orlando para garantir o networking e a experiência exclusiva." },
              { q: "O que está incluso?", a: "Acesso ao evento, material de apoio e acesso antecipado ao sistema de IA." },
              { q: "Como funciona o acesso ao benefício de lançamento?", a: "O benefício será revelado e liberado exclusivamente para os participantes presentes no dia." },
              { q: "Posso transferir minha vaga?", a: "Sim, entre em contato com o suporte até 48h antes do evento." },
              { q: "Como será o pagamento?", a: "Pagamento online seguro via cartão de crédito." }
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-[#131116] border border-white/5 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white/90 font-medium text-sm">{item.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#D8B366] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === i && (
                  <div className="p-5 pt-0 border-t border-white/5 mt-0">
                    <p className="text-white/60 text-sm font-light leading-relaxed pt-4">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10) CTA FINAL */}
      <section className="py-16 md:py-40 relative overflow-hidden">
        {/* Cinematic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#D8B366]/20 via-[#070607] to-[#070607]" />
        
        <div className="container mx-auto max-w-6xl px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 md:mb-8 leading-tight">
            Garanta sua vaga e <br /><span className="font-serif italic text-white">esteja no lançamento</span>
          </h2>
          <p className="text-lg md:text-2xl font-serif italic text-[#D8B366] mb-12 md:mb-16">
            Quem governa o processo, governa o resultado.
          </p>
          
          <a href="https://sun.eduzz.com/E9OO22V59B" target="_blank" rel="noopener noreferrer" className="relative mx-auto flex items-center justify-center gap-2 bg-[#D8B366] text-black h-16 md:h-14 px-8 md:px-10 text-base md:text-lg font-bold rounded-lg transition-all duration-300 group overflow-hidden shadow-[0_0_50px_rgba(216,179,102,0.3)] hover:shadow-[0_0_80px_rgba(216,179,102,0.5)] hover:scale-105 active:scale-95">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">Garantir minha vaga agora</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 11) CHECKOUT COPY (Pre-checkout Panel) */}
      <section className="py-24 relative bg-[#0C0B0D] border-t border-[#D8B366]/10">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="rounded-[24px] bg-[#131116] border border-[#D8B366]/20 p-8 md:p-10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
              Você está a um passo de <span className="font-serif italic text-white">garantir sua vaga</span>
            </h3>
            
            <div className="space-y-4 text-sm text-white/80 font-light mb-8">
              <p className="leading-relaxed">
                Você está se inscrevendo em um evento presencial exclusivo, com foco em processo de vendas, organização e tecnologia aplicada, além do lançamento de um sistema de IA voltado para corretores.
              </p>
              
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D8B366]" /> <span>Evento presencial | Orlando</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#D8B366]" /> <span>13 de janeiro | 12h às 17h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D8B366]" /> <span>Benefício exclusivo para participantes presenciais</span>
                </div>
              </div>
              
              <div className="bg-[#D8B366]/10 rounded-lg p-4 border border-[#D8B366]/20 mt-6">
                <p className="text-[#D8B366] font-bold text-lg mb-1">Investimento: US$ 49,90</p>
                <p className="text-white/60 text-xs uppercase tracking-wide">Valor especial de lançamento</p>
              </div>
              
              <div className="flex items-start gap-2 text-[#E45B5B] text-xs pt-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>As vagas são limitadas e a condição especial não será repetida.</span>
              </div>
            </div>

            <a href="https://sun.eduzz.com/E9OO22V59B" target="_blank" rel="noopener noreferrer" className="w-full btn-primary h-12 text-sm font-bold flex items-center justify-center">
              Continuar para o pagamento
            </a>
          </div>
        </div>
      </section>

      {/* 12) FOOTER */}
      <footer className="py-12 border-t border-white/5 bg-[#050405] relative z-10">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left: Logos */}
            <div className="flex items-center gap-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <img 
                src={logoEusou} 
                alt="Eusou360" 
                className="h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="h-4 w-px bg-white/20" />
              <img 
                src={logoErika} 
                alt="Erika Crivellari" 
                className="h-3 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Right: Copyright & Links */}
            <div className="flex flex-col md:flex-row items-center gap-6 text-xs text-white/40 font-light">
              <span className="font-serif italic text-white/60">Governe seus resultados.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#D8B366] transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-[#D8B366] transition-colors">Termos de Uso</a>
              </div>
              <span>© 2025 Todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
