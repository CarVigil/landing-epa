import { ImageWithFallback } from "./figma/ImageWithFallback";

const teamMembers = [
  
  {
    name: "Karen Vigil",
    role: "Directora y Profesora de Arte",
    image: "https://images.unsplash.com/photo-1542978415-64bbba6025c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdXBwbGllcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NDkzODIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Con más de 15 años de experiencia en enseñanza artística, Karen lidera nuestro espacio con pasión y creatividad."
  },
  {
    name: "Evelyn Vigil",
    role: "Profesora de Costura y Textil",
    image: "https://images.unsplash.com/photo-1600783486675-b0690b0967ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFydGlzdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDk2NjI5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Especialista en diseño de moda y técnicas tradicionales de costura, Evelyn transforma telas en obras de arte."
  }
];

export function Team() {
  return (
    <section id="team" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Conocé a las profesionales que hacen posible nuestro universo creativo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
              <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-purple-500/20">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white mb-1">{member.name}</h3>
                  <p className="text-purple-300 mb-3">{member.role}</p>
                  <p className="text-purple-200">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
