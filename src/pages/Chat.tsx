import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: 'Hola, soy tu asistente virtual. Estoy aquí para escucharte y brindarte apoyo emocional. ¿Cómo puedo ayudarte hoy?',
    sender: 'bot',
    timestamp: new Date(),
  },
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage('');

    // Simulated bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(newMessage),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (message: string): string => {
    // Simple response logic - in a real application, this would be connected to an AI model
    const lowercaseMessage = message.toLowerCase();
    if (lowercaseMessage.includes('triste')) {
      return 'Entiendo que te sientas triste. Es normal tener estos sentimientos. ¿Quieres hablar más sobre lo que te está afectando?';
    } else if (lowercaseMessage.includes('ayuda')) {
      return 'Estoy aquí para ayudarte. ¿Podrías contarme más sobre tu situación? También puedo conectarte con un profesional si lo prefieres.';
    } else if (lowercaseMessage.includes('gracias')) {
      return 'No hay de qué. Recuerda que estamos aquí para apoyarte 24/7.';
    }
    return 'Te escucho. ¿Quieres contarme más sobre eso?';
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-MX', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Chat Header */}
        <div className="bg-purple-600 px-6 py-4 flex items-center">
          <Bot className="h-8 w-8 text-white" />
          <div className="ml-3">
            <h2 className="text-white font-medium">Asistente Virtual</h2>
            <p className="text-purple-200 text-sm">Siempre disponible para escucharte</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-[500px] overflow-y-auto px-6 py-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              } mb-4`}
            >
              <div
                className={`max-w-[70%] rounded-lg px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p>{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-purple-200' : 'text-gray-500'
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="border-t border-gray-200 px-6 py-4">
          <form onSubmit={handleSendMessage} className="flex space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Escribe tu mensaje aquí..."
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white rounded-lg px-6 py-2 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-50 px-6 py-3 text-center text-sm text-gray-500">
          Este chat es confidencial. En caso de emergencia, por favor llama al 911 o
          contacta a nuestro número de crisis: 01-800-555-0123
        </div>
      </div>
    </div>
  );
}