import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import luxuryBg from "@assets/generated_images/luxury_warm-lit_interior_environment_background.png";
import heroImg from "@assets/generated_images/professional_woman_portrait_cropped_for_hero_section.png";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-[#D8B366] selection:text-black">
      {/* ===== HERO SECTION - CLEAN & MODERN ===== */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={luxuryBg} 
            alt="Luxury background" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0809] via-[#0a0809]/70 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT COLUMN - Minimal Text */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8 max-w-xl"
            >
              {/* Badge - Small and minimal */}
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#D8B366]/20 border border-[#D8B366]/40 text-[#D8B366] backdrop-blur-md">
                  AS PORTAS ESTÃO ABERTAS
                </span>
              </motion.div>

              {/* Main Headline - Bold and Simple */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-sans font-bold leading-[1.15] text-white">
                  Venda não é sorte.
                </h1>
                <p className="text-5xl md:text-6xl font-serif-accent text-white">
                  É <span className="text-[#D8B366]">processo</span>.
                </p>
              </motion.div>

              {/* Subheading - Elegant serif */}
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-serif italic text-white/95 leading-tight">
                Agora, com inteligência artificial a seu favor.
              </motion.p>

              {/* Description - Light copy */}
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-white/75 leading-relaxed font-light">
                Um encontro presencial e exclusivo para Corretores de Seguro de Vida e Distribuidores de Produtos Financeiros que querem controle, previsibilidade e resultado real em vendas.
              </motion.p>

              {/* CTA Button */}
              <motion.div variants={fadeInUp} className="pt-4">
                <button className="btn-primary text-base md:text-lg font-semibold flex items-center gap-2 px-8 py-4">
                  Garanta sua vaga <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>

              {/* Social proof - Avatars and text */}
              <motion.div variants={fadeInUp} className="pt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D8B366] to-[#B98A3B] border-2 border-[#0a0809]"
                    />
                  ))}
                </div>
                <p className="text-xs md:text-sm text-white/70 font-light">
                  Mais de 50 mil mulheres já fizeram parte dessa transformação.
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN - Hero Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              className="hidden md:flex items-center justify-end relative"
            >
              <div className="relative w-80 h-auto">
                {/* Image with subtle glow */}
                <div className="relative z-10 overflow-hidden rounded-2xl">
                  <img 
                    src={heroImg} 
                    alt="Expert" 
                    className="w-full h-auto object-cover drop-shadow-2xl"
                  />
                </div>
                
                {/* Glow effect behind image */}
                <div className="absolute -inset-6 bg-gradient-to-br from-[#D8B366]/20 via-[#D8B366]/5 to-transparent rounded-3xl blur-3xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D8B366]/30 to-transparent z-10" />
      </section>

      {/* ===== SECONDARY SECTIONS START HERE ===== */}
      
      {/* Context Section */}
      <section className="py-28 md:py-32 relative border-t border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-sans font-bold text-white mb-8 leading-tight">
              Você pode até vender bem.
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-8 text-white/80 text-lg leading-relaxed">
              <p className="text-white text-xl">
                Mas se não tiver <span className="text-[#D8B366] font-bold">processo, organização e inteligência</span>, você sempre vai depender do improviso.
              </p>

              <div className="glass-card-gold p-8 md:p-12 rounded-2xl border-l-4 space-y-6" style={{ borderLeftColor: '#D8B366' }}>
                <p className="text-white font-semibold text-lg">E improviso não escala.</p>
                <div className="space-y-4 text-white/85">
                  <div className="flex items-start gap-4">
                    <span className="text-[#D8B366] font-bold text-2xl flex-shrink-0">→</span>
                    <div>
                      <p className="font-bold text-white">Improviso cansa.</p>
                      <p className="text-sm mt-1">Você gasta energia em operacional caótico.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[#D8B366] font-bold text-2xl flex-shrink-0">→</span>
                    <div>
                      <p className="font-bold text-white">Improviso custa dinheiro.</p>
                      <p className="text-sm mt-1">Oportunidades perdidas, ciclos longos, sem previsibilidade.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-white text-xl">
                Este evento foi criado para quem quer <span className="font-serif-accent text-[#D8B366]">governar seus resultados</span>, não torcer por eles.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Happens Section */}
      <section className="py-28 md:py-32 relative border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-sans font-bold text-white mb-8">
              <span className="text-[#D8B366]">🚀</span> O que vai acontecer nesse evento
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/75 text-xl mb-16 font-semibold">
              Este não é um evento motivacional. É um encontro estratégico.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Processo de vendas gera previsibilidade",
                  desc: "Descubra o sistema que transforma vendas aleatórias em vendas previsíveis."
                },
                {
                  title: "Planejamento aumenta conversão e ticket médio",
                  desc: "Técnicas para aumentar vendas e fechar mais deals com estratégia."
                },
                {
                  title: "Organização libera tempo e foco",
                  desc: "Saia do operacional caótico e concentre energia nas oportunidades reais."
                },
                {
                  title: "Tecnologia, CRM e IA trabalham a seu favor",
                  desc: "Ferramentas práticas para organizar funil, dados e decisões."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass-card-gold p-8 rounded-xl group glass-card-hover"
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D8B366] to-[#B98A3B] flex items-center justify-center flex-shrink-0 mt-1 text-white font-bold">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-16 p-10 rounded-2xl bg-gradient-to-r from-[#D8B366]/15 via-[#D8B366]/5 to-transparent border border-[#D8B366]/20">
              <p className="text-white text-xl">
                <span className="font-bold">Resultado final:</span> Você muda do jogo: de <span className="text-white font-semibold">vendedor reativo</span> para <span className="font-serif-accent text-[#D8B366]">gestor do próprio resultado</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Launch Section */}
      <section className="py-28 md:py-32 relative bg-black/30">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex mb-8">
              <span className="badge-gold">🤖 Lançamento Oficial</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-sans font-bold text-white mb-8">
              Lançamento exclusivo de um sistema de <span className="text-gold-gradient">IA para corretores</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/75 text-lg mb-12 leading-relaxed">
              Durante o evento, será apresentado em <span className="text-white font-semibold">primeira mão</span> um sistema de inteligência artificial desenvolvido exclusivamente para corretores de seguro de vida e distribuidores de produtos financeiros.
            </motion.p>

            <motion.div variants={fadeInUp} className="glass-card-gold p-10 md:p-12 rounded-2xl space-y-6 border-[#D8B366]/30">
              <p className="text-white font-bold text-xl">Um sistema criado para:</p>
              <ul className="space-y-4">
                {[
                  "Organizar o processo de vendas",
                  "Dar clareza sobre funil e oportunidades",
                  "Apoiar decisões com dados reais",
                  "Tirar o corretor do operacional caótico"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/85">
                    <div className="w-2 h-2 rounded-full bg-[#D8B366]" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 p-8 rounded-xl border-2 border-[#E45B5B]/40 bg-[#E45B5B]/8">
              <p className="text-white/90 text-base font-medium">
                <span className="text-[#E45B5B] font-bold">⚠️ Atenção:</span> Esse lançamento é <span className="font-bold text-white">exclusivo para corretores e distribuidores</span> de produtos financeiros.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Exclusive Benefit */}
      <section className="py-28 md:py-32 relative border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex mb-8">
              <span className="badge-gold">🎁 Benefício Exclusivo</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-sans font-bold text-white mb-12">
              Vantagem para quem comparece presencialmente
            </motion.h2>

            <motion.div variants={fadeInUp} className="glass-card p-10 md:p-12 rounded-2xl border-2 border-[#D8B366]/40 space-y-8">
              <p className="text-white/90 text-xl font-semibold">
                Os participantes presenciais do evento terão:
              </p>
              <div className="space-y-6 ml-2">
                <div className="flex items-start gap-6">
                  <span className="text-[#D8B366] font-bold text-2xl flex-shrink-0">→</span>
                  <div>
                    <p className="text-white font-bold text-lg">Acesso antecipado</p>
                    <p className="text-white/70 mt-1">ao sistema de IA</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <span className="text-[#D8B366] font-bold text-2xl flex-shrink-0">→</span>
                  <div>
                    <p className="text-white font-bold text-lg">Benefício especial de lançamento</p>
                    <p className="text-white/70 mt-1">reservado apenas para quem estiver no encontro em Orlando</p>
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm pt-6 border-t border-white/10">
                ⚠️ Essa condição não será disponibilizada online nem após o evento.
              </p>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-center text-white text-2xl font-semibold mt-12">
              <span className="font-serif-accent text-[#D8B366]">Quem entende o jogo, garante a vantagem antes dos outros.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-28 md:py-32 relative bg-black/30">
        <div className="container mx-auto px-6 relative z-10">
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

            <motion.div variants={fadeInUp} className="glass-card-gold p-12 md:p-16 rounded-2xl text-center space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D8B366] to-transparent" />
              
              <div className="space-y-4">
                <p className="text-white/60 text-sm uppercase tracking-widest font-semibold">O valor real deste evento não é</p>
                <p className="text-white/50 text-2xl line-through">US$ 99,90 - US$ 149,90</p>
              </div>

              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Pelo conteúdo, pela exclusividade e pelo lançamento do sistema de IA, ele poderia facilmente custar algumas centenas de dólares.
              </p>

              <div className="py-10 border-y border-[#D8B366]/20">
                <p className="text-white/80 mb-8">Mas optamos por um valor simbólico, porque queremos os corretores certos na sala.</p>
                <div className="text-7xl md:text-8xl font-sans font-bold text-white">
                  US$ <span className="text-gold-gradient">49,90</span>
                </div>
                <p className="text-white/60 mt-4 text-lg">Valor especial de lançamento</p>
              </div>

              <button className="btn-primary w-full md:w-auto text-lg font-semibold mx-auto block">
                Garanta sua vaga agora <ArrowRight className="inline ml-3 w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Info */}
      <section className="py-28 md:py-32 relative border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl font-sans font-bold text-white mb-16">
              📍 Informações do Evento
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10">
              <motion.div variants={fadeInUp} className="glass-card-gold p-10 rounded-xl">
                <h3 className="text-white font-bold mb-6 text-2xl">Local</h3>
                <div className="space-y-3 text-white/75">
                  <p className="font-semibold text-white text-lg">Orlando Public Library</p>
                  <p className="text-base">101 E. Central Blvd.</p>
                  <p className="text-base">Orlando, FL 32801</p>
                  <p className="text-sm text-white/50">Albertson Room</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass-card-gold p-10 rounded-xl">
                <h3 className="text-white font-bold mb-6 text-2xl">Data e Horário</h3>
                <div className="space-y-4 text-white/75">
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">📅</span>
                    <span className="font-semibold text-white text-lg">13 de janeiro</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-xl">🕐</span>
                    <span className="text-base">12:30 PM a 5:30 PM</span>
                  </p>
                  <p className="text-sm text-white/50 pt-2">Chegada recomendada a partir das 12:00 PM para credenciamento</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 md:py-32 relative bg-black/30 border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-sans font-bold text-white mb-8 leading-tight">
              Quem governa o <span className="font-serif-accent text-[#D8B366]">processo,</span>
              <br />
              governa o <span className="font-serif-accent text-[#D8B366]">resultado.</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/70 text-xl mb-12">
              Não perca a oportunidade de estar no lançamento exclusivo do sistema de IA para corretores.
            </motion.p>

            <motion.button variants={fadeInUp} className="btn-primary text-lg font-semibold">
              Garanta sua vaga em Orlando <ArrowRight className="inline ml-3 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-black/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/50 text-sm">
            © 2025. Evento exclusivo para Corretores de Seguro de Vida e Distribuidores de Produtos Financeiros.
          </p>
        </div>
      </footer>
    </div>
  );
}
