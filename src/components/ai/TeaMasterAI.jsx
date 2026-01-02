import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Send, Loader2, MessageSquareQuote } from 'lucide-react';
import { askTeaMaster } from '../../services/geminiService';

const TeaMasterAI = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [response]);

  const handleAsk = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setResponse('');
    setError(null);

    try {
      const aiResponse = await askTeaMaster(query);
      setResponse(aiResponse);
    } catch (err) {
      setError("Trà sư đang bận thưởng trà, xin vui lòng thử lại sau.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQueries = [
    "Tư vấn trà biếu sếp nam",
    "Làm thơ tặng vợ yêu thích uống trà"
  ];

  return (
    <div className="fixed bottom-24 right-6 w-96 max-w-[90vw] bg-[#0A1F18] border border-[#D4AF37] rounded-lg shadow-2xl z-50 overflow-hidden flex flex-col animate-fade-in-up">
      {/* Header */}
      <div className="bg-[#16362D] p-4 flex justify-between items-center border-b border-[#D4AF37]/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center">
            <Sparkles size={20} className="text-[#0A1F18]" />
          </div>
          <div>
            <h3 className="text-[#D4AF37] font-bold text-lg">Trà Sư AI</h3>
            <p className="text-[#A8B3A6] text-xs italic">Tư vấn & Đề thơ</p>
          </div>
        </div>
        <button onClick={onClose} className="text-[#A8B3A6] hover:text-[#D4AF37] transition">
          <X size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 h-80 overflow-y-auto bg-[#0F2820]">
        {!response && !isLoading && !error && (
          <div className="text-center text-[#A8B3A6] mt-10 space-y-4">
            <MessageSquareQuote size={40} className="mx-auto text-[#D4AF37]/50" />
            <p className="text-sm">"Kính chào quý khách. Lão phu có thể giúp gì?"</p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestedQueries.map(q => (
                <button key={q} onClick={() => setQuery(q)}
                        className="text-xs border border-[#D4AF37]/30 px-3 py-1 rounded-full hover:bg-[#D4AF37] hover:text-[#0F2820] transition">
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {response && (
          <div className="bg-[#1A3C34]/80 p-4 rounded-lg border border-[#D4AF37]/20 text-[#E0E0E0] text-sm">
            <div className="flex gap-2 mb-2">
              <Sparkles size={14} className="text-[#D4AF37] mt-1" />
              <span className="font-bold text-[#D4AF37]">Trà Sư:</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, '<br />') }} />
          </div>
        )}

        {isLoading && (
          <div className="flex justify-center items-center h-full">
            <Loader2 className="animate-spin text-[#D4AF37]" size={32} />
          </div>
        )}

        {error && (
          <div className="text-red-400 text-sm text-center bg-red-900/20 p-2 rounded border border-red-900/50">
            {error}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-[#16362D] border-t border-[#D4AF37]/30 flex gap-2">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
          placeholder="VD: Tư vấn quà biếu bố..."
          className="flex-1 bg-[#0A1F18] border border-[#2C4A3E] rounded px-3 py-2 text-sm text-[#E0E0E0] focus:outline-none focus:border-[#D4AF37]"
        />
        <button 
          onClick={handleAsk}
          disabled={isLoading}
          className="bg-[#D4AF37] text-[#0A1F18] p-2 rounded hover:bg-[#B8860B] transition disabled:opacity-50">
          {isLoading ? <Loader2 size={18} className="animate-spin"/> : <Send size={18} />}
        </button>
      </div>
    </div>
  );
};

export default TeaMasterAI;