import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-white mb-6">
              Sobre Nosotros
            </h2>
            <div className="space-y-4 text-purple-100">
              <p>
                EPA - Espacio Punto Arte es un taller de arte y costura donde la creatividad 
                no tiene límites. Nuestro espacio es un universo de posibilidades donde cada 
                alumno puede descubrir y desarrollar su talento artístico.
              </p>
              <p>
                Combinamos técnicas tradicionales con métodos innovadores, creando un ambiente 
                acogedor donde el aprendizaje se convierte en una experiencia mágica y 
                transformadora.
              </p>
              <p>
                Como nuestro logo simboliza: la luna es nuestro botón que une hilos de 
                creatividad, el pincel dibuja estrellas de posibilidades, y todo sucede en 
                nuestro universo artístico.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1542978415-64bbba6025c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdXBwbGllcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NDkzODIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Materiales de arte"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
