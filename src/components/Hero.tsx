import { Sparkles, Moon, Brush } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 3 + "s",
              animationDuration: Math.random() * 3 + 2 + "s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo representation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Moon className="w-16 h-16 text-yellow-200" />
          <Brush className="w-12 h-12 text-purple-300" />
          <Sparkles className="w-12 h-12 text-yellow-300" />
        </div>

        <h1 className="text-white mb-4">
          EPA - Espacio Punto Arte
        </h1>
        <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
          Un universo de creatividad donde el arte y la costura se encuentran. 
          Descubrí tu estrella creativa en nuestro taller.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
        >
          Contactanos
        </button>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}
