import React from 'react';
import { HexColorPicker } from 'react-colorful';

type StyleEditorProps = {
  selectedElement: any;
  onStyleChange: (styles: any) => void;
};

export default function StyleEditor({ selectedElement, onStyleChange }: StyleEditorProps) {
  const [color, setColor] = React.useState("#000000");

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    onStyleChange({ color: newColor });
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Estilos</h3>
      
      {selectedElement ? (
        <div className="space-y-6">
          {/* Typography */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipografía
            </label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
              <option>Arial</option>
              <option>Helvetica</option>
              <option>Times New Roman</option>
            </select>
          </div>

          {/* Font Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tamaño de fuente
            </label>
            <input
              type="range"
              min="8"
              max="72"
              className="w-full"
            />
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color
            </label>
            <HexColorPicker color={color} onChange={handleColorChange} />
          </div>

          {/* Spacing */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Espaciado
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Margen"
                className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
              <input
                type="number"
                placeholder="Relleno"
                className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Selecciona un elemento para editar sus estilos</p>
      )}
    </div>
  );
}