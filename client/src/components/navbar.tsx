import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "h-20 bg-background/80 backdrop-blur-md border-b border-white/10" 
          : "h-24 bg-transparent"
      )}
    >
      <div className="container mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-display font-bold tracking-tight text-white cursor-pointer hover:opacity-90 transition-opacity">
            Casa de <span className="text-gold-gradient">ISABEL</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Conheça", "Para Quem É", "Depoimentos", "Planos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button 
            className="rounded-full bg-transparent border border-[#D8B366] text-[#F6E6C6] hover:bg-[#D8B366]/10 cursor-pointer"
            variant="outline"
          >
            Área de Alunas
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5">
           {["Conheça", "Para Quem É", "Depoimentos", "Planos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-base font-medium text-white/80 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="w-full mt-4 bg-gold-gradient text-black font-semibold rounded-full cursor-pointer">
            Quero Me Tornar Aluna
          </Button>
        </div>
      )}
    </nav>
  );
}
