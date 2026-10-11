/* =========================================================
   script.js – Portofolio Aris Nur Hidayat
   Isi: 1) menu mobile  2) animasi muncul saat scroll
        3) foto cadangan jika foto.jpg belum ada  4) tahun footer
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. Menu mobile ---------- */
  var tombolMenu = document.getElementById("menu-toggle");
  var menu = document.getElementById("nav-menu");

  tombolMenu.addEventListener("click", function () {
    var terbuka = menu.classList.toggle("open");
    tombolMenu.setAttribute("aria-expanded", String(terbuka));
  });

  // Tutup menu setelah salah satu tautan diklik
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("open");
      tombolMenu.setAttribute("aria-expanded", "false");
    });
  });


  /* ---------- 2. Animasi muncul saat di-scroll ---------- */
  var elemen = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var pengamat = new IntersectionObserver(function (daftar) {
      daftar.forEach(function (item) {
        if (item.isIntersecting) {
          item.target.classList.add("visible");
          pengamat.unobserve(item.target); // animasi hanya sekali
        }
      });
    }, { threshold: 0.15 });

    elemen.forEach(function (el) { pengamat.observe(el); });
  } else {
    // Browser lama: langsung tampilkan semua
    elemen.forEach(function (el) { el.classList.add("visible"); });
  }


  /* ---------- 3. Foto profil: tampilkan inisial jika foto.jpg tidak ada ---------- */
  var foto = document.getElementById("foto");
  var cadangan = document.getElementById("foto-cadangan");

  function pakaiCadangan() {
    foto.hidden = true;
    cadangan.hidden = false;
  }

  foto.addEventListener("error", pakaiCadangan);
  // Jika gambar sudah gagal dimuat sebelum script ini berjalan
  if (foto.complete && foto.naturalWidth === 0) { pakaiCadangan(); }


  /* ---------- 4. Tahun otomatis di footer ---------- */
  document.getElementById("tahun").textContent = new Date().getFullYear();

});
