import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: '¿Qué tipos de apoyo ofrecen?',
    answer: 'Ofrecemos diversos tipos de apoyo, incluyendo consejería individual, grupos de apoyo, terapia psicológica, asesoría legal y acompañamiento emocional. Nuestros servicios están disponibles tanto de manera presencial como en línea.',
  },
  {
    question: '¿Los servicios son gratuitos?',
    answer: 'Sí, todos nuestros servicios básicos son completamente gratuitos. Para servicios especializados o de largo plazo, contamos con opciones de bajo costo adaptadas a cada situación particular.',
  },
  {
    question: '¿Cómo se mantiene la confidencialidad?',
    answer: 'Mantenemos estrictos protocolos de confidencialidad. Toda la información compartida está protegida y solo el personal autorizado tiene acceso a ella. Utilizamos sistemas seguros para el almacenamiento de datos y seguimos las normativas de protección de datos personales.',
  },
  {
    question: '¿Puedo mantener el anonimato?',
    answer: 'Sí, respetamos el derecho al anonimato. Puedes utilizar nuestros servicios sin revelar tu identidad real, especialmente en las sesiones de chat y grupos de apoyo en línea.',
  },
  {
    question: '¿Qué hago en caso de emergencia?',
    answer: 'En caso de emergencia, contamos con una línea telefónica 24/7. También puedes acudir directamente a nuestras instalaciones o contactar al 911 si tu seguridad está en riesgo inmediato.',
  },
  {
    question: '¿Cómo puedo ayudar como voluntario?',
    answer: 'Aceptamos voluntarios que quieran contribuir a nuestra causa. Requerimos un proceso de capacitación y evaluación. Puedes registrarte en la sección de voluntariado de nuestra plataforma.',
  },
  {
    question: '¿Ofrecen apoyo legal?',
    answer: 'Sí, contamos con asesores legales que pueden orientarte sobre tus derechos y opciones legales. También tenemos convenios con despachos jurídicos para casos que requieran representación legal.',
  },
  {
    question: '¿Tienen grupos de apoyo específicos?',
    answer: 'Sí, organizamos grupos de apoyo específicos para diferentes situaciones: violencia doméstica, abuso infantil, violencia de género, entre otros. Los grupos son facilitados por profesionales especializados.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Preguntas Frecuentes
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
        </p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 bg-purple-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-purple-900">
            ¿No encontraste lo que buscabas?
          </h3>
          <p className="mt-2 text-purple-600">
            Nuestro equipo está disponible 24/7 para responder tus preguntas
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
            >
              Contactar soporte
            </a>
            <a
              href="/chat"
              className="inline-flex items-center px-4 py-2 border border-purple-600 text-sm font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50"
            >
              Iniciar chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}