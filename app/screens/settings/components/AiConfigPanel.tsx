// src/app/screens/settings/components/AiConfigPanel.tsx
'use client';

import React, { useState } from 'react';
import { initialAiConfig } from '../data';

export default function AiConfigPanel() {
  const [config, setConfig] = useState(initialAiConfig);

  return (
    <div className="space-y-8 animate-fade-in block">
      <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
        
        {/* Header Panel */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Public Sans, sans-serif" }}>
              Responsible AI Parameters
            </h2>
            <p className="text-gray-500 text-sm">
              Fine-tune the automated decision engines while maintaining Officer Control.
            </p>
          </div>
          <div className="bg-[#e8f0fe] px-3 py-1 rounded-full flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-[#002b73]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified_user
            </span>
            <span className="text-xs font-bold text-[#002b73]">Active</span>
          </div>
        </div>

        <div className="space-y-10">
          {/* Slider 1: Eligibility Score */}
          <div>
            <div className="flex justify-between items-end mb-4">
              <div>
                <label className="text-sm font-bold text-gray-900 block mb-1">Eligibility Score Threshold</label>
                <p className="text-xs text-gray-500 max-w-md">Minimum composite score required for automatic preliminary approval.</p>
              </div>
              <span className="text-3xl font-bold text-[#002b73]">{config.eligibilityScore}</span>
            </div>
            <input 
              type="range" 
              min="0" max="100" 
              value={config.eligibilityScore}
              onChange={(e) => setConfig({...config, eligibilityScore: parseInt(e.target.value)})}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#002b73]"
            />
          </div>

          {/* Slider 2: AI Confidence */}
          <div>
            <div className="flex justify-between items-end mb-4">
              <div>
                <label className="text-sm font-bold text-gray-900 block mb-1">AI Confidence Minimum</label>
                <p className="text-xs text-gray-500 max-w-md">Required certainty level before AI suggests an action to the Officer.</p>
              </div>
              <span className="text-3xl font-bold text-[#002b73]">{config.confidenceMin}%</span>
            </div>
            <input 
              type="range" 
              min="50" max="99" 
              value={config.confidenceMin}
              onChange={(e) => setConfig({...config, confidenceMin: parseInt(e.target.value)})}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#002b73]"
            />
          </div>

          {/* Toggle Section */}
          <div className="bg-[#f8f9fa] p-6 rounded-xl space-y-6 mt-8 border border-gray-100">
            <h3 className="text-sm font-bold text-gray-900 mb-2">Officer Control & Sensitivity</h3>
            
            {/* Toggle 1 */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Economic Change Sensitivity</h4>
                <p className="text-xs text-gray-500 mt-1">Flag minor income fluctuations for manual review.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={config.economicSensitivity}
                  onChange={(e) => setConfig({...config, economicSensitivity: e.target.checked})}
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#002b73]"></div>
              </label>
            </div>
            
            <div className="w-full h-px bg-gray-200"></div>
            
            {/* Toggle 2 */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Require Manual Sign-off on Denials</h4>
                <p className="text-xs text-gray-500 mt-1">All AI-suggested rejections must be reviewed by a human officer.</p>
              </div>
              <label className="relative inline-flex items-center cursor-not-allowed opacity-80">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  disabled
                  checked={config.requireManualSignoff}
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0056D2]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end gap-3">
          <button 
            onClick={() => setConfig(initialAiConfig)}
            className="px-6 py-2.5 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
          >
            Discard Changes
          </button>
          <button className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-[#002b73] hover:bg-[#001f54] shadow-sm transition-colors focus:outline-none">
            Save Configuration
          </button>
        </div>
      </section>
    </div>
  );
}