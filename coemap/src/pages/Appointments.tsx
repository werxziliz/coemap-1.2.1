import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

type TimeSlot = {
  time: string;
  available: boolean;
};

const timeSlots: TimeSlot[] = [
  { time: '09:00', available: true },
  { time: '10:00', available: true },
  { time: '11:00', available: false },
  { time: '12:00', available: true },
  { time: '13:00', available: true },
  { time: '14:00', available: false },
  { time: '15:00', available: true },
  { time: '16:00', available: true },
  { time: '17:00', available: true },
];

const professionals = [
  {
    id: 1,
    name: 'Dra. María González',
    specialty: 'Psicóloga Clínica',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 2,
    name: 'Dr. Carlos Ramírez',
    specialty: 'Terapeuta',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 3,
    name: 'Dra. Ana Martínez',
    specialty: 'Psiquiatra',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200',
  },
];

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedProfessional, setSelectedProfessional] = useState<number | null>(null);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleProfessionalSelect = (id: number) => {
    setSelectedProfessional(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para agendar la cita
    console.log({
      date: selectedDate,
      time: selectedTime,
      professional: selectedProfessional,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Agenda tu cita</h2>
        <p className="mt-4 text-lg text-gray-600">
          Selecciona el profesional, fecha y hora que mejor se adapte a ti
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Professional Selection */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Selecciona un profesional</h3>
          <div className="space-y-4">
            {professionals.map((professional) => (
              <div
                key={professional.id}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  selectedProfessional === professional.id
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-500'
                }`}
                onClick={() => handleProfessionalSelect(professional.id)}
              >
                <div className="flex items-center">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{professional.name}</p>
                    <p className="text-sm text-gray-500">{professional.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Selecciona una fecha</h3>
          <div className="flex items-center justify-center">
            <Calendar className="h-6 w-6 text-purple-600 mr-2" />
            <input
              type="date"
              value={format(selectedDate, 'yyyy-MM-dd')}
              onChange={(e) => handleDateSelect(new Date(e.target.value))}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              min={format(new Date(), 'yyyy-MM-dd')}
            />
          </div>
        </div>

        {/* Time Slots */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Selecciona una hora</h3>
          <div className="grid grid-cols-2 gap-4">
            {timeSlots.map((slot) => (
              <button
                key={slot.time}
                onClick={() => handleTimeSelect(slot.time)}
                disabled={!slot.available}
                className={`p-4 rounded-lg border text-center ${
                  selectedTime === slot.time
                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                    : slot.available
                    ? 'border-gray-200 hover:border-purple-500'
                    : 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Clock className="h-5 w-5 mx-auto mb-1" />
                {slot.time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary and Submit */}
      <div className="mt-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Resumen de tu cita</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-500">Profesional</p>
              <p className="font-medium">
                {selectedProfessional
                  ? professionals.find((p) => p.id === selectedProfessional)?.name
                  : 'No seleccionado'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Fecha</p>
              <p className="font-medium">
                {format(selectedDate, 'dd MMMM yyyy', { locale: es })}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Hora</p>
              <p className="font-medium">{selectedTime || 'No seleccionada'}</p>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!selectedProfessional || !selectedTime}
            className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Confirmar cita
          </button>
        </div>
      </div>
    </div>
  );
}