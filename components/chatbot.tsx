import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Settings, Loader2, Bot } from 'lucide-react';

// --- DATA INFORMASI (KNOWLEDGE BASE) ---
const KNOWLEDGE_BASE = [
  {
    topik: "Jam Operasional",
    detail: "Kami buka setiap hari Senin hingga Jumat, pukul 09:00 - 18:00 WIB. Sabtu dan Minggu kami libur."
  },
  {
    topik: "Layanan",
    detail: "Kami menyediakan jasa pembuatan website, aplikasi mobile (iOS/Android), dan konsultasi UI/UX Design."
  },
  {
    topik: "Harga",
    detail: "Paket Basic mulai dari Rp 1.500.000, Paket Pro mulai dari Rp 5.000.000. Untuk Enterprise, silakan hubungi tim sales."
  },
  {
    topik: "Kontak",
    detail: "Email: hello@contohperusahaan.id | WhatsApp: 0812-3456-7890 | Alamat: Jl. Sudirman No. 45, Jakarta."
  },
  {
    topik: "Garansi",
    detail: "Kami memberikan garansi bug fixing selama 3 bulan setelah proyek selesai diserahterimakan."
  }
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [userApiKey, setUserApiKey] = useState(''); // Opsional: jika user ingin pakai key sendiri
  const [showConfig, setShowConfig] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);


  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'model',
      text: 'Halo! Ada yang bisa saya bantu terkait layanan kami hari ini?'
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const generateSystemPrompt = (userQuery: string) => {
    const knowledgeString = JSON.stringify(KNOWLEDGE_BASE);
    return `
      Kamu adalah asisten AI customer service.
      
      DATA RAHASIA PERUSAHAAN:
      ${knowledgeString}
      
      INSTRUKSI:
      1. Jawab pertanyaan hanya berdasarkan data di atas.
      2. Jika tidak ada di data, jawab sopan bahwa kamu tidak punya informasinya, jangan mengarang.
      3. Gaya bahasa: Ramah, Profesional, Bahasa Indonesia.
      
      User: ${userQuery}
    `;
  };

  const handleSendMessage = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // 1. Setup API Key
    // Di lingkungan preview ini, const apiKey = "" akan otomatis diisi oleh sistem.
    // Jika dijalankan lokal/export, user bisa isi manual via UI settings.
    const envApiKey = ""; 
    const finalApiKey = userApiKey || envApiKey;

    // Tambahkan pesan user ke UI
    const newUserMsg = { id: Date.now(), role: 'user', text: inputValue };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const fullPrompt = generateSystemPrompt(newUserMsg.text);

      // 2. Panggil API (Menggunakan model terbaru gemini-2.5-flash-preview-09-2025)
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${finalApiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: fullPrompt }] }]
          }),
        }
      );

      const data = await response.json();

      // Cek error dari API
      if (data.error) {
        throw new Error(data.error.message || "Terjadi kesalahan pada API Gemini.");
      }

      const botResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, saya tidak mengerti.";

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'model', text: botResponseText }
      ]);

    } catch (error) {
      console.error("Error:", error);
      let errorMsg = "Maaf, terjadi gangguan koneksi.";
      
      // Deteksi jika error karena API Key tidak valid/kosong saat di luar preview
      // if (error.message.includes("API key not valid") || error.message.includes("key")) {
      //   errorMsg = "Error: API Key tidak valid atau belum diisi di Pengaturan.";
      //   setShowConfig(true); // Otomatis buka pengaturan jika error key
      // }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: 'model', text: errorMsg }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans text-slate-800 antialiased relative min-h-screen bg-slate-50 flex items-center justify-center p-4">
      {/* Konten Halaman Utama */}
      <div className="text-center space-y-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-slate-900">Selamat Datang</h1>
        <p className="text-lg text-slate-600">
          Website ini sudah terintegrasi dengan Chatbot Gemini.
        </p>
        <div className="p-4 bg-green-100 border border-green-300 rounded-lg text-sm text-green-800 inline-block text-left">
          <strong>Status Perbaikan:</strong>
          <ul className="list-disc ml-5 mt-1">
            <li>Bug pengiriman pesan telah diperbaiki.</li>
            <li>API Key otomatis aktif untuk testing di preview ini.</li>
            <li>Jika ingin deploy ke production, silakan isi Key manual di icon Gear.</li>
          </ul>
        </div>
      </div>

      {/* --- CHAT WIDGET --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        
        {/* Chat Window */}
        {isOpen && (
          <div className="w-[350px] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
            
            {/* Header */}
            <div className="bg-slate-900 p-4 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Customer Support</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-xs text-slate-300">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                 <button 
                  onClick={() => setShowConfig(!showConfig)}
                  className={`p-1.5 rounded-lg transition-colors ${showConfig ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
                  title="Pengaturan API"
                >
                  <Settings size={18} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors text-slate-300 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Config Panel (Optional Override) */}
            {showConfig && (
              <div className="bg-slate-100 p-4 border-b border-slate-200 text-sm animate-in slide-in-from-top-5">
                <label className="block font-medium text-slate-700 mb-1">Custom API Key (Opsional)</label>
                <input 
                  type="password" 
                  value={userApiKey}
                  onChange={(e) => setUserApiKey(e.target.value)}
                  placeholder="Isi jika key otomatis gagal..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                />
                <p className="text-xs text-slate-500 mb-2">
                  Biarkan kosong untuk menggunakan Test Key bawaan (jika tersedia).
                </p>
              </div>
            )}

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-thin scrollbar-thumb-slate-300">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-blue-500" />
                    <span className="text-xs text-slate-500">Mengetik...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Tulis pesan..."
                  disabled={isLoading}
                  className="flex-1 bg-slate-100 border-0 focus:ring-2 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white transition-all outline-none"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-colors flex items-center justify-center"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${
            isOpen ? 'bg-slate-700 rotate-90' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <MessageCircle size={28} className="text-white" />
          )}
        </button>
      </div>
    </div>
  );
}