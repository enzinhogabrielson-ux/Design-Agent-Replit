import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, CheckCircle2 } from "lucide-react";
import heroBg from "@assets/generated_images/luxurious_black_and_gold_background_texture.png";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-[#D8B366] selection:text-black">
      <div className="noise-overlay" />

      {/* ===== HERO SECTION - 2 COLUMNS ===== */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-35 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT COLUMN - Text Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp}>
                <span className="badge-gold">Encontro Presencial e Exclusivo</span>
              </motion.div>

              {/* Main Headline */}
              <motion.div variants={fadeInUp}>
                <h1 className="text-5xl md:text-6xl font-sans font-bold leading-tight text-white mb-4">
                  Venda não é sorte.
                  <br />
                  <span className="font-serif-accent text-[#D8B366]">É processo.</span>
                </h1>
              </motion.div>

              {/* Accent Line */}
              <motion.p variants={fadeInUp} className="text-2xl md:text-3xl font-serif-accent text-white/90">
                Agora, com inteligência artificial a seu favor.
              </motion.p>

              {/* Subheadline */}
              <motion.p variants={fadeInUp} className="text-white/80 text-lg leading-relaxed">
                Um encontro presencial e exclusivo para Corretores de Seguro de Vida e Distribuidores de Produtos Financeiros que querem controle, previsibilidade e resultado real em vendas.
              </motion.p>

              {/* Event Details */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 text-sm font-medium text-white/80 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D8B366]" />
                  <span>Orlando</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D8B366]">📅</span>
                  <span>13 de janeiro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D8B366]" />
                  <span>12:30 PM às 5:30 PM</span>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={fadeInUp} className="pt-4">
                <button className="btn-primary text-lg">
                  Garanta sua vaga <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN - Image Placeholder for Erika */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:flex items-center justify-center"
            >
              <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-[#D8B366]/20 via-[#0C0B0D] to-[#070607] rounded-2xl border border-[#D8B366]/30 flex items-center justify-center overflow-hidden group hover:border-[#D8B366]/60 transition-all duration-300">
                {/* Placeholder glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#D8B366]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Placeholder icon */}
                <div className="text-center space-y-4 relative z-10">
                  <div className="w-16 h-16 mx-auto rounded-full border-2 border-[#D8B366]/40 flex items-center justify-center">
                    <span className="text-3xl">📸</span>
                  </div>
                  <p className="text-white/50 text-sm">
                    Adicionar imagem da especialista
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CONTEXT SECTION - A DOR ===== */}
      <section className="py-20 md:py-28 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-sans font-bold text-white mb-8 leading-tight">
              Você pode até vender bem.
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-6 text-white/75 text-lg leading-relaxed">
              <p className="text-white">
                Mas se não tiver <span className="text-white font-semibold">processo, organização e inteligência</span>, você sempre vai depender do improviso.
              </p>

              <div className="glass-card-gold p-8 rounded-2xl border-l-4" style={{ borderLeftColor: '#D8B366' }}>
                <div className="space-y-4">
                  <p className="text-white font-semibold text-base">E improviso não escala.</p>
                  <ul className="space-y-3 text-white/80">
                    <li><span className="text-[#D8B366] font-bold">→</span> <strong>Improviso cansa.</strong> Você gasta energia em operacional caótico.</li>
                    <li><span className="text-[#D8B366] font-bold">→</span> <strong>Improviso custa dinheiro.</strong> Oportunidades perdidas, ciclos longos, sem previsibilidade.</li>
                  </ul>
                </div>
              </div>

              <p className="text-white text-lg">
                Este evento foi criado para quem quer <span className="font-serif-accent text-[#D8B366]">governar seus resultados</span>, não torcer por eles.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== WHAT HAPPENS SECTION ===== */}
      <section className="py-20 md:py-28 relative bg-zinc-950/50 border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-sans font-bold text-white mb-4">
              🚀 O que vai acontecer nesse evento
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-12 font-semibold">
              Este não é um evento motivacional. É um encontro estratégico, onde você vai:
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Entender como processo de vendas gera previsibilidade",
                  desc: "Descubra o sistema que transforma vendas aleatórias em vendas previsíveis."
                },
                {
                  title: "Aprender como planejamento aumenta conversão e ticket médio",
                  desc: "Técnicas e estratégias para aumentar vendas e fechar mais deals."
                },
                {
                  title: "Ver como organização libera tempo e foco",
                  desc: "Saia do operacional caótico e concentre energia nas oportunidades reais."
                },
                {
                  title: "Conhecer como tecnologia, CRM e IA trabalham a seu favor",
                  desc: "Ferramentas práticas para organizar funil, dados e decisões."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="glass-card-gold p-6 md:p-8 rounded-xl group glass-card-hover"
                >
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#D8B366] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-bold mb-2">{item.title}</h3>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#D8B366]/10 via-[#D8B366]/5 to-transparent border border-[#D8B366]/20">
              <p className="text-white text-lg">
                <span className="font-bold">Resultado final:</span> Você muda do jogo: de <span className="text-white">vendedor reativo</span> para <span className="font-serif-accent text-[#D8B366]">gestor do próprio resultado</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== AI LAUNCH SECTION ===== */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex mb-8">
              <span className="badge-gold">🤖 Lançamento Oficial</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-sans font-bold text-white mb-6">
              Lançamento exclusivo de um sistema de IA para corretores
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8 leading-relaxed">
              Durante o evento, será apresentado em <span className="text-white font-semibold">primeira mão</span> um sistema de inteligência artificial desenvolvido exclusivamente para corretores de seguro de vida e distribuidores de produtos financeiros.
            </motion.p>

            <motion.div variants={fadeInUp} className="glass-card-gold p-8 md:p-10 rounded-2xl mb-8 space-y-4">
              <p className="text-white font-bold text-lg">Um sistema criado para:</p>
              <ul className="space-y-3 text-white/80">
                {[
                  "Organizar o processo de vendas",
                  "Dar clareza sobre funil e oportunidades",
                  "Apoiar decisões com dados",
                  "Tirar o corretor do operacional caótico"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D8B366]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-6 md:p-8 rounded-xl border-2 border-[#E45B5B]/30 bg-[#E45B5B]/5">
              <p className="text-white/90 text-base">
                <span className="text-[#E45B5B] font-bold">⚠️ Atenção:</span> Esse lançamento é <span className="font-bold">exclusivo para corretores e distribuidores</span> de produtos financeiros.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== EXCLUSIVE BENEFIT ===== */}
      <section className="py-20 md:py-28 relative bg-zinc-950/50 border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex mb-8">
              <span className="badge-gold">🎁 Benefício Exclusivo</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-sans font-bold text-white mb-8">
              Vantagem para quem comparece presencialmente
            </motion.h2>

            <motion.div variants={fadeInUp} className="glass-card p-8 md:p-10 rounded-2xl border-2 border-[#D8B366]/40 space-y-6">
              <p className="text-white/90 text-lg">
                Os participantes presenciais do evento terão:
              </p>
              <ul className="space-y-3 ml-4 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-[#D8B366] font-bold text-lg">→</span>
                  <span><strong className="text-white">Acesso antecipado</strong> ao sistema de IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D8B366] font-bold text-lg">→</span>
                  <span><strong className="text-white">Benefício especial de lançamento</strong> reservado apenas para quem estiver no encontro em Orlando</span>
                </li>
              </ul>
              <p className="text-white/60 text-sm pt-4 border-t border-white/10">
                ⚠️ Essa condição não será disponibilizada online nem após o evento.
              </p>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-center text-white text-lg font-semibold mt-8">
              <span className="font-serif-accent text-[#D8B366]">Quem entende o jogo, garante a vantagem antes dos outros.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-sans font-bold text-white mb-12 text-center">
              💰 Investimento
            </motion.h2>

            <motion.div variants={fadeInUp} className="glass-card-gold p-10 md:p-12 rounded-2xl text-center space-y-6">
              <div>
                <p className="text-white/70 text-sm uppercase tracking-wider mb-4">O valor real deste evento não é</p>
                <p className="text-white/60 text-lg line-through mb-6">US$ 99,90 - US$ 149,90</p>
                <p className="text-white/80 mb-6 text-base">Pelo conteúdo, pela exclusividade e pelo lançamento do sistema de IA, ele poderia facilmente custar algumas centenas de dólares.</p>
              </div>

              <div className="py-8 border-y border-[#D8B366]/20">
                <p className="text-white/80 mb-6">Mas optamos por um valor simbólico, porque queremos os corretores certos na sala.</p>
                <div className="text-6xl md:text-7xl font-sans font-bold text-white mb-2">
                  US$ <span className="text-gold-gradient">49,90</span>
                </div>
                <p className="text-white/60">Valor especial de lançamento</p>
              </div>

              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D8B366]" />
                  Evento presencial
                </li>
                <li>Vagas limitadas</li>
              </ul>

              <button className="btn-primary w-full md:w-auto text-lg mx-auto block">
                Garanta sua vaga agora <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== EVENT INFO ===== */}
      <section className="py-20 md:py-28 relative bg-zinc-950/50 border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-sans font-bold text-white mb-12">
              📍 Informações do Evento
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="glass-card-gold p-8 rounded-xl">
                <h3 className="text-white font-bold mb-4 text-lg">Local</h3>
                <div className="space-y-2 text-white/75">
                  <p className="font-semibold text-white">Orlando Public Library</p>
                  <p>101 E. Central Blvd.</p>
                  <p>Orlando, FL 32801</p>
                  <p className="text-sm text-white/50">Albertson Room</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="glass-card-gold p-8 rounded-xl">
                <h3 className="text-white font-bold mb-4 text-lg">Data e Horário</h3>
                <div className="space-y-3 text-white/75">
                  <p className="flex items-center gap-2">
                    <span className="text-[#D8B366]">📅</span>
                    <span className="font-semibold text-white">13 de janeiro</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D8B366]" />
                    <span>12:30 PM a 5:30 PM</span>
                  </p>
                  <p className="text-sm text-white/50 pt-2">Chegada recomendada a partir das 12:00 PM para credenciamento</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-sans font-bold text-white mb-6">
              Quem governa o <span className="font-serif-accent text-[#D8B366]">processo,</span>
              <br />
              governa o resultado.
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/70 text-lg mb-8">
              Não perca a oportunidade de estar no lançamento exclusivo do sistema de IA para corretores.
            </motion.p>

            <motion.button variants={fadeInUp} className="btn-primary text-lg">
              Garanta sua vaga em Orlando <ArrowRight className="inline ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/50 text-sm">
            © 2025. Evento exclusivo para Corretores de Seguro de Vida e Distribuidores de Produtos Financeiros.
          </p>
        </div>
      </footer>
    </div>
  );
}
