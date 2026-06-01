// src/app/screens/settings/components/WhatsAppPanel.tsx
import React from 'react';
import { whatsappStatus } from '../data';

export default function WhatsAppPanel() {
  return (
    <div className="space-y-8 animate-fade-in block">
      <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Public Sans, sans-serif" }}>
            Communication Gateway
          </h2>
          <p className="text-gray-500 text-sm">Manage the Baileys WhatsApp integration for citizen notifications.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Status Card */}
          <div className="bg-[#f8f9fa] rounded-xl p-6 border border-gray-100 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#e6f4ea] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#1b6d24]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Baileys Connection</h3>
                  <p className="text-xs font-semibold text-[#1b6d24]">{whatsappStatus.status}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500 text-sm">Last Synced</span>
                  <span className="text-gray-900 font-medium text-sm">{whatsappStatus.lastSynced}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-500 text-sm">Linked Number</span>
                  <span className="text-gray-900 font-medium text-sm">{whatsappStatus.linkedNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Messages Sent (24h)</span>
                  <span className="text-gray-900 font-medium text-sm">{whatsappStatus.messagesSent24h}</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 px-4 py-2 rounded-lg border border-gray-300 text-[#002b73] text-sm font-bold hover:bg-gray-50 transition-colors">
              Reconnect Device
            </button>
          </div>

          {/* QR Code Placeholder */}
          <div className="bg-white border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
            <span className="material-symbols-outlined text-4xl text-gray-300 mb-4">qr_code_scanner</span>
            <h4 className="text-sm font-bold text-gray-900 mb-2">Scan to Connect</h4>
            <p className="text-xs text-gray-500 max-w-[200px]">Open WhatsApp on your designated gateway phone and link a device.</p>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-lg blur-sm opacity-50 select-none font-mono text-xs text-gray-400">
              [ QR CODE PLACEHOLDER ]
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}