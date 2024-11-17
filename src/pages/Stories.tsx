import React, { useState } from 'react';
import { Upload, Video, Mic, Send, Heart } from 'lucide-react';

type Story = {
  id: number;
  type: 'text' | 'video' | 'audio';
  content: string;
  author: string;
  date: Date;
  likes: number;
};

const initialStories: Story[] = [
  {
    id: 1,
    type: 'text',
    content: 'Después de años de silencio, finalmente encontré la fuerza para hablar y buscar ayuda. Este espacio me ha dado la valentía que necesitaba.',
    author: 'Anónimo',
    date: new Date('2024-02-15'),
    likes: 24,
  },
  {
    id: 2,
    type: 'video',
    content: 'https://example.com/video1.mp4',
    author: 'María G.',
    date: new Date('2024-02-20'),
    likes: 15,
  },
];

export default function Stories() {
  const [stories, setStories] = useState<Story[]>(initialStories);
  const [newStory, setNewStory] = useState('');
  const [selectedType, setSelectedType] = useState<'text' | 'video' | 'audio'>('text');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStory.trim()) return;

    const story: Story = {
      id: stories.length + 1,
      type: selectedType,
      content: newStory,
      author: 'Anónimo',
      date: new Date(),
      likes: 0,
    };

    setStories([story, ...stories]);
    setNewStory('');
  };

  const handleLike = (id: number) => {
    setStories(stories.map(story => 
      story.id === id ? { ...story, likes: story.likes + 1 } : story
    ));
  };

  const handleFileUpload = (type: 'video' | 'audio') => {
    // En una implementación real, aquí manejaríamos la carga de archivos
    console.log(`Uploading ${type} file`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Historias de Superación
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Comparte tu historia y inspira a otros. Tu experiencia puede ayudar a alguien más.
        </p>
      </div>

      {/* Story Creation Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4 mb-4">
            <button
              type="button"
              onClick={() => setSelectedType('text')}
              className={`flex items-center px-4 py-2 rounded-md ${
                selectedType === 'text'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <Upload className="h-5 w-5 mr-2" />
              Texto
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedType('video');
                handleFileUpload('video');
              }}
              className={`flex items-center px-4 py-2 rounded-md ${
                selectedType === 'video'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <Video className="h-5 w-5 mr-2" />
              Video
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedType('audio');
                handleFileUpload('audio');
              }}
              className={`flex items-center px-4 py-2 rounded-md ${
                selectedType === 'audio'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <Mic className="h-5 w-5 mr-2" />
              Audio
            </button>
          </div>

          <textarea
            value={newStory}
            onChange={(e) => setNewStory(e.target.value)}
            placeholder="Comparte tu historia..."
            className="w-full h-32 p-4 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
          />

          <button
            type="submit"
            className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <Send className="h-5 w-5 mr-2" />
            Compartir Historia
          </button>
        </form>
      </div>

      {/* Stories List */}
      <div className="space-y-6">
        {stories.map((story) => (
          <div key={story.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{story.author}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(story.date).toLocaleDateString()}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                story.type === 'text' ? 'bg-blue-100 text-blue-800' :
                story.type === 'video' ? 'bg-green-100 text-green-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {story.type.charAt(0).toUpperCase() + story.type.slice(1)}
              </span>
            </div>

            <div className="mb-4">
              {story.type === 'text' ? (
                <p className="text-gray-700">{story.content}</p>
              ) : story.type === 'video' ? (
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                  {/* Aquí iría el reproductor de video */}
                  <p className="flex items-center justify-center text-gray-500">
                    <Video className="h-8 w-8 mr-2" />
                    Video content
                  </p>
                </div>
              ) : (
                <div className="h-24 bg-gray-100 rounded-lg">
                  {/* Aquí iría el reproductor de audio */}
                  <p className="flex items-center justify-center text-gray-500 h-full">
                    <Mic className="h-8 w-8 mr-2" />
                    Audio content
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => handleLike(story.id)}
                className="flex items-center text-gray-600 hover:text-purple-600"
              >
                <Heart className={`h-5 w-5 mr-1 ${
                  story.likes > 0 ? 'fill-current text-purple-600' : ''
                }`} />
                <span>{story.likes} me gusta</span>
              </button>
              
              <button className="text-purple-600 hover:text-purple-800">
                Compartir
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8 text-center">
        <button className="inline-flex items-center px-4 py-2 border border-purple-600 rounded-md shadow-sm text-sm font-medium text-purple-600 bg-white hover:bg-purple-50">
          Cargar más historias
        </button>
      </div>
    </div>
  );
}