// src/app/screens/settings/components/SettingsHeader.tsx
import React from 'react';

export default function SettingsHeader() {
  return (
    <div className="mb-8 pt-4">
      <h1 className="text-3xl font-bold text-[#002b73] mb-2" style={{ fontFamily: "Public Sans, sans-serif" }}>
        System Settings
      </h1>
      <p className="text-lg text-gray-500 max-w-3xl">
        Configure SIGAP operational parameters and integrations
      </p>
    </div>
  );
}