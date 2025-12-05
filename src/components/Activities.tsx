import { Palette, Scissors, Sparkles, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const activities = [
  {
    icon: Palette,
    title: "Talleres de Pintura",
    description: "Explorá diferentes técnicas de pintura en un ambiente inspirador. Desde acuarela hasta acrílico, descubrí tu estilo artístico.",
    image: "https://images.unsplash.com/photo-1757085242652-f8cd4d3de889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjB3b3Jrc2hvcCUyMHBhaW50aW5nfGVufDF8fHx8MTc2NDk0NzAyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Scissors,
    title: "Costura y Textil",
    description: "Aprendé técnicas de costura, bordado y diseño textil. Creá tus propias prendas y proyectos únicos.",
    image: "https://images.unsplash.com/photo-1710432104387-877eba0ac09d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjBjcmFmdCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ5NjYyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Sparkles,
    title: "Arte Creativo",
    description: "Talleres de técnicas mixtas, collage, y proyectos artísticos experimentales. Dejá volar tu imaginación.",
    image: "https://images.unsplash.com/photo-1699817702889-01bc4c1a45d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwY3JhZnQlMjBoYW5kc3xlbnwxfHx8fDE3NjQ5NjYyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Users,
    title: "Talleres Grupales",
    description: "Experiencias creativas en grupo para todas las edades. Ideal para eventos especiales y celebraciones.",
    image: "https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQ4OTUxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Activities() {
  return (
    <section id="activities" className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            Nuestras Actividades
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Ofrecemos una variedad de talleres y actividades diseñadas para 
            despertar tu creatividad y desarrollar nuevas habilidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-8 h-8 text-yellow-300" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white mb-2">{activity.title}</h3>
                  <p className="text-purple-200">{activity.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
