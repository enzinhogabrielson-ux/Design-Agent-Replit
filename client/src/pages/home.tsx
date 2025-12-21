import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Star, Users, Heart, Sparkles, Shield } from "lucide-react";
import heroBg from "@assets/generated_images/luxurious_black_and_gold_background_texture.png";
import elegantWoman from "@assets/stock_images/elegant_professional_c3691b22.jpg";

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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-[#D8B366] selection:text-black">
      <div className="noise-overlay" />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-subtle bg-gold-subtle/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8B366]" />
              <span className="text-xs font-medium tracking-widest uppercase text-[#F6E6C6]">As Portas Estão Abertas</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-white">
              Reencontre sua <br />
              <span className="text-gold-gradient">Força e Propósito</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              A Casa de Isabel é o lugar onde mulheres cristãs são acolhidas, ensinadas e guiadas à vida que Deus sonhou para elas.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 items-start">
              <Button 
                size="lg" 
                className="h-14 px-8 rounded-full bg-gold-gradient text-black font-bold text-base shadow-[0_0_20px_rgba(216,179,102,0.3)] hover:shadow-[0_0_30px_rgba(216,179,102,0.5)] hover:scale-105 transition-all duration-300"
              >
                QUERO ME TORNAR ALUNA <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center overflow-hidden">
                     <Users className="w-5 h-5 text-white/20" /> 
                  </div>
                ))}
              </div>
              <div className="text-sm text-white/60">
                Mais de <span className="text-white font-semibold">50 mil mulheres</span> já fazem parte.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="conheça" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={elegantWoman} 
                  alt="Founder" 
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Decorative elements behind image */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#D8B366]/30 rounded-2xl z-0" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D8B366]/10 blur-[100px] rounded-full z-0" />
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#D8B366]" />
                <span className="text-[#D8B366] text-sm font-semibold tracking-widest uppercase">O Que É a Casa?</span>
              </motion.div>
              
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
                Mais do que aulas, um <span className="italic text-gold-gradient">ambiente de cura.</span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mb-6 leading-relaxed">
                A Casa de Isabel é uma plataforma de ensino e acolhimento espiritual para mulheres que desejam viver uma fé madura, restaurar sua intimidade com Deus e caminhar com propósito.
              </motion.p>
              
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Aqui, sua jornada com Deus é levada a sério e sua identidade como mulher cristã é fortalecida todos os dias. Uma transformação para a alma, para a mente e para o lar.
              </motion.p>

              <motion.div variants={fadeInUp}>
                 <Button variant="outline" className="rounded-full border-[#D8B366]/40 text-[#F6E6C6] hover:bg-[#D8B366]/10 h-12 px-8">
                    Conheça Nossa Metodologia
                 </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES / BENEFITS GRID */}
      <section id="para-quem-é" className="py-24 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,179,102,0.05),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Para quem é a Casa de Isabel?</h2>
            <p className="text-muted-foreground">Se você busca profundidade e direção, este é o seu lugar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Cura Emocional",
                desc: "Para mulheres que precisam superar feridas do passado e encontrar paz em Deus."
              },
              {
                icon: Sparkles,
                title: "Fé Madura",
                desc: "Para quem deseja sair do raso e construir um relacionamento íntimo e real com o Criador."
              },
              {
                icon: Shield,
                title: "Propósito Claro",
                desc: "Para quem sente que tem um chamado, mas não sabe por onde começar a caminhar."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card glass-card-hover p-8 rounded-2xl group"
              >
                <div className="w-12 h-12 rounded-full bg-[#D8B366]/10 border border-[#D8B366]/20 flex items-center justify-center mb-6 text-[#D8B366] group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="planos" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Escolha seu plano</h2>
            <p className="text-muted-foreground text-lg">Comece sua transformação hoje mesmo.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card rounded-2xl p-8 md:p-10 flex flex-col"
            >
              <div className="mb-8">
                <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">Mensal</span>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-display font-bold text-white">54,90</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">Cobrança a cada 30 dias. Sem fidelidade.</p>
              </div>
              
              <div className="space-y-4 mb-8 flex-1">
                {["Acesso completo às aulas", "Live semanal exclusiva", "Comunidade no Telegram", "Materiais de apoio"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-white/40" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full h-12 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10">
                QUERO O PLANO MENSAL
              </Button>
            </motion.div>

            {/* Annual Plan (Featured) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative rounded-2xl p-8 md:p-10 flex flex-col overflow-hidden"
            >
              <div className="absolute inset-0 bg-gold-gradient opacity-100" />
              
              <div className="relative z-10 mb-8">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-bold tracking-wider text-[#7A531E] uppercase bg-black/5 px-3 py-1 rounded-full">Anual</span>
                  <span className="text-xs font-bold text-black/60 bg-white/20 px-2 py-1 rounded">MAIS ESCOLHIDO</span>
                </div>
                <div className="mt-4 flex items-baseline gap-1 text-[#422006]">
                  <span className="text-sm font-semibold">R$</span>
                  <span className="text-5xl font-display font-bold">47,26</span>
                  <span className="text-sm font-semibold">/mês</span>
                </div>
                <p className="mt-2 text-sm text-[#7A531E]/80 font-medium">R$ 567,12 à vista ou 12x no cartão.</p>
              </div>
              
              <div className="relative z-10 space-y-4 mb-8 flex-1">
                {["Todo o conteúdo do Mensal", "Curso Bônus de Jejum", "Desconto na Loja Oficial", "Masterclass exclusiva"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="bg-black/10 rounded-full p-0.5">
                       <Check className="w-4 h-4 text-[#422006]" />
                    </div>
                    <span className="text-[#422006] font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="relative z-10 w-full h-12 rounded-full bg-[#1A1208] text-[#F6E6C6] hover:bg-[#2e2110] border border-white/10 shadow-xl">
                QUERO ME TORNAR ALUNA <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Casa de <span className="text-gold-gradient">ISABEL</span></h3>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">YouTube</a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">Suporte</a>
          </div>
          <p className="text-sm text-white/20">
            © 2024 Casa de Isabel. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
