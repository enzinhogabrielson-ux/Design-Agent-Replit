import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, Lock, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export default function PosCompra() {
  const [, setLocation] = useLocation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#070607] text-white overflow-hidden selection:bg-[#D8B366] selection:text-black font-sans relative flex items-center justify-center">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D8B366]/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-[#D8B366]/5 blur-[100px] rounded-full mix-blend-screen opacity-50" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#D8B366]/5 blur-[150px] rounded-full mix-blend-screen opacity-30" />
      </div>

      {/* CONTENT */}
      <motion.div 
        className="relative z-10 container mx-auto max-w-2xl px-6 py-40 md:py-20 text-center flex flex-col justify-center items-center min-h-screen"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* HEADER LOGO SECTION */}
        <motion.div variants={fadeInUp} className="mb-12 md:mb-16">
          <h1 className="text-[#D8B366] font-display font-bold text-lg md:text-xl tracking-widest uppercase mb-2">
            Governe seus resultados
          </h1>
        </motion.div>

        {/* SUCCESS ICON */}
        <motion.div variants={fadeInUp} className="mb-12 md:mb-16 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#D8B366]/20 blur-3xl rounded-full" />
            <CheckCircle className="w-24 h-24 md:w-32 md:h-32 text-[#D8B366] relative z-10" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.div variants={fadeInUp} className="mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-3">
            Inscrição confirmada!
          </h2>
          <p className="text-3xl md:text-4xl text-[#D8B366] font-serif italic">
            🎉
          </p>
        </motion.div>

        {/* MAIN MESSAGE */}
        <motion.div variants={fadeInUp} className="mb-14 md:mb-16">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-xl mx-auto">
            Para receber todas as informações sobre o evento, conteúdos exclusivos e avisos importantes, entre agora no <span className="text-[#D8B366] font-semibold">Grupo Oficial do WhatsApp</span> do evento.
          </p>
        </motion.div>

        {/* INFO CARDS */}
        <motion.div variants={fadeInUp} className="space-y-4 mb-14 md:mb-16 w-full max-w-xl">
          <div className="bg-[#D8B366]/10 border border-[#D8B366]/30 rounded-lg p-5 md:p-7 backdrop-blur-sm">
            <div className="flex items-start gap-4 md:gap-5">
              <Lock className="w-6 h-6 md:w-7 md:h-7 text-[#D8B366] flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-white font-semibold mb-3 text-base md:text-lg">🔒 Fique tranquilo(a):</p>
                <ul className="text-sm md:text-base text-white/80 space-y-2 font-light">
                  <li>• Este é um grupo informativo.</li>
                  <li>• Apenas a administração poderá enviar mensagens, evitando excesso de notificações.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA BUTTON */}
        <motion.div variants={fadeInUp} className="space-y-4 w-full max-w-xl">
          <a 
            href="https://chat.whatsapp.com/CSIjXf61ZwEHWIGiWrJqzz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative flex items-center justify-center gap-2 bg-[#D8B366] text-black text-base md:text-lg font-bold px-8 md:px-10 h-12 md:h-14 rounded-lg transition-all duration-300 group overflow-hidden hover:shadow-[0_0_30px_rgba(216,179,102,0.5)] hover:scale-105 active:scale-95 w-full"
            data-testid="button-whatsapp"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            <span className="relative z-10">👉 Acesse o grupo oficial aqui</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* SECONDARY BUTTON */}
          <button
            onClick={() => setLocation("/")}
            className="relative flex items-center justify-center gap-2 bg-white/5 text-white text-base md:text-lg font-bold px-8 md:px-10 h-12 md:h-14 rounded-lg transition-all duration-300 group border border-white/10 overflow-hidden hover:bg-white/10 hover:border-[#D8B366]/50 hover:shadow-[0_0_20px_rgba(216,179,102,0.1)] w-full"
            data-testid="button-back-home"
          >
            <span className="relative z-10">Voltar à página inicial</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* FOOTER MESSAGE */}
        <motion.div variants={fadeInUp} className="mt-16 md:mt-20 pt-10 md:pt-12 border-t border-white/10 w-full max-w-xl">
          <p className="text-sm md:text-base text-white/60 font-light mb-4">
            Obrigado por sua inscrição! Esperamos vê-lo(a) no evento.
          </p>
          <p className="text-[#D8B366] font-display font-bold text-sm md:text-base tracking-widest uppercase">
            Governe seus resultados
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
