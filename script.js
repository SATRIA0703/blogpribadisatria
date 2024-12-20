// Ambil elemen form
const guestbookForm = document.querySelector('.guestbook-form');

// Tambahkan event listener untuk menangani submit form
guestbookForm.addEventListener('submit', function(event) {
    // Mencegah halaman melakukan reload
    event.preventDefault();

    // Ambil nilai dari inputan form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Cek apakah semua field sudah diisi
    if (name && email && message) {
        // Tampilkan notifikasi sukses
        alert(`Pesan berhasil terkirim! \n\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`);

        // Reset form setelah pesan terkirim
        guestbookForm.reset();
    } else {
        // Tampilkan notifikasi error jika ada field kosong
        alert('Harap isi semua field sebelum mengirim pesan!');
    }
});
