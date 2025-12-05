import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-purple-900/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">
            Contacto
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            ¿Listo para comenzar tu viaje creativo? Contactanos y formá parte de nuestro universo artístico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-white mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-purple-200">Dirección</p>
                    <p className="text-white">Av. Ejemplo 1234, Buenos Aires, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-purple-200">Teléfono</p>
                    <a href="tel:+541112345678" className="text-white hover:text-purple-300 transition-colors">
                      +54 11 1234-5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-purple-200">Email</p>
                    <a href="mailto:info@espaciopuntoarte.com" className="text-white hover:text-purple-300 transition-colors">
                      info@espaciopuntoarte.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-purple-200">Instagram</p>
                    <a 
                      href="https://www.instagram.com/epa_espaciopuntoarte/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-300 transition-colors"
                    >
                      @epa_espaciopuntoarte
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-purple-200">Horarios</p>
                    <p className="text-white">Lunes a Viernes: 14:00 - 20:00</p>
                    <p className="text-white">Sábados: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-white mb-4">Envianos un Mensaje</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Tu Nombre"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Tu Email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tu Mensaje"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-[1.02] shadow-lg shadow-purple-500/30"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52560.82308094482!2d-58.445154699999995!3d-34.603722399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e10!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sus!4v1234567890123!5m2!1ses!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de EPA - Espacio Punto Arte"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-purple-500/20 text-center">
        <p className="text-purple-300">
          © 2024 EPA - Espacio Punto Arte. Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
}
