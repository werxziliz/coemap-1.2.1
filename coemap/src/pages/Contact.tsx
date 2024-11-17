import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Teléfono inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">Contáctanos</h2>
          <p className="mt-4 text-lg text-gray-600">
            Estamos aquí para ayudarte. No dudes en contactarnos por cualquiera de estos medios.
          </p>

          <dl className="mt-8 space-y-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-3">
                <dt className="text-lg font-medium text-gray-900">Teléfono</dt>
                <dd className="mt-1 text-gray-600">
                  01-800-555-0123 (Línea gratuita 24/7)
                </dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-3">
                <dt className="text-lg font-medium text-gray-900">Email</dt>
                <dd className="mt-1 text-gray-600">
                  ayuda@contencion.org
                </dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-3">
                <dt className="text-lg font-medium text-gray-900">Ubicación</dt>
                <dd className="mt-1 text-gray-600">
                  Av. Reforma 222, Col. Juárez<br />
                  Ciudad de México, CDMX
                </dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-3">
                <dt className="text-lg font-medium text-gray-900">Horario</dt>
                <dd className="mt-1 text-gray-600">
                  Lunes a Domingo<br />
                  24 horas
                </dd>
              </div>
            </div>
          </dl>
        </div>

        {/* Contact Form */}
        <div className="mt-12 lg:mt-0">
          <div className="bg-white py-10 px-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <input
                  type="text"
                  {...register('name')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}