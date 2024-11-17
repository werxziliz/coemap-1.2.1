import React from 'react';
import { 
  Undo, 
  Redo, 
  Eye, 
  EyeOff,
  Save, 
  Smartphone,
  Tablet,
  Monitor,
  Unlock
} from 'lucide-react';

type ToolbarProps = {
  onPreviewMode: () => void;
  onSave: () => void;
  onLogout: () => void;
  onDeviceChange: (device: 'mobile' | 'tablet' | 'desktop') => void;
  isPreviewMode: boolean;
};

export default function Toolbar({ 
  onPreviewMode, 
  onSave, 
  onLogout, 
  onDeviceChange,
  isPreviewMode 
}: ToolbarProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {!isPreviewMode && (
          <>
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <Undo className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <Redo className="h-5 w-5 text-gray-600" />
            </button>
            <div className="border-l border-gray-200 h-6 mx-2" />
          </>
        )}
        <button
          onClick={() => onDeviceChange('mobile')}
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          <Smartphone className="h-5 w-5 text-gray-600" />
        </button>
        <button
          onClick={() => onDeviceChange('tablet')}
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          <Tablet className="h-5 w-5 text-gray-600" />
        </button>
        <button
          onClick={() => onDeviceChange('desktop')}
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          <Monitor className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={onPreviewMode}
          className="p-2 hover:bg-gray-100 rounded-md"
          title={isPreviewMode ? "Modo edición" : "Vista previa"}
        >
          {isPreviewMode ? (
            <EyeOff className="h-5 w-5 text-gray-600" />
          ) : (
            <Eye className="h-5 w-5 text-gray-600" />
          )}
        </button>
        <button
          onClick={onSave}
          className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          <Save className="h-4 w-4 mr-2" />
          Guardar
        </button>
        <button
          onClick={onLogout}
          className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <Unlock className="h-4 w-4 mr-2" />
          Salir
        </button>
      </div>
    </div>
  );
}