import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold">ContenciónEmocional</span>
            </div>
            <p className="mt-2 text-gray-400">
              Un espacio seguro para sanar y crecer juntos.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contacto</h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-purple-400 mr-2" />
                <span>01-800-555-0123</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-400 mr-2" />
                <span>ayuda@contencion.org</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-purple-400 mr-2" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Enlaces Rápidos</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/register" className="hover:text-purple-400">Registro</a></li>
              <li><a href="/appointments" className="hover:text-purple-400">Agendar Cita</a></li>
              <li><a href="/chat" className="hover:text-purple-400">Chat de Apoyo</a></li>
              <li><a href="/stories" className="hover:text-purple-400">Historias</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Emergencias</h3>
            <div className="mt-4 text-gray-400">
              <p>Línea de Crisis 24/7:</p>
              <p className="text-xl font-bold text-purple-400">911</p>
              <p className="mt-2">Línea de Ayuda:</p>
              <p className="text-xl font-bold text-purple-400">01-800-555-0123</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} ContenciónEmocional. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}