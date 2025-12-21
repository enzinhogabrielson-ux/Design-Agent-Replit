import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check, ChevronDown, MapPin, Calendar, Clock, AlertTriangle } from "lucide-react";
import heroBg from "@assets/bg_lp_1766333835302.png";
import logoEusou from "@assets/logo_erika_1766334069365.png";
import logoErika from "@assets/LOGO_Erika_1766334075618.png";
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

  return (
    <div className="min-h-screen bg-[#070607] text-white overflow-hidden selection:bg-[#D8B366] selection:text-black font-sans">
      
      {/* 1) NAVBAR (Sticky) */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-[#070607]/55 backdrop-blur-md border-b border-[#D8B366]/20 flex items-center transition-all duration-300">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="group">
              <img 
                src={logoEusou} 
                alt="Eusou360" 
                className="h-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
            <a href="#" className="group">
              <img 
                src={logoErika} 
                alt="Erika Crivellari" 
                className="h-6 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-[#D8B366] font-display font-bold text-lg tracking-widest uppercase">
              Governe seus resultados
            </h1>
          </div>

          <button className="flex items-center gap-2 btn-primary h-10 px-6 text-sm font-bold group">
            <span>Garantir minha vaga</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </nav>

      {/* 2) HERO (Cinematic) */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
        {/* Gradient for text contrast - left to right */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#0a0809] via-[#0a0809]/60 to-transparent z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            {/* Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex px-3 py-1.5 rounded-full border border-[#D8B366]/25 bg-[#D8B366]/10 text-[#F6E6C6] text-[11px] font-bold tracking-[0.08em] uppercase">
                  ENCONTRO PRESENCIAL E EXCLUSIVO
                </span>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-2">
                <h1 className="text-5xl md:text-[56px] font-display font-bold text-white leading-[1.05] tracking-tight">
                  Venda não é sorte.<br />É processo.
                </h1>
                <p className="text-2xl md:text-[32px] font-serif italic font-normal text-[#D8B366] leading-[1.15]">
                  Agora, com inteligência artificial a seu favor.
                </p>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-base md:text-lg text-white/80 leading-relaxed font-light max-w-lg">
                Um encontro presencial e exclusivo para Corretores de Seguro de Vida e Distribuidores de Produtos Financeiros que querem controle, previsibilidade e resultado real em vendas.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 text-sm text-white/90 font-light">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                  <MapPin className="w-4 h-4 text-[#D8B366]" /> Orlando
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                  <Calendar className="w-4 h-4 text-[#D8B366]" /> 13 de janeiro
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                  <Clock className="w-4 h-4 text-[#D8B366]" /> 12:30 PM às 5:30 PM
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4 pt-2">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary text-base font-bold px-8">
                    Garanta sua vaga
                  </button>
                  <button className="btn-secondary text-base font-bold px-8">
                    Ver o que vai acontecer
                  </button>
                </div>
                <p className="text-xs text-white/50 uppercase tracking-wider font-medium">
                  Vagas limitadas • Presencial • Condição especial de lançamento
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRANSITION SECTION */}
      <section className="relative py-20 bg-gradient-to-b from-[#070607] to-[#0C0B0D] overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center space-y-8">
          {/* Social Proof Avatars */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D8B366] to-[#B98A3B] border-2 border-[#070607] shadow-lg flex items-center justify-center text-white/80 font-bold"
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="text-sm md:text-base text-white/80 font-light">
              Mais de <span className="font-bold text-white">50 mil corretores</span> já fazem parte dessa transformação
            </p>
          </motion.div>

          {/* Divider Line */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D8B366] to-transparent" />

          {/* Call to Action Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <p className="text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-[#D8B366]">
              Inscrições abertas por tempo limitado
            </p>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight max-w-2xl">
              O que é a <span className="text-[#D8B366]">Sessão Processo & IA</span>?
            </h3>
          </motion.div>

          {/* Decorative Curved Line */}
          <div className="w-24 h-24 mt-8">
            <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 50 20 Q 70 50 50 80"
                stroke="rgba(216,179,102,0.3)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="50" cy="80" r="3" fill="#D8B366" />
            </svg>
          </div>
        </div>
      </section>

      {/* 3) DOR / CONTEXTO */}
      <section id="context" className="py-24 relative border-t border-[#D8B366]/10 bg-[#0C0B0D]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-[38px] font-display font-bold text-white mb-8">
              Você pode até vender bem.
            </motion.h2>

            <motion.div variants={fadeInUp} className="p-8 md:p-10 rounded-[18px] bg-[#131116] border border-[#D8B366]/20 shadow-[0_10px_30px_rgba(0,0,0,0.35)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#D8B366]" />
              
              <p className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed">
                Mas se não tiver <span className="text-[#D8B366] font-semibold">processo, organização e inteligência</span>, você sempre vai depender do improviso.
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
        </div>
      </section>

      {/* 4) O QUE VAI ACONTECER */}
      <section className="py-24 relative bg-[#070607]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="text-[#D8B366] text-xs font-bold tracking-widest uppercase mb-3 block">O que vai acontecer nesse evento</span>
              <h2 className="text-3xl md:text-[38px] font-display font-bold text-white leading-tight max-w-2xl">
                Este não é um evento motivacional. <br />
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
                  className={`p-6 rounded-[18px] bg-[#131116] border border-[#D8B366]/15 hover:border-[#D8B366]/30 hover:bg-[#131116]/80 transition-all duration-300 group ${item.full ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#131116] to-[#D8B366]/5' : ''}`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#D8B366]/10 border border-[#D8B366]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5 text-[#D8B366]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5) BLOCO ESPECIAL - LANÇAMENTO */}
      <section id="launch" className="py-24 relative border-y border-[#D8B366]/10 bg-[#0C0B0D]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D8B366]/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="p-10 md:p-14 rounded-[24px] border border-[#D8B366]/30 bg-gradient-to-b from-[#131116] to-[#070607] shadow-[0_0_60px_rgba(216,179,102,0.05)] text-center md:text-left">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-[#D8B366] text-[#070607] text-xs font-bold uppercase tracking-wider">
                  Exclusivo
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                  Lançamento exclusivo de um <span className="text-[#D8B366]">sistema de IA para corretores</span>
                </h2>
                
                <p className="text-white/80 font-light leading-relaxed">
                  Durante o evento, será apresentado em primeira mão um sistema de inteligência artificial desenvolvido exclusivamente para corretores de seguro de vida e distribuidores de produtos financeiros.
                </p>

                <p className="text-[#D8B366] font-medium pt-2">Um sistema criado para:</p>

                <ul className="space-y-3 text-left">
                  {[
                    "Organizar o processo de vendas",
                    "Dar clareza sobre funil e oportunidades",
                    "Apoiar decisões com dados",
                    "Tirar o corretor do operacional caótico"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#D8B366]" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-start gap-3 p-4 rounded-lg bg-[#E45B5B]/10 border border-[#E45B5B]/20 text-left">
                  <AlertTriangle className="w-5 h-5 text-[#E45B5B] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#E45B5B]/90 font-medium">
                    Esse lançamento é exclusivo para corretores e distribuidores de produtos financeiros
                  </p>
                </div>
              </div>

              <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-[#070607] border border-[#D8B366]/20 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D8B366]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <Sparkles className="w-16 h-16 text-[#D8B366] relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) BENEFÍCIO EXCLUSIVO */}
      <section id="benefit" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-3xl text-center space-y-8">
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Vantagem exclusiva para <span className="text-[#D8B366]">participantes presenciais</span>
          </h2>

          <div className="space-y-6 text-lg text-white/80 font-light leading-relaxed">
            <p>
              Os participantes presenciais do evento terão <strong className="text-white font-semibold">acesso antecipado ao sistema de IA</strong>, além de um benefício especial de lançamento, reservado apenas para quem estiver no encontro em Orlando.
            </p>
            <p>
              Essa condição <span className="underline decoration-[#E45B5B] decoration-2 underline-offset-4">não será disponibilizada online</span> nem após o evento.
            </p>
          </div>

          <p className="text-2xl font-serif italic text-[#D8B366] font-semibold pt-4">
            Quem entende o jogo, garante a vantagem antes dos outros.
          </p>
        </div>
      </section>

      {/* 7) PREÇO */}
      <section id="pricing" className="py-24 relative bg-[#0C0B0D]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 rounded-[24px] overflow-hidden border border-[#D8B366]/20 shadow-2xl">
            {/* Left Panel - Dark */}
            <div className="p-10 md:p-12 bg-[#131116] flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-display font-bold text-white">Investimento</h3>
              <div className="space-y-4 text-white/70 font-light text-sm leading-relaxed">
                <p>O valor real deste evento não é US$ 49,90.</p>
                <p>Pelo conteúdo, pela exclusividade e pelo lançamento do sistema de IA, ele poderia facilmente custar algumas centenas de dólares.</p>
                <p>Mas optamos por um valor simbólico, porque queremos os corretores certos na sala.</p>
              </div>
            </div>

            {/* Right Panel - Gold Highlight */}
            <div className="p-10 md:p-12 bg-gradient-to-b from-[#D8B366]/20 to-[#D8B366]/5 flex flex-col justify-center items-center text-center space-y-6 relative">
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-display font-bold text-[#F6E6C6]">US$ 49,90</p>
                <p className="text-sm font-medium text-[#D8B366] uppercase tracking-wider">Valor especial de lançamento</p>
              </div>
              
              <div className="space-y-2 text-sm text-white/80">
                <p>Presencial • Vagas limitadas</p>
              </div>

              <button className="btn-primary w-full max-w-[200px] text-sm font-bold">
                Garantir minha vaga
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8) INFO FINAIS */}
      <section id="info" className="py-24 relative border-b border-[#D8B366]/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location */}
            <div className="p-8 rounded-[18px] bg-[#131116] border border-white/5 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-[#D8B366]/10 flex items-center justify-center flex-shrink-0 text-[#D8B366]">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">Local do Evento</h3>
                <div className="text-white/70 text-sm space-y-1 font-light">
                  <p className="font-medium text-white">Orlando Public Library</p>
                  <p>101 E. Central Blvd.</p>
                  <p>Orlando, FL 32801</p>
                  <p>Albertson Room</p>
                </div>
              </div>
            </div>

            {/* Date/Time */}
            <div className="p-8 rounded-[18px] bg-[#131116] border border-white/5 flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full bg-[#D8B366]/10 flex items-center justify-center flex-shrink-0 text-[#D8B366]">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">Data e Horário</h3>
                <div className="text-white/70 text-sm space-y-1 font-light">
                  <p className="font-medium text-white">13 de janeiro</p>
                  <p>12:30 PM a 5:30 PM</p>
                  <p className="text-white/50 text-xs pt-2">(Chegada recomendada a partir das 12:00 PM para credenciamento)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9) FAQ */}
      <section id="faq" className="py-24 relative bg-[#070607]">
        <div className="container mx-auto px-6 max-w-3xl">
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
      <section className="py-32 relative overflow-hidden">
        {/* Cinematic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#D8B366]/20 via-[#070607] to-[#070607]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Garanta sua vaga e esteja no lançamento
          </h2>
          <p className="text-xl md:text-2xl font-serif italic text-[#D8B366] mb-12">
            Quem governa o processo, governa o resultado.
          </p>
          
          <button className="btn-primary h-14 px-10 text-lg shadow-[0_0_50px_rgba(216,179,102,0.3)]">
            Garantir minha vaga agora
          </button>
        </div>
      </section>

      {/* 11) CHECKOUT COPY (Pre-checkout Panel) */}
      <section className="py-24 relative bg-[#0C0B0D] border-t border-[#D8B366]/10">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="rounded-[24px] bg-[#131116] border border-[#D8B366]/20 p-8 md:p-10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
              Você está a um passo de garantir sua vaga
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

            <button className="w-full btn-primary h-12 text-sm font-bold">
              Continuar para o pagamento
            </button>
          </div>
        </div>
      </section>

      {/* 12) FOOTER */}
      <footer className="py-16 border-t border-white/5 bg-[#070607]">
        <div className="container mx-auto px-6">
          {/* Logos Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12 pb-12 border-b border-white/10">
            <a href="#" className="group">
              <img 
                src={logoEusou} 
                alt="Eusou360" 
                className="h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
            <a href="#" className="group">
              <img 
                src={logoErika} 
                alt="Erika Crivellari" 
                className="h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          </div>

          {/* Content */}
          <div className="text-center space-y-6">
            <div className="text-[#D8B366] font-display font-bold text-lg">Processo & IA</div>
            <p className="text-white/40 text-sm font-light">Venda não é sorte. É processo.</p>
            
            <div className="flex justify-center gap-8 text-xs text-white/50">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Contato</a>
            </div>
            
            <p className="text-white/30 text-[10px] uppercase tracking-widest">
              Evento presencial • Informações sujeitas a alterações • Vagas limitadas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
