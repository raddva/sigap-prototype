// src/app/screens/security-logs/components/PageHeader.tsx
import React from 'react';

export default function PageHeader() {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold text-[#002b73] mb-2" style={{ fontFamily: "Public Sans, sans-serif" }}>
        Security & Audit Logs
      </h1>
      <p className="text-lg text-gray-500">
        Transparent activity monitoring for national-scale deployment
      </p>
    </div>
  );
}