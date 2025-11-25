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

};