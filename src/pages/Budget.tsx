import React from 'react';
import { Building2, Users, Globe } from 'lucide-react';

const budgetItems = {
  local: {
    setup: [
      { item: 'Renta de espacio (mensual)', cost: 25000 },
      { item: 'Mobiliario y equipamiento', cost: 150000 },
      { item: 'Sistemas de seguridad', cost: 50000 },
      { item: 'Equipo de cómputo', cost: 75000 },
    ],
    operational: [
      { item: 'Salarios (5 profesionales)', cost: 150000 },
      { item: 'Servicios (luz, agua, internet)', cost: 8000 },
      { item: 'Materiales y suministros', cost: 10000 },
      { item: 'Marketing y difusión', cost: 15000 },
    ],
  },
  state: {
    setup: [
      { item: 'Renta de espacios (5 ubicaciones)', cost: 125000 },
      { item: 'Mobiliario y equipamiento', cost: 750000 },
      { item: 'Sistemas de seguridad', cost: 250000 },
      { item: 'Equipo de cómputo', cost: 375000 },
    ],
    operational: [
      { item: 'Salarios (25 profesionales)', cost: 750000 },
      { item: 'Servicios (todas las ubicaciones)', cost: 40000 },
      { item: 'Materiales y suministros', cost: 50000 },
      { item: 'Marketing y difusión estatal', cost: 75000 },
    ],
  },
  national: {
    setup: [
      { item: 'Renta de espacios (32 estados)', cost: 800000 },
      { item: 'Mobiliario y equipamiento', cost: 4800000 },
      { item: 'Sistemas de seguridad', cost: 1600000 },
      { item: 'Equipo de cómputo', cost: 2400000 },
    ],
    operational: [
      { item: 'Salarios (160 profesionales)', cost: 4800000 },
      { item: 'Servicios (todas las ubicaciones)', cost: 256000 },
      { item: 'Materiales y suministros', cost: 320000 },
      { item: 'Marketing y difusión nacional', cost: 500000 },
    ],
  },
};

export default function Budget() {
  const [selectedScale, setSelectedScale] = React.useState<'local' | 'state' | 'national'>('local');

  const calculateTotal = (items: typeof budgetItems.local.setup) => {
    return items.reduce((acc, item) => acc + item.cost, 0);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    }).format(amount);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Presupuesto del Proyecto
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Análisis detallado de costos para diferentes escalas de implementación
        </p>
      </div>

      <div className="mt-12">
        {/* Scale Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => setSelectedScale('local')}
            className={`p-6 rounded-lg border text-center transition-colors ${
              selectedScale === 'local'
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 hover:border-purple-500'
            }`}
          >
            <Building2 className="h-8 w-8 mx-auto mb-2 text-purple-600" />
            <h3 className="text-lg font-medium">Nivel Local</h3>
            <p className="text-sm text-gray-500">Una ubicación</p>
          </button>

          <button
            onClick={() => setSelectedScale('state')}
            className={`p-6 rounded-lg border text-center transition-colors ${
              selectedScale === 'state'
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 hover:border-purple-500'
            }`}
          >
            <Users className="h-8 w-8 mx-auto mb-2 text-purple-600" />
            <h3 className="text-lg font-medium">Nivel Estatal</h3>
            <p className="text-sm text-gray-500">5 ubicaciones</p>
          </button>

          <button
            onClick={() => setSelectedScale('national')}
            className={`p-6 rounded-lg border text-center transition-colors ${
              selectedScale === 'national'
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 hover:border-purple-500'
            }`}
          >
            <Globe className="h-8 w-8 mx-auto mb-2 text-purple-600" />
            <h3 className="text-lg font-medium">Nivel Nacional</h3>
            <p className="text-sm text-gray-500">32 estados</p>
          </button>
        </div>

        {/* Budget Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Setup Costs */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Costos de Implementación
            </h3>
            <div className="space-y-4">
              {budgetItems[selectedScale].setup.map((item) => (
                <div
                  key={item.item}
                  className="flex justify-between items-center border-b border-gray-200 pb-2"
                >
                  <span className="text-gray-600">{item.item}</span>
                  <span className="font-medium">{formatCurrency(item.cost)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2 font-semibold">
                <span>Total Implementación</span>
                <span className="text-purple-600">
                  {formatCurrency(calculateTotal(budgetItems[selectedScale].setup))}
                </span>
              </div>
            </div>
          </div>

          {/* Operational Costs */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Costos Operativos Mensuales
            </h3>
            <div className="space-y-4">
              {budgetItems[selectedScale].operational.map((item) => (
                <div
                  key={item.item}
                  className="flex justify-between items-center border-b border-gray-200 pb-2"
                >
                  <span className="text-gray-600">{item.item}</span>
                  <span className="font-medium">{formatCurrency(item.cost)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2 font-semibold">
                <span>Total Operativo Mensual</span>
                <span className="text-purple-600">
                  {formatCurrency(calculateTotal(budgetItems[selectedScale].operational))}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Total Investment */}
        <div className="mt-8 bg-purple-600 text-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Inversión Total Primer Año</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-purple-200">Implementación</p>
              <p className="text-2xl font-bold">
                {formatCurrency(calculateTotal(budgetItems[selectedScale].setup))}
              </p>
            </div>
            <div>
              <p className="text-purple-200">Operación Anual</p>
              <p className="text-2xl font-bold">
                {formatCurrency(calculateTotal(budgetItems[selectedScale].operational) * 12)}
              </p>
            </div>
            <div>
              <p className="text-purple-200">Total Primer Año</p>
              <p className="text-2xl font-bold">
                {formatCurrency(
                  calculateTotal(budgetItems[selectedScale].setup) +
                    calculateTotal(budgetItems[selectedScale].operational) * 12
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Consideraciones Adicionales
          </h3>
          <div className="space-y-4 text-gray-600">
            <p>
              • Los costos pueden variar según la ubicación específica y las condiciones locales.
            </p>
            <p>
              • Se recomienda mantener un fondo de contingencia del 10% del presupuesto total.
            </p>
            <p>
              • Los salarios están calculados considerando profesionales calificados con experiencia.
            </p>
            <p>
              • El presupuesto de marketing incluye campañas digitales y material impreso.
            </p>
            <p>
              • Se sugiere revisar y ajustar el presupuesto trimestralmente según las necesidades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}