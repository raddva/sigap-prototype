// app/screens/settings/components/AiConfigPanel.tsx
'use client';

import { useState } from 'react';
import { initialAiConfig } from '../data';

export default function AiConfigPanel() {
  const [config, setConfig] = useState(initialAiConfig);

  return (
    <div className="space-y-space-12 animate-fade-in block">
      <section className="bg-surface-container-lowest rounded-xl p-space-6 lg:p-space-8 shadow-[0_12px_32px_-4px_rgba(25,28,29,0.03)] border border-outline-variant/30">
        
        <div className="mb-space-8 flex justify-between items-start">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Responsible AI Parameters</h2>
            <p className="text-on-surface-variant">Fine-tune the automated decision engines while maintaining Officer Control.</p>
          </div>
          <div className="bg-surface-container-high px-3 py-1 rounded-full flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className="font-label-sm text-label-sm text-primary">Active</span>
          </div>
        </div>

        <div className="space-y-space-10">
          {/* Slider 1 */}
          <div>
            <div className="flex justify-between items-end mb-4">
              <div>
                <label className="font-label-lg text-label-lg text-on-surface block mb-1">Eligibility Score Threshold</label>
                <p className="font-label-sm text-label-sm text-on-surface-variant max-w-md">Minimum composite score required for automatic preliminary approval.</p>
              </div>
              <span className="font-headline-md text-headline-md text-primary">{config.eligibilityScore}</span>
            </div>
            <input 
              type="range" 
              min="0" max="100" 
              value={config.eligibilityScore}
              onChange={(e) => setConfig({...config, eligibilityScore: parseInt(e.target.value)})}
              className="settings-slider"
            />
          </div>

          {/* Slider 2 */}
          <div>
            <div className="flex justify-between items-end mb-4">
              <div>
                <label className="font-label-lg text-label-lg text-on-surface block mb-1">AI Confidence Minimum</label>
                <p className="font-label-sm text-label-sm text-on-surface-variant max-w-md">Required certainty level before AI suggests an action to the Officer.</p>
              </div>
              <span className="font-headline-md text-headline-md text-primary">{config.confidenceMin}%</span>
            </div>
            <input 
              type="range" 
              min="50" max="99" 
              value={config.confidenceMin}
              onChange={(e) => setConfig({...config, confidenceMin: parseInt(e.target.value)})}
              className="settings-slider"
            />
          </div>

          {/* Toggle Section */}
          <div className="bg-surface-container-low p-space-6 rounded-xl space-y-space-6 mt-space-8 border border-outline-variant/20">
            <h3 className="font-label-lg text-label-lg text-on-surface mb-2">Officer Control & Sensitivity</h3>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-body-md text-body-md font-medium text-on-surface">Economic Change Sensitivity</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Flag minor income fluctuations for manual review.</p>
              </div>
              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <input 
                  type="checkbox" 
                  id="toggle1" 
                  checked={config.economicSensitivity}
                  onChange={(e) => setConfig({...config, economicSensitivity: e.target.checked})}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out z-10" 
                />
                <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-container-high cursor-pointer transition-colors duration-200 ease-in-out"></label>
              </div>
            </div>
            
            <div className="w-full h-px bg-outline-variant/30"></div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-body-md text-body-md font-medium text-on-surface">Require Manual Sign-off on Denials</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">All AI-suggested rejections must be reviewed by a human officer.</p>
              </div>
              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <input 
                  type="checkbox" 
                  id="toggle2" 
                  disabled
                  checked={config.requireManualSignoff}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-not-allowed transition-transform duration-200 ease-in-out z-10" 
                />
                <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-6 rounded-full bg-primary/50 cursor-not-allowed transition-colors duration-200 ease-in-out opacity-70"></label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-space-8 pt-space-6 border-t border-outline-variant/30 flex justify-end gap-4">
          <button 
            onClick={() => setConfig(initialAiConfig)}
            className="px-6 py-2.5 rounded-xl font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-low transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            Discard Changes
          </button>
          <button className="px-6 py-2.5 rounded-xl font-label-lg text-label-lg text-white bg-linear-to-r from-primary to-primary-container hover:shadow-lg hover:shadow-primary/20 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50">
            Save Configuration
          </button>
        </div>
      </section>
    </div>
  );
}