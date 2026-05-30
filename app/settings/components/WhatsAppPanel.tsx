// app/screens/settings/components/WhatsAppPanel.tsx

import { whatsappStatus } from '../data';

export default function WhatsAppPanel() {
  return (
    <div className="space-y-space-12 animate-fade-in">
      <section className="bg-surface-container-lowest rounded-xl p-space-6 lg:p-space-8 shadow-[0_12px_32px_-4px_rgba(25,28,29,0.03)] border border-outline-variant/30">
        <div className="mb-space-8">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Communication Gateway</h2>
          <p className="text-on-surface-variant">Manage the Baileys WhatsApp integration for citizen notifications.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-8">
          {/* Status Card */}
          <div className="bg-surface-container-low rounded-xl p-space-6 border border-outline-variant/20 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div>
                  <h3 className="font-label-lg text-label-lg text-on-surface">Baileys Connection</h3>
                  <p className="font-label-sm text-label-sm text-secondary">{whatsappStatus.status}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="text-on-surface-variant text-sm">Last Synced</span>
                  <span className="text-on-surface font-medium text-sm">{whatsappStatus.lastSynced}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                  <span className="text-on-surface-variant text-sm">Linked Number</span>
                  <span className="text-on-surface font-medium text-sm">{whatsappStatus.linkedNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant text-sm">Messages Sent (24h)</span>
                  <span className="text-on-surface font-medium text-sm">{whatsappStatus.messagesSent24h}</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 px-4 py-2 rounded-lg border border-outline-variant text-primary font-label-lg text-label-lg hover:bg-surface-container transition-colors">
              Reconnect Device
            </button>
          </div>

          {/* QR Code Placeholder */}
          <div className="bg-surface-container-lowest border-2 border-dashed border-outline-variant rounded-xl p-space-6 flex flex-col items-center justify-center text-center h-full min-h-75">
            <span className="material-symbols-outlined text-4xl text-outline mb-4">qr_code_scanner</span>
            <h4 className="font-label-lg text-label-lg text-on-surface mb-2">Scan to Connect</h4>
            <p className="font-body-md text-sm text-on-surface-variant max-w-50">Open WhatsApp on your designated gateway phone and link a device.</p>
            
            <div className="mt-4 p-4 bg-surface-container rounded-lg blur-sm opacity-50 select-none font-mono text-xs">
              [ QR CODE PLACEHOLDER ]
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}