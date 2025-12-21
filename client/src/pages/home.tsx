import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check, ChevronDown } from "lucide-react";
import luxuryBg from "@assets/generated_images/luxury_warm-lit_interior_environment_background.png";
import heroImg from "@assets/generated_images/professional_woman_portrait_cropped_for_hero_section.png";
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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-[#D8B366] selection:text-black">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
        {/* Background */}
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT COLUMN - Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8 max-w-xl"
            >
              {/* Main Headline */}
              <motion.div variants={fadeInUp}>
                <h1 className="text-6xl md:text-7xl font-sans font-black text-white leading-[1.1]">
                  Venda não é sorte.<br />É processo.
                </h1>
              </motion.div>

              {/* Subheading with gold accent */}
              <motion.div variants={fadeInUp}>
                <p className="text-2xl md:text-3xl font-serif italic font-normal text-[#D8B366] leading-relaxed">
                  Agora, com inteligência<br />artificial a seu favor.
                </p>
              </motion.div>

              {/* Description */}
              <motion.p variants={fadeInUp} className="text-base text-white/75 leading-relaxed font-light max-w-2xl">
                Um encontro presencial e exclusivo para Corretores de Seguro de Vida e Distribuidores de Produtos Financeiros que querem controle, previsibilidade e resultado real em vendas.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="btn-primary text-base font-bold px-8 py-3">
                  Garanta sua vaga <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button className="px-8 py-3 rounded-full border-2 border-white/30 text-white font-semibold hover:border-white/60 hover:bg-white/5 transition-all duration-300">
                  Ver o que vai acontecer
                </button>
              </motion.div>

              {/* Bottom info text */}
              <motion.p variants={fadeInUp} className="text-sm text-white/60 font-light">
                Vagas limitadas • Presencial • Condição especial de lançamento
              </motion.p>
            </motion.div>

            {/* RIGHT COLUMN - Hero Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="hidden md:flex items-center justify-end"
            >
              <div className="relative w-80 h-auto">
                {/* Glow background */}
                <div className="absolute -inset-8 bg-gradient-to-br from-[#D8B366]/25 via-[#D8B366]/10 to-transparent rounded-3xl blur-3xl -z-10" />
                
                {/* Image container */}
                <div className="relative z-10 overflow-hidden rounded-2xl border border-[#D8B366]/30 shadow-2xl">
                  <img 
                    src={heroImg} 
                    alt="Expert" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809]/40 via-transparent to-transparent" />
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
      <section className="py-20 md:py-28 relative border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-sans font-bold text-white mb-12">
              Você pode até vender bem.
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-8">
              <p className="text-lg text-white/75 leading-relaxed font-light max-w-2xl">
                Mas se não tiver <span className="text-[#D8B366] font-bold">processo, organização e inteligência</span>, você sempre vai depender do improviso.
              </p>

              <div className="glass-card-gold glass-card-hover p-10 md:p-12 rounded-2xl border border-[#D8B366]/30 space-y-6">
                <p className="text-white font-semibold text-lg">E improviso não escala.</p>
                <div className="space-y-4">
                  {[
                    { title: "Improviso cansa.", desc: "Você gasta energia em operacional caótico." },
                    { title: "Improviso custa dinheiro.", desc: "Oportunidades perdidas, ciclos longos, sem previsibilidade." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="text-2xl text-[#D8B366] flex-shrink-0">→</span>
                      <div>
                        <p className="font-bold text-white">{item.title}</p>
                        <p className="text-sm mt-1 text-white/70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-lg text-white/75 leading-relaxed font-light">
                Este evento foi criado para quem quer <span className="font-serif italic text-[#D8B366] font-semibold">governar seus resultados</span>, não torcer por eles.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== WHAT HAPPENS SECTION ===== */}
      <section className="py-20 md:py-28 relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-8 inline-flex items-center gap-2">
              <span className="text-sm font-bold tracking-widest uppercase text-[#D8B366]">O que vai acontecer</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-sans font-bold text-white mb-8">
              Um encontro estratégico, não motivacional.
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-white/70 mb-12 max-w-2xl font-light">
              Descubra como transformar vendas aleatórias em vendas previsíveis através de um sistema comprovado.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
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
                  className="glass-card-gold glass-card-hover p-8 rounded-xl border border-[#D8B366]/30"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="p-10 rounded-2xl bg-gradient-to-r from-[#D8B366]/15 via-[#D8B366]/5 to-transparent border border-[#D8B366]/25">
              <p className="text-white text-lg font-light">
                <span className="text-[#D8B366] font-semibold">Resultado:</span> Você passa de <span className="text-white font-semibold">vendedor reativo</span> para <span className="font-serif italic text-[#D8B366] font-bold">gestor do próprio resultado.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== AI LAUNCH SECTION ===== */}
      <section className="py-20 md:py-28 relative border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D8B366]/12 border border-[#D8B366]/40 backdrop-blur-sm">
                <span className="text-lg">🤖</span>
                <span className="text-xs font-bold tracking-widest uppercase text-[#D8B366]">Lançamento Exclusivo</span>
              </div>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-sans font-bold text-white mb-8">
              Sistema de IA para <span className="text-[#D8B366]">corretores de vida</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-lg text-white/75 mb-12 leading-relaxed font-light max-w-2xl">
              Será apresentado em <span className="text-white font-semibold">primeira mão</span> um sistema de inteligência artificial desenvolvido exclusivamente para corretores e distribuidores.
            </motion.p>

            <motion.div variants={fadeInUp} className="glass-card-gold glass-card-hover p-12 rounded-2xl space-y-8 border border-[#D8B366]/30">
              <p className="text-white font-bold text-lg">Criado para:</p>
              <div className="space-y-4">
                {[
                  "Organizar o processo de vendas com precisão",
                  "Dar visibilidade real sobre funil e oportunidades",
                  "Apoiar decisões com dados concretos",
                  "Tirar o corretor do operacional caótico"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-[#D8B366] flex-shrink-0 mt-1" />
                    <span className="text-white/85 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 p-8 rounded-xl border-2 border-[#E45B5B]/40 bg-[#E45B5B]/8">
              <p className="text-white/90 text-base font-light">
                <span className="text-[#E45B5B] font-bold">⚠️ Atenção:</span> Esse lançamento é <span className="font-semibold text-white">exclusivo para corretores e distribuidores</span> de produtos financeiros.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== EXCLUSIVE BENEFIT ===== */}
      <section className="py-20 md:py-28 relative border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D8B366]/12 border border-[#D8B366]/40 backdrop-blur-sm">
                <span className="text-lg">🎁</span>
                <span className="text-xs font-bold tracking-widest uppercase text-[#D8B366]">Vantagem Presencial</span>
              </div>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-sans font-bold text-white mb-12">
              Quem participa presencialmente ganha tudo.
            </motion.h2>

            <motion.div variants={fadeInUp} className="glass-card glass-card-hover p-12 rounded-2xl space-y-8 border border-white/20">
              <p className="text-white/90 text-lg font-light">Os participantes presenciais terão:</p>
              <div className="space-y-6">
                {[
                  { title: "Acesso antecipado", desc: "ao sistema de IA" },
                  { title: "Benefício especial de lançamento", desc: "reservado apenas para Orlando" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <span className="text-[#D8B366] font-bold text-2xl">→</span>
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
      <section className="py-20 md:py-28 relative border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-sans font-bold text-white mb-12">
              Especifique opções - <span className="text-[#D8B366]">confira os valores</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "US$ 49,90",
                  subtitle: "Valor especial de lançamento",
                  features: [
                    "Acesso ao evento presencial",
                    "Material exclusivo do evento",
                    "Networking com especialistas"
                  ]
                },
                {
                  title: "US$ 49,90",
                  subtitle: "Valor especial de lançamento",
                  features: [
                    "Tudo do plano anterior +",
                    "Acesso antecipado ao sistema de IA",
                    "Benefício especial de lançamento"
                  ],
                  highlight: true
                }
              ].map((plan, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`glass-card-gold glass-card-hover p-12 rounded-2xl border ${plan.highlight ? 'border-[#D8B366]/60 bg-[#D8B366]/10' : 'border-[#D8B366]/30'}`}
                >
                  <div className="text-5xl font-bold text-white mb-2">{plan.title}</div>
                  <p className="text-white/60 text-sm mb-8">{plan.subtitle}</p>
                  <div className="space-y-3 mb-10">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#D8B366] flex-shrink-0 mt-0.5" />
                        <span className="text-white/85 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${plan.highlight ? 'btn-primary' : 'border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/5'}`}>
                    Garanta sua vaga <ArrowRight className="inline ml-2 w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== EVENT INFO ===== */}
      <section className="py-20 md:py-28 relative border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-sans font-bold text-white mb-12">
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
                <motion.div key={i} variants={fadeInUp} className="glass-card-gold glass-card-hover p-10 rounded-xl border border-[#D8B366]/30">
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

      {/* ===== FAQ SECTION ===== */}
      <section className="py-20 md:py-28 relative border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-sans font-bold text-white mb-12">
              Perguntas frequentes
            </motion.h2>

            <div className="space-y-4">
              {[
                { q: "Como faço para confirmar minha presença?", a: "Após a compra, você receberá um email com instruções de confirmação e acesso aos materiais do evento." },
                { q: "Posso assistir online?", a: "Este evento é presencial apenas. Não haverá transmissão online ou gravação disponível após o evento." },
                { q: "Qual é a política de reembolso?", a: "Oferecemos reembolso total em até 7 dias antes do evento. Após esse período, o ingresso não é reembolsável." },
                { q: "Vou receber material do evento?", a: "Sim, participantes presenciais recebem material exclusivo e acesso antecipado ao sistema de IA." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/8 transition-all duration-300 text-left"
                  >
                    <span className="text-white font-semibold">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#D8B366] transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFaq === i && (
                    <div className="p-6 bg-white/3 border border-white/10 border-t-0 rounded-b-lg">
                      <p className="text-white/75 font-light">{item.a}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 md:py-28 relative border-b border-white/5">
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
      <footer className="py-16 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/50 text-sm font-light">
            © 2025. Evento exclusivo para Corretores de Seguro de Vida e Distribuidores de Produtos Financeiros.
          </p>
        </div>
      </footer>
    </div>
  );
}
