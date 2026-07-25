"use client";

import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  citizen: any | null;
  onClose?: () => void;
};

export default function CitizenDetailPanel({ citizen, onClose }: Props) {
  const router = useRouter();

  const triggerDemoAnomaly = async () => {
    if (!citizen?.nik) return;
    
    alert('Mengirim pesan WhatsApp ke warga...');    
    try {
      const res = await fetch('/api/trigger-anomaly', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Sekarang kita kirim NIK, bukan hardcode nomor telepon
        body: JSON.stringify({ nik: citizen.nik }) 
      });
      
      const data = await res.json();
      if (res.ok) {
        alert('Pesan berhasil terkirim!');
      } else {
        alert(`Gagal mengirim pesan: ${data.error}`);
      }
    } catch (error) {
      alert('Terjadi kesalahan jaringan.');
    }
  };

  const handleTriggerDemo = () => {
    alert(
      "⚠️ Feature Under Development\n\n" +
      "The 'Trigger WA Anomaly' feature is designed to automatically send WhatsApp notifications to citizens when an economic anomaly is detected.\n\n" +
      "This functionality is currently under active development (approximately 80% complete) and has been temporarily disabled in the public prototype for demonstration purposes."
    );
  };

  const handleAdminAction = async (action: 'approve' | 'reject') => {
    if (!citizen?.nik) return;
    
    alert(`Memproses ${action}... Sistem akan memberitahu warga via WhatsApp.`);
    await fetch('/api/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Kirim NIK agar backend tahu warga mana yang diupdate
      body: JSON.stringify({ action, nik: citizen.nik })
    });
  };

  if (!citizen) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full sticky top-8 items-center justify-center p-10 text-center min-h-[500px]">
        <span className="material-symbols-outlined text-gray-300 text-5xl mb-3">
          person_search
        </span>
        <p className="text-gray-500 text-sm">
          Select a citizen to view details
        </p>
      </div>
    );
  }

  const getDesilInfo = (desil: number) => {
    switch (desil) {
      case 1:
        return {
          label: "Very Poor",
          color: "bg-red-100 text-red-700",
        };

      case 2:
        return {
          label: "Poor",
          color: "bg-orange-100 text-orange-700",
        };

      case 3:
        return {
          label: "Lower Middle",
          color: "bg-yellow-100 text-yellow-700",
        };

      case 4:
        return {
          label: "Upper Middle",
          color: "bg-lime-100 text-lime-700",
        };

      default:
        return {
          label: "Prosperous",
          color: "bg-blue-100 text-blue-700",
        };
    }
  };

  const desilInfo = getDesilInfo(citizen.desil);
  // Fallback inisial nama jika avatar tidak ada
  const initials = citizen.name ? citizen.name.substring(0, 2).toUpperCase() : "NA";
  // Ambil data AI jika ada
  const aiData = citizen.ai_cases;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full sticky top-8">
      {/* HEADER */}
      <div className="p-6 border-b border-gray-100 flex justify-between items-start">
        <div className="flex items-center gap-4">
          {citizen.avatar ? (
            <img
              src={citizen.avatar}
              alt={citizen.name}
              className="w-14 h-14 rounded-full border border-gray-200 object-cover"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
              {initials}
            </div>
          )}

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {citizen.name}
            </h2>
            {/* ID & DESIL BADGES */}
            <div className="flex items-center text-sm text-gray-500 gap-3 mt-1">
              <div className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded text-xs font-medium">
                <span className="material-symbols-outlined text-[14px]">badge</span>
                {citizen.nik}
              </div>
              
              {/* BADGE DESIL */}
              <div className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold ${
                citizen.desil <= 4 ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
              }`}>
                <span className="material-symbols-outlined text-[14px]">pie_chart</span>
                Desil {citizen.desil ?? "-"}
              </div>
            </div>
          </div>
        </div>
        
        {/* Tombol Close */}
        {onClose && (
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700">
            <span className="material-symbols-outlined">close</span>
          </button>
        )}
      </div>

      {/* BODY */}
      <div className="p-6 flex-1 overflow-y-auto flex flex-col gap-6">
        {/* PROFILE INFORMATION */}
        <div className="border rounded-xl p-5">
          <h3 className="text-sm font-bold text-gray-900 mb-4">
            Citizen Information
          </h3>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
            <div>
              <p className="text-gray-500">Province</p>
              <p className="font-semibold">
                {citizen.province}
              </p>
            </div>
            <div>
              <p className="text-gray-500">City</p>
              <p className="font-semibold">
                {citizen.city}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Family Members</p>
              <p className="font-semibold">
                {citizen.family_members} Person
              </p>
            </div>
            <div>
              <p className="text-gray-500">Phone Number</p>
              <p className="font-semibold">
                {citizen.phone}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Occupation</p>
              <p className="font-semibold">
                {citizen.occupation}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Employment</p>
              <p className="font-semibold">
                {citizen.employment_status}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Monthly Income</p>
              <p className="font-semibold">
                Rp {Number(citizen.monthly_income).toLocaleString("id-ID")}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Monthly Expense</p>
              <p className="font-semibold">
                Rp {Number(citizen.monthly_expense).toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        </div>
        {/* SOCIAL ASSISTANCE STATUS */}
        <div className="border rounded-xl p-5">
          <h3 className="text-sm font-bold text-gray-900 mb-4">
            Social Assistance Status
          </h3>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Eligibility Score</span>
                <span className="font-bold text-[#002b73]">
                  {citizen.eligibility_score}/100
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-[#002b73]"
                  style={{
                    width: `${citizen.eligibility_score}%`,
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Verification Confidence</span>
                <span className="font-bold text-green-700">
                  {citizen.verification_confidence}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-green-600"
                  style={{
                    width: `${citizen.verification_confidence}%`,
                  }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Desil Category
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${desilInfo.color}`}
              >
                Desil {citizen.desil} • {desilInfo.label}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Verification Status
              </span>
              <span className="font-semibold">
                {citizen.verification_status}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Last Verification
              </span>
              <span className="font-semibold">
                {citizen.last_verification
                  ? new Date(citizen.last_verification).toLocaleString("id-ID")
                  : "-"}
              </span>
            </div>
          </div>
        </div>

        {/* EVIDENCE */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            Uploaded Evidence
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 border rounded-xl p-5 flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-[#002b73]">
                description
              </span>
              <p className="text-xs mt-2 font-medium">
                Income Report.pdf
              </p>
            </div>
            <div className="bg-gray-50 border rounded-xl p-5 flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-[#002b73]">
                badge
              </span>
              <p className="text-xs mt-2 font-medium">
                Identity Card.jpg
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="p-5 border-t border-gray-100 flex flex-col gap-3 mt-auto">
        <button
          onClick={handleTriggerDemo}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-bold hover:bg-green-800 transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">warning</span>
          Trigger WA Anomaly
        </button>

        <div className="flex gap-3">
          <button 
            onClick={() => handleAdminAction('reject')}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold text-sm rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            Reject
          </button>
          
          <button 
            onClick={() => handleAdminAction('approve')}
            className="flex-1 px-4 py-2 bg-[#002b73] text-white font-bold text-sm rounded-lg hover:bg-[#001f52] transition-colors shadow-sm"
          >
            Approve & Notify
          </button>
        </div>
      </div>
    </div>
  );
}