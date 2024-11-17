import React from 'react';
import { Shield, Users, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Un espacio seguro para sanar
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
            Brindamos apoyo emocional y profesional para personas afectadas por la violencia.
            Estamos aquí para escucharte y ayudarte en tu proceso de sanación.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            <Link
              to="/register"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-500 hover:bg-purple-600 md:py-4 md:text-lg md:px-10"
            >
              Registrarse
            </Link>
            <Link
              to="/chat"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Hablar ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Ofrecemos múltiples formas de apoyo adaptadas a tus necesidades
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center">
              <Shield className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Espacio Seguro</h3>
            <p className="mt-2 text-gray-600">
              Un lugar donde puedes expresarte libremente sin temor a ser juzgado
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center">
              <Users className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Apoyo Profesional</h3>
            <p className="mt-2 text-gray-600">
              Equipo de profesionales capacitados para brindarte la ayuda que necesitas
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center">
              <Calendar className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Citas Flexibles</h3>
            <p className="mt-2 text-gray-600">
              Agenda tus sesiones en horarios que se adapten a tu disponibilidad
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="flex justify-center">
              <MessageCircle className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Chat 24/7</h3>
            <p className="mt-2 text-gray-600">
              Asistencia inmediata a través de nuestro chat de apoyo emocional
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div>
              <p className="text-5xl font-extrabold text-white">5000+</p>
              <p className="mt-2 text-xl text-purple-200">Personas Ayudadas</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-white">50+</p>
              <p className="mt-2 text-xl text-purple-200">Profesionales</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-white">24/7</p>
              <p className="mt-2 text-xl text-purple-200">Disponibilidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-purple-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                ¿Necesitas ayuda ahora?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-purple-200">
                No estás solo. Nuestro equipo está disponible las 24 horas para brindarte el apoyo que necesitas.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/chat"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50"
                >
                  Iniciar chat
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-800 hover:bg-purple-900"
                >
                  Contactar profesional
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}