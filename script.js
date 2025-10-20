const waButton = document.querySelector('#whatsapp-btn');

waButton.addEventListener('click', (e) => {
  e.preventDefault(); // biar link # tidak reload halaman
  const nomor = "6289505043154"; // ganti dengan nomor kamu
  const pesan = encodeURIComponent("Halo, saya tertarik dengan catering Hafari Food 🍱");
  window.open(`https://wa.me/${nomor}?text=${pesan}`, "_blank");
});