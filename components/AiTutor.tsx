import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, RefreshCw } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini, initializeChat } from '../services/geminiService';

export const AiTutor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initializeChat();
    setMessages([{
      id: 'init',
      role: 'model',
      text: "Hi there! I'm Sarah's AI assistant. I can help you practice English or check your level. How are you doing today?",
      timestamp: new Date()
    }]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userMessage.text);

    const aiMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 h-[calc(100vh-80px)] pt-24 flex flex-col">
      
      {/* Chat Header */}
      <div className="bg-white rounded-t-2xl shadow-sm border-b border-slate-100 p-4 flex items-center justify-between z-10">
        <div className="flex items-center space-x-4">
            <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
                <h2 className="text-lg font-bold text-slate-900">AI Language Partner</h2>
                <p className="text-xs text-indigo-600 font-medium">Powered by Gemini • Always Online</p>
            </div>
        </div>
        <button 
            onClick={() => window.location.reload()}
            className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
            title="Restart Conversation"
        >
            <RefreshCw className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-slate-50 p-6 space-y-6 border-x border-slate-200/50" 
           style={{ backgroundImage: 'radial-gradient(#e0e7ff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
          >
            <div className={`flex max-w-[85%] md:max-w-[75%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                
                <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mt-auto mb-1 shadow-sm ${msg.role === 'user' ? 'bg-indigo-600 ml-2' : 'bg-white mr-2 border border-slate-200'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-indigo-600" />}
                </div>

                <div
                    className={`px-5 py-3.5 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
                    msg.role === 'user'
                        ? 'bg-indigo-600 text-white rounded-br-sm'
                        : 'bg-white text-slate-800 border border-slate-100 rounded-bl-sm'
                    }`}
                >
                    {msg.text}
                    <div className={`text-[10px] mt-1 text-right opacity-70 ${msg.role === 'user' ? 'text-indigo-100' : 'text-slate-400'}`}>
                        {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </div>
                </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="flex items-center bg-white border border-slate-100 rounded-2xl rounded-bl-sm px-5 py-4 ml-10 shadow-sm">
                <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 rounded-b-2xl shadow-lg border-t border-slate-100">
        <form onSubmit={handleSendMessage} className="flex items-end space-x-2">
          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent focus-within:bg-white transition-all">
             <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                    }
                }}
                placeholder="Type your message here..."
                className="w-full bg-transparent px-4 py-3 focus:outline-none resize-none text-slate-700 max-h-32"
                rows={1}
                disabled={isLoading}
              />
          </div>
          <button
            type="submit"
            disabled={isLoading || !inputText.trim()}
            className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
          >
            <Send className="w-5 h-5 ml-0.5" />
          </button>
        </form>
        <div className="text-center mt-2">
            <p className="text-xs text-slate-400">AI can make mistakes. Check important info.</p>
        </div>
      </div>
    </div>
  );
};