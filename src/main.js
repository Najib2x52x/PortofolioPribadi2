// src/main.js

import './style.css'

// ------------------------------------------------------------------
// Inisialisasi DOM
// Logika portofolio harus menunggu DOM selesai dimuat (DOMContentLoaded)
// atau dijalankan setelah elemen HTML dipastikan ada.
// Dalam konteks ini, kita menggunakan window.onload untuk keamanan,
// meskipun dalam praktik Vite/module, kode di luar listener sudah berjalan
// setelah DOM parser berjalan, tetapi agar lebih bersih, kita bungkus.
// ------------------------------------------------------------------

window.onload = () => {
    // Definisi global elemen setelah DOM dimuat
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Asumsi: #app dan setupCounter sudah tidak digunakan di index.html,
    // karena kita menggunakan HTML statis untuk portofolio.
    
    // ------------------------------------------------------------------
    // FUNGSI UTAMA
    // ------------------------------------------------------------------

    // Fungsi untuk memperbarui kelas 'active' pada link
    function updateActiveLink(currentSectionId) {
        navLinks.forEach(link => {
            // Hapus styling aktif (text-blue-600) dari semua link
            link.classList.remove('text-blue-600', 'active');
            link.classList.add('text-gray-600');
            
            // Tambahkan styling aktif jika href cocok dengan ID section saat ini
            if (link.getAttribute('href').slice(1) === currentSectionId) {
                link.classList.add('text-blue-600', 'active');
                link.classList.remove('text-gray-600');
            }
        });
    }

    // Logika untuk Animasi Skill Bar
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('#about .bg-gradient-to-r');
        
        skillBars.forEach(bar => {
            // Kita ambil nilai persentase dari teks di sebelahnya
            const dataProgressSpan = bar.parentNode.previousElementSibling.querySelector('span:last-child');
            const dataProgress = dataProgressSpan ? dataProgressSpan.textContent : '0%'; 
            
            const currentWidth = bar.style.width;
            
            // Jika belum memiliki width (atau 0%), set width-nya
            if (!currentWidth || currentWidth === '0%' || currentWidth === '') {
                bar.style.width = dataProgress;
            }
        });
    }
    
    // ------------------------------------------------------------------
    // 1. Smooth Scrolling & Active Link Saat Klik
    // ------------------------------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                // Offset untuk fixed navbar
                const navbarHeight = 90; 
                const targetPosition = target.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update link aktif segera setelah diklik
                updateActiveLink(targetId.substring(1));
            }
        });
    });

    // ------------------------------------------------------------------
    // 2. Active Navigation Highlight (Intersection Observer)
    // ------------------------------------------------------------------

    const observerOptions = {
        // Memicu saat section masuk di bawah navbar (90px dari atas)
        rootMargin: "-90px 0px -50% 0px", 
        threshold: 0.0 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSectionId = entry.target.getAttribute('id');
                
                // Mencegah observer berulang-ulang memanggil fungsi jika sudah di posisi
                if (currentSectionId) {
                    updateActiveLink(currentSectionId);
                    
                    // Trigger animasi skill bar hanya saat Section About muncul
                    if (currentSectionId === 'about') {
                        animateSkillBars();
                    }
                }
            }
        });
    }, observerOptions);

    // Tambahkan observer ke semua section
    sections.forEach(section => {
        observer.observe(section);
    });

    // Inisialisasi: Pastikan Home aktif saat load
    updateActiveLink('home'); 
    
    // ------------------------------------------------------------------
    // 3. Logika Hamburger Menu (Tambahan)
    // ------------------------------------------------------------------
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('icon-open');
    const iconClose = document.getElementById('icon-close');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileBtn && mobileMenu) {
        // Fungsi Toggle Menu
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            iconOpen.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
        });

        // Tutup menu saat salah satu link diklik
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden'); // Sembunyikan menu
                iconOpen.classList.remove('hidden'); // Munculkan ikon hamburger
                iconClose.classList.add('hidden');   // Sembunyikan ikon X
            });
        });
    }

    // ... (kode sebelumnya tetap ada) ...

    // ------------------------------------------------------------------
    // 4. LOGIKA FORMULIR KONTAK (AJAX + NOTIFIKASI)
    // ------------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const btnSubmit = document.getElementById('btnSubmit');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah reload halaman

            // 1. Ubah tombol jadi "Loading..."
            const originalBtnContent = btnSubmit.innerHTML;
            btnSubmit.innerHTML = '<span>Mengirim... ⏳</span>';
            btnSubmit.disabled = true;
            btnSubmit.classList.add('opacity-70', 'cursor-not-allowed');

            // 2. Kirim data via Fetch API
            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json' // Penting agar FormSubmit tidak redirect
                }
            })
            .then(response => {
                if (response.ok) {
                    // SUKSES: Tampilkan Notifikasi SweetAlert
                    Swal.fire({
                        title: 'Berhasil Terkirim!',
                        text: 'Terima kasih telah menghubungi saya. Saya akan membalas pesan Anda secepatnya.',
                        icon: 'success',
                        confirmButtonColor: '#3b82f6', // Warna biru sesuai tema
                        confirmButtonText: 'Oke, Siap!'
                    });
                    
                    // Reset formulir
                    contactForm.reset();
                } else {
                    // GAGAL dari Server
                    throw new Error('Terjadi kesalahan pada server');
                }
            })
            .catch(error => {
                // ERROR Jaringan / Lainnya
                Swal.fire({
                    title: 'Gagal Mengirim',
                    text: 'Sepertinya ada masalah koneksi. Silakan coba lagi nanti atau hubungi via WhatsApp.',
                    icon: 'error',
                    confirmButtonColor: '#ef4444'
                });
            })
            .finally(() => {
                // 3. Kembalikan tombol seperti semula
                btnSubmit.innerHTML = originalBtnContent;
                btnSubmit.disabled = false;
                btnSubmit.classList.remove('opacity-70', 'cursor-not-allowed');
            });
        });
    }

    // ... (kode sebelumnya) ...

    // ------------------------------------------------------------------
    // 5. LOGIKA INTERAKSI KONTAK (Copy Email, WA, Maps)
    // ------------------------------------------------------------------

    // A. Fitur Copy Email
    const btnCopyEmail = document.getElementById('btn-copy-email');
    const textEmail = document.getElementById('text-email');

    if (btnCopyEmail && textEmail) {
        btnCopyEmail.addEventListener('click', () => {
            // Ambil teks email
            const emailValue = textEmail.innerText.trim();
            
            // Salin ke clipboard
            navigator.clipboard.writeText(emailValue).then(() => {
                // Tampilkan Toast Notification (Notifikasi Kecil di Pojok)
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                });

                Toast.fire({
                    icon: 'success',
                    title: 'Email berhasil disalin!'
                });
            }).catch(err => {
                console.error('Gagal menyalin: ', err);
            });
        });
    }

    // B. Fitur Link WhatsApp
    const btnWa = document.getElementById('btn-wa');
    if (btnWa) {
        btnWa.addEventListener('click', () => {
            // GANTI NOMOR DI SINI (Format: Kode Negara + Nomor, tanpa + atau 0 di depan)
            // Contoh: 6281234567890
            const phoneNumber = "6281234567890"; 
            const message = "Halo, saya melihat portofolio Anda dan ingin berdiskusi.";
            
            // Buka tab baru ke API WhatsApp
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
        });
    }

    // C. Fitur Google Maps
    // C. Fitur Google Maps (Pakai Link Share Langsung)
    const btnMap = document.getElementById('btn-map');
    if (btnMap) {
        btnMap.addEventListener('click', () => {
            // Masukkan link Google Maps yang kamu punya di dalam tanda kutip
            const myMapLink = "https://maps.app.goo.gl/L5x65ob9cv8aHDvKA"; 
            
            // Buka di tab baru
            window.open(myMapLink, '_blank');
        });
    }

// ... penutup kurung kurawal window.onload

};