
export default function WhatsAppPreview() {
  const bgPattern = "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d5d0ca' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")";

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-space-6 shadow-[0_12px_32px_-4px_rgba(25,28,29,0.06)] border border-outline-variant/10 w-full max-w-sm flex flex-col items-center">
      <div className="w-full flex items-center justify-between mb-space-6">
        <h3 className="text-headline-md font-headline-md text-on-surface text-[18px]">Message Preview</h3>
        <div className="bg-surface-container px-2 py-1 rounded text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Live View</div>
      </div>
      
      {/* Mobile Phone Frame */}
      <div className="w-70 h-145 border-10 border-surface-container-highest rounded-[2.5rem] overflow-hidden bg-[#efeae2] shadow-inner relative flex flex-col">
        {/* Status Bar */}
        <div className="h-6 bg-[#075e54] flex justify-between items-center px-4 text-white text-[10px]">
          <span>09:41</span>
          <div className="flex gap-1">
            <span className="material-symbols-outlined text-[12px]">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-[12px]">wifi</span>
            <span className="material-symbols-outlined text-[12px]">battery_full</span>
          </div>
        </div>
        
        {/* WA Header */}
        <div className="bg-[#075e54] text-white px-3 py-2 flex items-center gap-3 shadow-md z-10">
          <span className="material-symbols-outlined">arrow_back</span>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img alt="SIGAP Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKsnv-QuYCtER9cR0xdFmUup9BNCNB7X0P7VkeHw5uWIcsTh1x-2mMt7nyFLvyciabamK119ONz0WjUdjDzqF_1kSQvCFaF7QaTAlKQ44dpJax6_EKqcwXRD4S4dWi3F-LwWbhVlF9GOk9BeIRF_s9zKJWWlr_v9lZeeuRnJN8jA3vkzt9Op3lfRu1Gg6bBiNH02o9ZB3fJ7TVtVdgGGrEi1zdV08jCBWlIyZSPJdjrIsiE6zZZS3rIkRDDfsazlar4Q2553a7WjE2" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="font-bold text-[14px] leading-tight">SIGAP Official</span>
              <span className="material-symbols-outlined icon-fill text-[#00a884] text-[14px]">verified</span>
            </div>
            <span className="text-[10px] opacity-80">Official Business Account</span>
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="flex-1 p-3 flex flex-col gap-3 overflow-y-auto" style={{ backgroundImage: bgPattern }}>
          <div className="flex justify-center mb-2">
            <span className="bg-[#e1f3fb] text-[#54656f] text-[10px] px-2 py-1 rounded-lg shadow-sm">Today</span>
          </div>
          
          <div className="bg-white rounded-lg rounded-tl-none p-3 max-w-[90%] shadow-sm relative self-start">
            <p className="text-[13px] text-[#111b21] leading-relaxed mb-1">
              Hello <span className="font-bold">Budi Santoso</span>, this is the SIGAP system. Please verify your recent change in household status regarding your economic update request.
            </p>
            <p className="text-[12px] text-[#54656f] mb-3">Ref ID: RQ-9982-A</p>
            <button className="w-full bg-[#00a884] text-white py-2 rounded text-[13px] font-bold shadow-sm hover:bg-[#008f6f] transition-colors">
              Start Verification
            </button>
            <div className="flex justify-end items-center gap-1 mt-1">
              <span className="text-[10px] text-[#667781]">09:42</span>
            </div>
          </div>
        </div>
        
        {/* WA Input Area */}
        <div className="bg-[#f0f2f5] p-2 flex items-center gap-2">
          <div className="bg-white flex-1 rounded-full px-3 py-2 flex items-center shadow-sm">
            <span className="material-symbols-outlined text-[#54656f] text-[20px]">mood</span>
            <span className="text-[#8696a0] text-[14px] ml-2 flex-1 truncate">Type a message</span>
          </div>
          <div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center text-white shadow-sm">
            <span className="material-symbols-outlined text-[20px]">mic</span>
          </div>
        </div>
      </div>
      
      <div className="mt-space-6 text-center">
        <p className="text-label-sm font-label-sm text-on-surface-variant">This template auto-fills citizen data dynamically.</p>
      </div>
    </div>
  );
}