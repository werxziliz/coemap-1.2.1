import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
import Register from '../../pages/Register';
import Appointments from '../../pages/Appointments';
import Budget from '../../pages/Budget';
import FAQ from '../../pages/FAQ';
import Chat from '../../pages/Chat';
import Stories from '../../pages/Stories';

type CanvasProps = {
  selectedPage: string;
  isPreviewMode: boolean;
};

const pageComponents: Record<string, React.ComponentType> = {
  home: Home,
  contact: Contact,
  register: Register,
  appointments: Appointments,
  budget: Budget,
  faq: FAQ,
  chat: Chat,
  stories: Stories,
};

export default function Canvas({ selectedPage, isPreviewMode }: CanvasProps) {
  const { setNodeRef } = useDroppable({
    id: 'canvas',
  });

  const PageComponent = pageComponents[selectedPage];

  return (
    <div ref={setNodeRef} className="h-full">
      <div className={`min-h-full ${isPreviewMode ? '' : 'overlay-grid'}`}>
        {PageComponent ? (
          <div className={isPreviewMode ? '' : 'relative'}>
            {!isPreviewMode && (
              <div className="absolute inset-0 bg-blue-500 bg-opacity-10 pointer-events-none" />
            )}
            <PageComponent />
          </div>
        ) : (
          <div className="text-center text-gray-500 p-8">
            Selecciona una página para editar
          </div>
        )}
      </div>
    </div>
  );
}