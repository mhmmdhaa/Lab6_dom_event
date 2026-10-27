const form = document.getElementById("formWorkshop");
const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const sesiSelect = document.getElementById("sesi");

const jumlahKarakterNama = document.getElementById("jumlahKarakterNama");
const previewNama = document.getElementById("previewNama");
const previewEmail = document.getElementById("previewEmail");
const previewSesi = document.getElementById("previewSesi");
const pesanNotifikasi = document.getElementById("pesanNotifikasi");
const btnReset = document.getElementById("btnReset");

namaInput.addEventListener("input", function () {
    const teks = namaInput.value;
    jumlahKarakterNama.textContent = teks.length;
    previewNama.textContent = teks.trim() !== "" ? teks : "-";
});

emailInput.addEventListener("input", function () {
    const teks = emailInput.value.trim();
    previewEmail.textContent = teks !== "" ? teks : "-";
});

sesiSelect.addEventListener("change", function () {
    const pilihan = sesiSelect.value;
    previewSesi.textContent = pilihan !== "" ? pilihan : "-";
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaInput.value.trim();
    const email = emailInput.value.trim();
    const sesi = sesiSelect.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    pesanNotifikasi.className = "notifikasi";

    if (nama === "") {
        tampilkanNotifikasi("Nama lengkap wajib diisi.", "error");
    } else if (nama.length < 3) {
        tampilkanNotifikasi("Nama lengkap minimal terdiri dari 3 karakter.", "error");
    } else if (email === "") {
        tampilkanNotifikasi("Alamat email wajib diisi.", "error");
    } else if (!polaEmail.test(email)) {
        tampilkanNotifikasi("Masukkan alamat email yang valid.", "error");
    } else if (sesi === "") {
        tampilkanNotifikasi("Silakan pilih salah satu sesi workshop.", "error");
    } else {
        tampilkanNotifikasi("Pendaftaran berhasil! Terima kasih telah mendaftar.", "sukses");
        form.reset();
        resetPreview();
    }
});

btnReset.addEventListener("click", function () {
    form.reset();
    resetPreview();
    pesanNotifikasi.className = "notifikasi";
    pesanNotifikasi.style.display = "none";
});

function tampilkanNotifikasi(pesan, tipe) {
    pesanNotifikasi.textContent = pesan;
    pesanNotifikasi.className = `notifikasi ${tipe}`;
}

function resetPreview() {
    jumlahKarakterNama.textContent = "0";
    previewNama.textContent = "-";
    previewEmail.textContent = "-";
    previewSesi.textContent = "-";
}