// src/app/screens/appeals/components/PageHeader.tsx
import React from 'react';

export default function PageHeader() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-[#002b73] mb-2" style={{ fontFamily: "Public Sans, sans-serif" }}>
        Appeals & Complaints
      </h1>
      <p className="text-[15px] text-gray-600 max-w-3xl">
        Fairness and human oversight in social assistance disputes.
      </p>
    </div>
  );
}