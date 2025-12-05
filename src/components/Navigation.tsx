import { Sparkles } from "lucide-react";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Sparkles className="w-6 h-6 text-yellow-300" />
            <span className="text-white">EPA - Espacio Punto Arte</span>
          </button>
          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-purple-200 hover:text-yellow-300 transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("activities")}
              className="text-purple-200 hover:text-yellow-300 transition-colors"
            >
              Actividades
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-purple-200 hover:text-yellow-300 transition-colors"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-purple-200 hover:text-yellow-300 transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
