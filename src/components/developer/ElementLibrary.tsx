import React from 'react';
import { GripVertical } from 'lucide-react';
import { useDraggable } from '@dnd-kit/core';

type Element = {
  type: string;
  icon: React.ReactNode;
  label: string;
};

const elements: Element[] = [
  { type: 'heading', icon: 'H1', label: 'Encabezado' },
  { type: 'paragraph', icon: '¶', label: 'Párrafo' },
  { type: 'button', icon: '⬚', label: 'Botón' },
  { type: 'image', icon: '🖼', label: 'Imagen' },
  { type: 'form', icon: '📝', label: 'Formulario' },
  { type: 'grid', icon: '⊞', label: 'Cuadrícula' },
];

type DraggableElementProps = {
  element: Element;
};

function DraggableElement({ element }: DraggableElementProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: element.type,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="flex items-center p-3 border border-gray-200 rounded-md hover:border-purple-500 cursor-move bg-white"
    >
      <GripVertical className="h-4 w-4 mr-2 text-gray-400" />
      <span className="mr-2">{element.icon}</span>
      {element.label}
    </div>
  );
}

export default function ElementLibrary() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Elementos</h3>
      <div className="space-y-2">
        {elements.map((element) => (
          <DraggableElement key={element.type} element={element} />
        ))}
      </div>
    </div>
  );
}