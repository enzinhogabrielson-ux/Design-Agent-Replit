import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Users, Zap, TrendingUp, AlertCircle, Check } from "lucide-react";
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

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-35 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex">
              <span className="badge-gold">
                <span className="text-lg">🔥</span>
                Evento Exclusivo
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] text-white mb-4">
                Venda não é sorte.
              </h1>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-6">
                <span className="text-gold-gradient">É processo.</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-white/90">
                Agora, com inteligência artificial a seu favor.
              </h2>
            </motion.div>

            {/* Event Details Badge */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 text-sm font-medium text-white/80 md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#D8B366]" />
                Orlando
              </div>
              <div className="hidden sm:block w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#D8B366]" />
                13 de janeiro
              </div>
              <div className="hidden sm:block w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#D8B366]" />
                12:30 PM às 5:30 PM
              </div>
            </motion.div>

            {/* Subheadline */}
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/75 max-w-3xl leading-relaxed">
              Um encontro presencial e exclusivo para Corretores de Seguro de Vida e Distribuidores de Produtos Financeiros que querem controle, previsibilidade e resultado real em vendas.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <button className="btn-primary text-lg">
                Garanta sua vaga <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <p className="text-xs text-white/50 mt-3">Vagas limitadas | Acesso antecipado ao sistema de IA exclusivo</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTEXT SECTION - A Dor */}
      <section className="py-20 md:py-28 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 leading-[1.2]">
                Você pode até vender bem.
              </h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <motion.p variants={fadeInUp}>
                  Mas se não tiver <span className="text-white font-semibold">processo, organização e inteligência</span>, você sempre vai depender do improviso.
                </motion.p>
                <motion.div variants={fadeInUp} className="glass-card-gold p-8 rounded-2xl border-l-4" style={{ borderLeftColor: '#D8B366' }}>
                  <p className="text-white font-semibold mb-4">E improviso não escala.</p>
                  <ul className="space-y-3 text-white/75">
                    <li className="flex items-start gap-3">
                      <span className="text-[#D8B366] mt-1">→</span>
                      <span><strong>Improviso cansa.</strong> Você gasta energia em operacional caótico.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D8B366] mt-1">→</span>
                      <span><strong>Improviso custa dinheiro.</strong> Oportunidades perdidas, ciclos longos, sem previsibilidade.</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.p variants={fadeInUp} className="text-white">
                  Este evento foi criado para quem quer <span className="text-gold-gradient font-bold">governar seus resultados</span>, não torcer por eles.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT HAPPENS SECTION */}
      <section className="py-20 md:py-28 relative bg-zinc-950/50 border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-white mb-12">
              🚀 O que vai acontecer nesse evento
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8 font-semibold">
              Este não é um evento motivacional. É um encontro estratégico, onde você vai:
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Entender como processo gera previsibilidade",
                  desc: "Descubra o sistema que transforma vendas aleatórias em vendas previsíveis."
                },
                {
                  title: "Aprender como planejamento aumenta conversão",
                  desc: "Técnicas e estratégias para aumentar ticket médio e fechar mais deals."
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
                    <div className="text-2xl">✓</div>
                    <div>
                      <h3 className="text-white font-bold mb-2">{item.title}</h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#D8B366]/10 via-[#D8B366]/5 to-transparent border border-[#D8B366]/20">
              <p className="text-white font-bold text-lg mb-3">Resultado final:</p>
              <p className="text-white/90 text-lg">
                Você muda do jogo: de <span className="text-white">vendedor reativo</span> para <span className="text-gold-gradient font-bold">gestor do próprio resultado</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI LAUNCH SECTION */}
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
              <span className="badge-gold">
                <Zap className="w-4 h-4" />
                Lançamento Oficial
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Sistema de IA para Corretores
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8">
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
                    <Check className="w-5 h-5 text-[#D8B366]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-6 md:p-8 rounded-xl border-2 border-[#E45B5B]/30 bg-[#E45B5B]/5 flex gap-4">
              <AlertCircle className="w-6 h-6 text-[#E45B5B] flex-shrink-0 mt-1" />
              <div>
                <p className="text-[#E45B5B] font-bold text-sm uppercase mb-1">Atenção</p>
                <p className="text-white/80">
                  Esse lançamento é <span className="font-bold">exclusivo para corretores e distribuidores</span> de produtos financeiros.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EXCLUSIVE BENEFIT */}
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
              <span className="badge-gold">
                <span className="text-lg">🎁</span>
                Benefício Exclusivo
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
              Vantagem para quem comparece presencialmente
            </motion.h2>

            <motion.div variants={fadeInUp} className="glass-card p-8 md:p-10 rounded-2xl border-2 border-[#D8B366]/40">
              <div className="space-y-4">
                <p className="text-white/90 text-lg">
                  Os participantes presenciais do evento terão:
                </p>
                <ul className="space-y-3 ml-4 text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D8B366] font-bold">→</span>
                    <span><strong className="text-white">Acesso antecipado</strong> ao sistema de IA</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D8B366] font-bold">→</span>
                    <span><strong className="text-white">Benefício especial de lançamento</strong> reservado apenas para quem estiver no encontro em Orlando</span>
                  </li>
                </ul>
                <p className="text-white/60 text-sm pt-4 border-t border-white/10">
                  ⚠️ Essa condição não será disponibilizada online nem após o evento.
                </p>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-center text-white text-lg font-bold mt-8">
              <span className="text-gold-gradient">Quem entende o jogo, garante a vantagem antes dos outros.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">
              💰 Investimento
            </motion.h2>

            <motion.div variants={fadeInUp} className="glass-card-gold p-10 md:p-12 rounded-2xl text-center space-y-6 gold-shine">
              <div>
                <p className="text-white/70 text-sm uppercase tracking-wider mb-4">O valor real deste evento não é</p>
                <p className="text-white/60 text-lg line-through mb-6">US$ 99,90 - US$ 149,90</p>
                <p className="text-white/80 mb-6">Pelo conteúdo, pela exclusividade e pelo lançamento do sistema de IA, ele poderia facilmente custar algumas centenas de dólares.</p>
              </div>

              <div className="py-8 border-y border-[#D8B366]/20">
                <p className="text-white/80 mb-4">Mas optamos por um valor simbólico, porque queremos os corretores certos na sala.</p>
                <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2">
                  US$ <span className="text-gold-gradient">49,90</span>
                </div>
                <p className="text-white/60">Valor especial de lançamento</p>
              </div>

              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D8B366]" />
                  Evento presencial
                </li>
                <li className="flex items-center justify-center gap-2">
                  <Users className="w-4 h-4 text-[#D8B366]" />
                  Vagas limitadas
                </li>
              </ul>

              <button className="btn-primary w-full md:w-auto text-lg mx-auto block">
                Garanta sua vaga agora <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EVENT INFO */}
      <section className="py-20 md:py-28 relative bg-zinc-950/50 border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-display font-bold text-white mb-12">
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
                <div className="space-y-2 text-white/75">
                  <p className="flex items-center gap-2">
                    <span className="text-[#D8B366]">📅</span>
                    <span className="font-semibold text-white">13 de janeiro</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#D8B366]">⏰</span>
                    <span>12:30 PM a 5:30 PM</span>
                  </p>
                  <p className="text-sm text-white/50 pt-2">Chegada recomendada a partir das 12:00 PM para credenciamento</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              <span className="text-gold-gradient">Quem governa o processo,</span>
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

      {/* FOOTER */}
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

function Calendar(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}
