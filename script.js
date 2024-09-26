document.addEventListener('DOMContentLoaded', function() {
    // Mengisi nama di halaman utama
    const welcomeMessage = document.querySelector('#home h1');
    if (welcomeMessage) {
        const name = prompt('Masukkan nama Anda:') || 'Tamu';
        welcomeMessage.textContent = `Hi ${name}, Welcome To Website`;
    }

    // Validasi form
    const form = document.getElementById('message-form');
    const output = document.getElementById('output');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const nama = document.getElementById('nama').value;
            const tanggalLahir = document.getElementById('tanggal-lahir').value;
            const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked');
            const pesan = document.getElementById('pesan').value;

            if (!nama || !tanggalLahir || !jenisKelamin || !pesan) {
                alert('Semua field harus diisi!');
                return;
            }

            const currentTime = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

            const outputText = `
                Current time: ${currentTime}
                Nama: ${nama}
                Tanggal Lahir: ${tanggalLahir}
                Jenis Kelamin: ${jenisKelamin.value}
                Pesan: ${pesan}
            `;

            output.textContent = outputText;
        });
    }
});