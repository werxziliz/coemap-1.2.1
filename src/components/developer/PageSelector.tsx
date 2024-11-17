import React from 'react';
import { FileText } from 'lucide-react';

type Page = {
  id: string;
  name: string;
  path: string;
};

const pages: Page[] = [
  { id: 'home', name: 'Inicio', path: '/' },
  { id: 'contact', name: 'Contacto', path: '/contact' },
  { id: 'register', name: 'Registro', path: '/register' },
  { id: 'appointments', name: 'Citas', path: '/appointments' },
  { id: 'budget', name: 'Presupuesto', path: '/budget' },
  { id: 'faq', name: 'FAQ', path: '/faq' },
  { id: 'chat', name: 'Chat', path: '/chat' },
  { id: 'stories', name: 'Historias', path: '/stories' },
];

type PageSelectorProps = {
  selectedPage: string;
  onPageSelect: (pageId: string) => void;
};

export default function PageSelector({ selectedPage, onPageSelect }: PageSelectorProps) {
  return (
    <div className="p-4 border-b border-gray-200">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Páginas</h3>
      <div className="space-y-2">
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => onPageSelect(page.id)}
            className={`w-full flex items-center px-3 py-2 rounded-md text-left ${
              selectedPage === page.id
                ? 'bg-purple-100 text-purple-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <FileText className="h-4 w-4 mr-2" />
            {page.name}
          </button>
        ))}
      </div>
    </div>
  );
}