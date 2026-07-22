import { GoogleGenAI } from "@google/genai";
import { demoStore } from "./store";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function askGemini(userMessage: string) {
  const prompt = `
Kamu adalah AI Assistant resmi SIGAP (Sistem Informasi Gerak Adaptif Perlindungan Sosial).

Tugasmu:
- Membantu warga terkait bantuan sosial.
- Jawab menggunakan Bahasa Indonesia yang sopan.
- Jangan mengarang data.
- Jika informasi tidak tersedia, katakan bahwa petugas akan membantu.
- Jawaban maksimal 150 kata.

DATA WARGA
Nama: ${demoStore.citizenName}
Status Verifikasi: ${demoStore.status}
Sudah Upload Bukti: ${demoStore.evidenceUploaded ? "Ya" : "Belum"}

Pertanyaan Warga:
${userMessage}
`;

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return result.text || "Maaf, saya tidak dapat menjawab saat ini.";
}