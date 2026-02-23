'use client'
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Loader2, Bot } from 'lucide-react';

// --- CHAT TEMPLATE DATA ---
const TEMPLATE_CHATS = [
  {
    id: 'about',
    label: "ℹ️ About EFECTION IV",
    question: "What is EFECTION IV?",
    answer: "EFECTION IV is an international English festival competition hosted by INSTIKI. This year's theme is 'Voices of Society: Exploring Culture, Identity, and Change in a Globalized World'."
  },
  {
    id: 'categories',
    label: "🏆 Competition Categories",
    question: "What competitions are available and for which education levels?",
    answer: "Our competition categories include:\n1. Middle School & High School: Story Telling and Speech\n2. Varsity (University): Debate\n3. Open Category (Public): Story Writing"
  },
  {
    id: 'schedule',
    label: "📅 Schedule & Timeline",
    question: "When are the registration dates and the D-Day?",
    answer: "EFECTION IV Timeline:\n- Feb 23: Registration Opens\n- Apr 25: Preliminary Announcement & Registration Closes (Story Telling & Speech)\n- May 2: Registration Closes (Debate & Story Writing)\n- May 17 & 24: D-Day (Main Event)"
  },
  {
    id: 'prizes',
    label: "💰 Total Prize Pool",
    question: "What is the total prize pool for this competition?",
    answer: "The Total Prize Pool for EFECTION IV is IDR 13,500,000! Prepare yourself, for the stage is set and you could be our next winner."
  },
  {
    id: 'contact',
    label: "📞 Location & Contact",
    question: "Where is the event located and who can I contact?",
    answer: "The event is located at Instiki Campus, Denpasar.\n\nFor further inquiries, please contact:\nEmail: ecsi@instiki.ac.id\nWhatsApp: (+62) 896-7042-9724 (Ayu)"
  },
  {
    id: 'benefits',
    label: "✨ Why Choose Us?",
    question: "What are the advantages of joining this competition?",
    answer: "You will be evaluated by Expert Judges, experience a transparent process, receive constructive feedback, and the best works will earn an exclusive opportunity for Global Publication."
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'model',
      text: "Hello! Welcome to the EFECTION IV Info Center. Please select a topic below:"
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleTemplateClick = (question, answer) => {
    if (isLoading) return;

    // 1. Add user message
    const newUserMsg = { id: Date.now(), role: 'user', text: question };
    setMessages((prev) => [...prev, newUserMsg]);
    setIsLoading(true);

    // 2. Simulate typing delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'model', text: answer }
      ]);
      setIsLoading(false);
    }, 600);
  };

  // Komponen ini HANYA me-return widget floating, tanpa background halaman utama
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[350px] sm:w-[400px] h-[550px] rounded-3xl shadow-2xl flex flex-col overflow-hidden transform origin-bottom-right transition-all animate-in slide-in-from-bottom-10 zoom-in-95 duration-200 bg-[#FFBE00]/15 backdrop-blur-xl border border-[#FFBE00]/30">
          
          {/* Header (Agak kecoklatan menyesuaikan tema) */}
          <div className="p-4 flex items-center justify-between shrink-0 shadow-sm z-10 bg-[#C09B6F]/90 backdrop-blur-md text-[#ededed]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-inner bg-[#FFBE00]">
                <Bot size={22} className="text-[#333]" />
              </div>
              <div>
                <h3 className="font-semibold tracking-wide text-sm">EFECTION IV Info</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#FEDB73]"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFBE00]"></span>
                  </span>
                  <span className="text-xs font-medium opacity-90">Auto-Reply Active</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-black/20 rounded-xl transition-all"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Message Area (Background Transparent agar efek blur tembus) */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent scrollbar-thin scrollbar-thumb-[#C09B6F]/50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] px-4 py-3 text-sm shadow-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'rounded-2xl rounded-br-sm font-medium bg-[#FFBE00] text-[#333]' 
                      : 'bg-white/80 backdrop-blur-sm text-slate-800 border border-white/50 rounded-2xl rounded-tl-sm'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                </div>
              </div>
            ))}
            
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-3">
                   <Loader2 size={16} className="animate-spin text-[#C09B6F]" />
                   <span className="text-xs font-medium text-slate-600 animate-pulse">Typing reply...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} className="h-1" />
          </div>

          {/* Quick Replies Area (Glassmorphism Putih-Kuning) */}
          <div className="p-3 bg-white/40 backdrop-blur-md border-t border-[#FFBE00]/30 shrink-0">
            <p className="text-xs text-slate-700 font-medium mb-2 px-1">Select the information you want to know:</p>
            <div className="flex flex-wrap gap-2 max-h-[140px] overflow-y-auto scrollbar-thin pb-1">
              {TEMPLATE_CHATS.map((template) => (
                <button
                  key={template.id}
                  onClick={() => handleTemplateClick(template.question, template.answer)}
                  disabled={isLoading}
                  className="bg-white/80 backdrop-blur-sm border border-[#C09B6F]/30 text-[#444] text-xs font-medium py-1.5 px-3 rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm text-left hover:bg-[#C09B6F] hover:text-white"
                >
                  {template.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 bg-[#FFBE00] hover:bg-[#e6ab00]`}
        style={{ boxShadow: '0 10px 25px -5px rgba(255, 190, 0, 0.5)' }}
      >
        {isOpen ? (
          <X size={26} color="#333" />
        ) : (
          <MessageCircle size={26} color="#333" />
        )}
      </button>
    </div>
  );
}