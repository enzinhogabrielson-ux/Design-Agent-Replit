import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import luxuryBg from "@assets/generated_images/luxury_warm-lit_interior_environment_background.png";
import heroImg from "@assets/generated_images/professional_woman_portrait_cropped_for_hero_section.png";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } }
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

  const floatAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-[#D8B366] selection:text-black">
      {/* ===== HERO SECTION - PREMIUM & INTERACTIVE ===== */}
      <section className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={luxuryBg} 
            alt="Luxury background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0809] via-[#0a0809]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0809]/40 via-transparent to-[#0a0809]/60" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* LEFT COLUMN - Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8 max-w-xl"
            >
              {/* Premium Badge */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center gap-2 inline-flex px-4 py-2 rounded-full backdrop-blur-sm border border-[#D8B366]/40 bg-[#D8B366]/12 hover:bg-[#D8B366]/18 transition-all duration-300 cursor-default group">
                  <Sparkles className="w-4 h-4 text-[#D8B366] group-hover:animate-spin transition-transform" />
                  <span className="text-xs font-bold tracking-widest uppercase text-[#F6E6C6]">AS PORTAS ESTÃO ABERTAS</span>
                </div>
              </motion.div>

              {/* Main Headline - Dynamic Typography */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="heading-hero text-white leading-[1.05]">
                  <div>Venda não é</div>
                  <div className="relative inline-block">
                    sorte.
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#D8B366] via-[#F6E6C6] to-[#D8B366] rounded-full blur-sm" />
                  </div>
                </div>
              </motion.div>

              {/* Accent Line Headline */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-5xl md:text-6xl font-serif italic font-bold text-white/95 leading-tight">
                  É <span className="text-gold-gradient">processo.</span>
                </h2>
              </motion.div>

              {/* Subheading */}
              <motion.p variants={fadeInUp} className="text-lg md:text-xl font-light text-white/80 leading-relaxed tracking-wide">
                Agora, com <span className="text-[#D8B366] font-semibold">inteligência artificial</span> a seu favor.
              </motion.p>

              {/* Description */}
              <motion.p variants={fadeInUp} className="text-base text-white/70 leading-relaxed font-light">
                Um encontro presencial e exclusivo para Corretores de Seguro de Vida e Distribuidores de Produtos Financeiros que querem <span className="text-white font-semibold">controle, previsibilidade e resultado</span> real em vendas.
              </motion.p>

              {/* CTA Button Group */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="btn-primary text-base font-bold">
                  Garanta sua vaga <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </motion.div>

              {/* Social Proof */}
              <motion.div variants={fadeInUp} className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D8B366] to-[#B98A3B] border-2 border-[#0a0809] shadow-lg transition-transform duration-300"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-white/75 font-light">
                    <span className="font-semibold text-white">+50 mil</span> mulheres já transformaram sua jornada
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN - Hero Image with Interactive Effects */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              className="hidden md:flex items-center justify-end relative"
            >
              <div className="relative w-80 h-auto">
                {/* Glow background */}
                <div className="absolute -inset-8 bg-gradient-to-br from-[#D8B366]/25 via-[#D8B366]/10 to-transparent rounded-3xl blur-3xl transition-all duration-500 -z-10" />
                
                {/* Image container with interactive border */}
                <div className="relative z-10 overflow-hidden rounded-2xl border border-[#D8B366]/30 transition-all duration-500 shadow-2xl">
                  <img 
                    src={heroImg} 
                    alt="Expert" 
                    className="w-full h-auto object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809]/40 via-transparent to-transparent transition-all duration-500" />
                </div>

                {/* Floating accent particles */}
                <div className="absolute top-10 -right-10 w-20 h-20 bg-[#D8B366]/20 rounded-full blur-2xl" />
                <div className="absolute bottom-20 left-0 w-32 h-32 bg-[#D8B366]/10 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D8B366]/40 to-transparent z-10" />
      </section>

      {/* ===== CONTEXT SECTION ===== */}
      <section className="py-32 md:py-40 relative border-t border-white/5 bg-gradient-to-b from-black/0 to-black/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="heading-section text-white mb-10">
              Você pode até vender bem.
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-8 text-white/80 text-lg leading-relaxed">
              <p className="text-xl text-white font-light">
                Mas se não tiver <span className="text-[#D8B366] font-bold">processo, organização e inteligência</span>, você sempre vai depender do improviso.
              </p>

              <div className="glass-card-gold glass-card-hover p-10 md:p-12 rounded-2xl border-l-4 space-y-6" style={{ borderLeftColor: '#D8B366' }}>
                <p className="text-white font-semibold text-lg">E improviso não escala.</p>
                <div className="space-y-5 text-white/85">
                  {[
                    { title: "Improviso cansa.", desc: "Você gasta energia em operacional caótico." },
                    { title: "Improviso custa dinheiro.", desc: "Oportunidades perdidas, ciclos longos, sem previsibilidade." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-2xl text-[#D8B366] transition-transform duration-300 flex-shrink-0">→</span>
                      <div>
                        <p className="font-bold text-white">{item.title}</p>
                        <p className="text-sm mt-1 text-white/70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xl text-white font-light">
                Este evento foi criado para quem quer <span className="font-serif italic text-[#D8B366] font-semibold">governar seus resultados</span>, não torcer por eles.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== WHAT HAPPENS SECTION ===== */}
      <section className="py-32 md:py-40 relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D8B366]" />
              <span className="text-sm font-bold tracking-widest uppercase text-[#D8B366]">O que vai acontecer</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="heading-section text-white mb-6">
              Um encontro estratégico, não motivacional.
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-white/70 mb-16 max-w-2xl font-light">
              Descubra como transformar vendas aleatórias em vendas previsíveis através de um sistema comprovado.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: "📊",
                  title: "Processo de vendas",
                  desc: "Transforma vendas aleatórias em vendas previsíveis e mensuráveis."
                },
                {
                  icon: "📈",
                  title: "Planejamento estratégico",
                  desc: "Aumenta conversão e ticket médio com técnicas comprovadas."
                },
                {
                  icon: "⏱️",
                  title: "Organização libera tempo",
                  desc: "Saia do operacional caótico e concentre força nas oportunidades."
                },
                {
                  icon: "🤖",
                  title: "IA e Tecnologia",
                  desc: "Ferramentas práticas para organizar funil, dados e decisões."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass-card-gold glass-card-hover p-8 rounded-xl"
                >
                  <div className="text-4xl mb-4 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-16 p-10 rounded-2xl bg-gradient-to-r from-[#D8B366]/15 via-[#D8B366]/5 to-transparent border border-[#D8B366]/25 relative overflow-hidden">
              <p className="text-white text-lg font-light relative z-10">
                <span className="text-[#D8B366] font-semibold">Resultado:</span> Você passa de <span className="text-white font-semibold">vendedor reativo</span> para <span className="font-serif italic text-[#D8B366] font-bold">gestor do próprio resultado.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== AI LAUNCH SECTION ===== */}
      <section className="py-32 md:py-40 relative bg-gradient-to-b from-black/30 to-black/0 border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D8B366]/12 border border-[#D8B366]/40 backdrop-blur-sm">
              <span className="text-lg">🤖</span>
              <span className="text-xs font-bold tracking-widest uppercase text-[#D8B366]">Lançamento Exclusivo</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="heading-section text-white mb-8">
              Sistema de IA para <span className="text-gold-gradient">corretores de vida</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-white/75 mb-12 leading-relaxed font-light max-w-2xl">
              Será apresentado em <span className="text-white font-semibold">primeira mão</span> um sistema de inteligência artificial desenvolvido exclusivamente para corretores e distribuidores.
            </motion.p>

            <motion.div variants={fadeInUp} className="glass-card-gold glass-card-hover p-12 rounded-2xl space-y-8 border-[#D8B366]/30">
              <p className="text-white font-bold text-lg">Criado para:</p>
              <div className="space-y-4">
                {[
                  "Organizar o processo de vendas com precisão",
                  "Dar visibilidade real sobre funil e oportunidades",
                  "Apoiar decisões com dados concretos",
                  "Tirar o corretor do operacional caótico"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-[#D8B366] flex-shrink-0 mt-1 transition-transform" />
                    <span className="text-white/85 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 p-8 rounded-xl border-2 border-[#E45B5B]/40 bg-[#E45B5B]/8 hover:bg-[#E45B5B]/12 transition-colors duration-300">
              <p className="text-white/90 text-base font-light">
                <span className="text-[#E45B5B] font-bold">⚠️ Atenção:</span> Esse lançamento é <span className="font-semibold text-white">exclusivo para corretores e distribuidores</span> de produtos financeiros.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== EXCLUSIVE BENEFIT ===== */}
      <section className="py-32 md:py-40 relative border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D8B366]/12 border border-[#D8B366]/40 backdrop-blur-sm">
              <span className="text-lg">🎁</span>
              <span className="text-xs font-bold tracking-widest uppercase text-[#D8B366]">Vantagem Presencial</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="heading-section text-white mb-12">
              Quem participa presencialmente ganha tudo.
            </motion.h2>

            <motion.div variants={fadeInUp} className="glass-card glass-card-hover p-12 rounded-2xl space-y-8">
              <p className="text-white/90 text-lg font-light">Os participantes presenciais terão:</p>
              <div className="space-y-6">
                {[
                  { title: "Acesso antecipado", desc: "ao sistema de IA" },
                  { title: "Benefício especial de lançamento", desc: "reservado apenas para Orlando" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <span className="text-[#D8B366] font-bold text-2xl transition-transform">→</span>
                    <div>
                      <p className="text-white font-bold text-lg">{item.title}</p>
                      <p className="text-white/70 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-sm pt-6 border-t border-white/10">
                ⚠️ Essa condição não será disponibilizada online nem após o evento.
              </p>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-center text-white text-2xl md:text-3xl font-light mt-16">
              Quem entende o jogo,
              <br />
              <span className="font-serif italic text-[#D8B366] font-bold">garante a vantagem antes dos outros.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-32 md:py-40 relative bg-gradient-to-b from-black/0 to-black/30 border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-sans font-bold text-white mb-16 text-center">
              <span className="text-[#D8B366]">💰</span> Investimento
            </motion.h2>

            <motion.div variants={fadeInUp} className="glass-card-gold glass-card-hover p-14 md:p-16 rounded-2xl text-center space-y-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D8B366] to-transparent" />
              
              <div className="space-y-4">
                <p className="text-white/60 text-sm uppercase tracking-widest font-light">O valor real deste evento não é</p>
                <p className="text-white/50 text-2xl line-through font-light">US$ 99,90 - US$ 149,90</p>
              </div>

              <p className="text-white/80 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                Pelo conteúdo, exclusividade e lançamento da IA, poderia custar centenas de dólares. Mas escolhemos um valor simbólico.
              </p>

              <div className="py-12 border-y border-[#D8B366]/20">
                <p className="text-white/80 mb-8 font-light">Porque queremos os corretores certos na sala.</p>
                <div className="text-8xl md:text-9xl font-sans font-bold text-white mb-4">
                  US$ <span className="text-gold-gradient">49,90</span>
                </div>
                <p className="text-white/60 text-lg font-light">Valor especial de lançamento</p>
              </div>

              <button className="btn-primary w-full text-lg font-bold">
                Garanta sua vaga <ArrowRight className="inline ml-3 w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== EVENT INFO ===== */}
      <section className="py-32 md:py-40 relative border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="heading-section text-white mb-16">
              📍 Informações do Evento
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Local",
                  items: [
                    "Orlando Public Library",
                    "101 E. Central Blvd.",
                    "Orlando, FL 32801",
                    "Albertson Room"
                  ]
                },
                {
                  title: "Data e Horário",
                  items: [
                    "📅 13 de janeiro",
                    "🕐 12:30 PM a 5:30 PM",
                    "🚪 Chegada às 12:00 PM"
                  ]
                }
              ].map((group, i) => (
                <motion.div key={i} variants={fadeInUp} className="glass-card-gold glass-card-hover p-10 rounded-xl">
                  <h3 className="text-white font-bold mb-8 text-lg">{group.title}</h3>
                  <div className="space-y-3 text-white/75">
                    {group.items.map((item, j) => (
                      <p key={j} className="text-base leading-relaxed font-light">{item}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-32 md:py-40 relative bg-gradient-to-b from-black/30 to-black/0 border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-sans font-bold text-white mb-8 leading-tight">
              Quem governa o <span className="font-serif italic text-[#D8B366]">processo,</span>
              <br />
              governa o <span className="font-serif italic text-[#D8B366]">resultado.</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/70 text-xl mb-12 font-light leading-relaxed">
              Não perca a oportunidade de estar no lançamento exclusivo do sistema de IA para corretores de vida.
            </motion.p>

            <motion.button variants={fadeInUp} className="btn-primary text-lg font-bold mx-auto">
              Garanta sua vaga em Orlando <ArrowRight className="inline ml-3 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-16 border-t border-white/5 bg-black/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/50 text-sm font-light">
            © 2025. Evento exclusivo para Corretores de Seguro de Vida e Distribuidores de Produtos Financeiros.
          </p>
        </div>
      </footer>
    </div>
  );
}
