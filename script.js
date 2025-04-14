function kirimJawaban() {
  const nim = document.getElementById("nim").value.trim();
  const nama = document.getElementById("nama").value.trim();
  const jawaban = [];

  for (let i = 1; i <= 5; i++) {
    const pilihan = document.querySelector(`input[name="soal${i}"]:checked`);
    jawaban.push(pilihan ? pilihan.value : 'Belum dijawab');
  }

  const data = {
    nim,
    nama,
    jawaban1: jawaban[0],
    jawaban2: jawaban[1],
    jawaban3: jawaban[2],
    jawaban4: jawaban[3],
    jawaban5: jawaban[4]
  };

  fetch("https://script.google.com/macros/s/PASTE_LINK_WEBAPP_DI_SINI/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.text())
  .then(result => {
    alert("Jawaban berhasil dikirim ke Google Sheets.");
    location.reload();
  })
  .catch(error => {
    console.error("Gagal kirim:", error);
    alert("Terjadi kesalahan saat mengirim jawaban.");
  });
}
