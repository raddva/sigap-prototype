export async function sendWA(phone: string, message: string) {
  const WA_TOKEN = process.env.WA_TOKEN; 
  const WA_PHONE_ID = process.env.WA_PHONE_ID;

  if (!WA_TOKEN || !WA_PHONE_ID) {
    console.error("Missing WhatsApp Environment Variables. Cek file .env kamu!");
    return;
  }
  let formattedPhone = phone.replace(/\D/g, ''); 
  if (formattedPhone.startsWith('0')) {
    formattedPhone = '62' + formattedPhone.substring(1);
  }

  try {
    // Memanggil endpoint resmi Meta Graph API
    const response = await fetch(`https://graph.facebook.com/v19.0/${WA_PHONE_ID}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${WA_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: formattedPhone,
        type: "text",
        text: { 
          preview_url: false,
          body: message 
        }
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error("❌ Gagal mengirim WA via Meta API:", data.error?.message || data);
    } else {
      console.log(`✅ Pesan WA berhasil dikirim ke: ${formattedPhone}`);
    }
  } catch (error) {
    console.error("❌ Terjadi kesalahan jaringan pada fungsi sendWA:", error);
  }
}