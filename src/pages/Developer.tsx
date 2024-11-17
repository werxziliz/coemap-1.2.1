import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Lock } from 'lucide-react';
import PageSelector from '../components/developer/PageSelector';
import ElementLibrary from '../components/developer/ElementLibrary';
import StyleEditor from '../components/developer/StyleEditor';
import Canvas from '../components/developer/Canvas';
import Toolbar from '../components/developer/Toolbar';

const DEVELOPER_PASSWORD = 'Coemap1122';

export default function Developer() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [selectedPage, setSelectedPage] = useState('home');
  const [selectedElement, setSelectedElement] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [currentDevice, setCurrentDevice] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === DEVELOPER_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  const handleDragEnd = (event: any) => {
    if (event.over && event.over.id === 'canvas') {
      console.log('Dropped element:', event.active.id);
    }
  };

  const handleStyleChange = (styles: any) => {
    console.log('Style changed:', styles);
  };

  const handleSave = () => {
    console.log('Saving changes...');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <Lock className="mx-auto h-12 w-12 text-purple-600" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Acceso Desarrollador
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Acceder
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="min-h-screen bg-gray-100">
        <Toolbar
          onPreviewMode={() => setPreviewMode(!previewMode)}
          onSave={handleSave}
          onLogout={() => setIsAuthenticated(false)}
          onDeviceChange={setCurrentDevice}
          isPreviewMode={previewMode}
        />

        <div className="flex h-[calc(100vh-64px)]">
          {/* Left Sidebar */}
          <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
            <PageSelector
              selectedPage={selectedPage}
              onPageSelect={setSelectedPage}
            />
            {!previewMode && <ElementLibrary />}
          </div>

          {/* Main Content Area */}
          <div 
            className={`flex-1 bg-gray-50 overflow-auto ${
              currentDevice === 'mobile' ? 'max-w-sm mx-auto' :
              currentDevice === 'tablet' ? 'max-w-2xl mx-auto' :
              'w-full'
            }`}
          >
            <Canvas 
              selectedPage={selectedPage}
              isPreviewMode={previewMode}
            />
          </div>

          {/* Right Sidebar */}
          {!previewMode && (
            <div className="w-64 bg-white border-l border-gray-200 overflow-y-auto">
              <StyleEditor
                selectedElement={selectedElement}
                onStyleChange={handleStyleChange}
              />
            </div>
          )}
        </div>
      </div>
    </DndContext>
  );
}