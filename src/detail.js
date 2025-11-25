
// src/detail.js
import './style.css' // Import CSS agar Vite memprosesnya

// 1. DATABASE PROJECT
const projectDatabase = {
    "keluang": {
        title: "KeLuang: Aplikasi Keuangan Keluarga",
        category: "Desktop Application",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
        tech: ["Python", "Tkinter", "SQLite", "Matplotlib"],
        description: `
            <p class="mb-4">KeLuang adalah aplikasi desktop yang saya kembangkan untuk membantu keluarga mencatat pemasukan dan pengeluaran sehari-hari secara digital. Proyek ini bertujuan menggantikan pencatatan manual buku tulis agar data lebih aman dan mudah dianalisis.</p>
            <p class="mb-4"><strong>Fitur Utama:</strong></p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>CRUD Transaksi (Pemasukan & Pengeluaran).</li>
                <li>Visualisasi Grafik Keuangan Bulanan.</li>
                <li>Export Laporan ke format Excel/PDF.</li>
                <li>Manajemen Kategori Anggaran.</li>
            </ul>
            <p class="mb-4"><strong>Tantangan & Solusi:</strong></p>
            <p class="mb-4">Tantangan terbesar dalam proyek ini adalah mendesain UI menggunakan library <em>Tkinter</em> agar tetap terlihat modern. Saya mengatasi ini dengan menggunakan custom styling dan color scheme yang konsisten.</p>
            <p class="mb-4">Untuk performa database, saya mengoptimalkan query SQLite dengan indexing pada kolom yang sering diakses dan menggunakan prepared statements untuk mencegah SQL injection.</p>
            <p><strong>Hasil:</strong> Aplikasi berhasil digunakan oleh 50+ keluarga dengan feedback positif mengenai kemudahan penggunaan dan visualisasi data yang informatif.</p>
        `
    },
    
    "greenfoot": {
        title: "Space Shooter: OOP Game Project",
        category: "Game Development",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&q=80",
        tech: ["Java", "Greenfoot IDE", "Object Oriented Programming"],
        description: `
            <p class="mb-4">Sebuah game 2D interaktif bertema luar angkasa yang dibangun menggunakan bahasa Java di lingkungan Greenfoot. Pemain mengontrol pesawat tempur untuk menghindari asteroid dan menghancurkan musuh demi mendapatkan skor tertinggi.</p>
            <p class="mb-4"><strong>Penerapan Konsep OOP:</strong></p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li><strong>Inheritance:</strong> Kelas Musuh dan Pemain mewarisi kelas Actor utama.</li>
                <li><strong>Polymorphism:</strong> Berbagai jenis musuh dengan behavior berbeda menggunakan method overriding.</li>
                <li><strong>Encapsulation:</strong> Data health, speed, dan score dilindungi dengan access modifier private.</li>
                <li><strong>Abstraction:</strong> Interface untuk collision detection yang dapat digunakan berbagai objek.</li>
            </ul>
            <p class="mb-4"><strong>Fitur Teknis:</strong></p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Background music looping dengan kontrol volume.</li>
                <li>Collision detection menggunakan algoritma bounding box.</li>
                <li>Particle effects untuk ledakan dan power-ups.</li>
                <li>High score system dengan file persistence.</li>
            </ul>
            <p><strong>Pembelajaran:</strong> Project ini memperdalam pemahaman saya tentang game loop, event handling, dan optimasi performa untuk mencegah lag saat banyak objek di layar.</p>
        `
    },

    "ecommerce": {
        title: "E-Commerce Dashboard",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        tech: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
        description: `
            <p class="mb-4">Dashboard admin komprehensif untuk platform e-commerce yang memungkinkan pemilik toko memantau penjualan, mengelola inventaris, dan menganalisis perilaku pelanggan secara real-time.</p>
            <p class="mb-4"><strong>Fitur Utama:</strong></p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li><strong>Real-time Analytics:</strong> Grafik penjualan harian, mingguan, dan bulanan dengan Chart.js.</li>
                <li><strong>Inventory Management:</strong> CRUD produk dengan upload gambar dan kategori otomatis.</li>
                <li><strong>Customer Insights:</strong> Segmentasi pelanggan berdasarkan RFM (Recency, Frequency, Monetary).</li>
                <li><strong>Order Tracking:</strong> Status pesanan real-time dengan notifikasi push.</li>
                <li><strong>Sales Forecasting:</strong> Prediksi penjualan menggunakan moving average algorithm.</li>
            </ul>
            <p class="mb-4"><strong>Arsitektur Teknis:</strong></p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Frontend: React dengan Redux untuk state management.</li>
                <li>Backend: RESTful API menggunakan Node.js dan Express.</li>
                <li>Database: MongoDB dengan Mongoose ODM untuk schema validation.</li>
                <li>Authentication: JWT tokens dengan refresh token mechanism.</li>
            </ul>
            <p class="mb-4"><strong>Optimasi Performa:</strong></p>
            <p class="mb-4">Implementasi lazy loading untuk komponen berat, caching dengan Redis untuk query yang sering diakses, dan pagination untuk data besar. Hasilnya, loading time berkurang 60% dibanding versi awal.</p>
            <p><strong>Impact:</strong> Dashboard ini meningkatkan efisiensi operasional klien sebesar 40% dan mengurangi waktu pembuatan laporan dari 2 jam menjadi 5 menit.</p>
        `
    },

    "banking": {
        title: "Mobile Banking App Redesign",
        category: "Mobile Design",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
        tech: ["Figma", "Prototyping", "UX Research", "User Testing"],
        description: `
            <p class="mb-4">Redesign komprehensif antarmuka aplikasi mobile banking dengan fokus khusus pada aksesibilitas untuk pengguna lansia dan peningkatan user experience secara keseluruhan.</p>
            <p class="mb-4"><strong>Proses UX Research:</strong></p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li><strong>User Interviews:</strong> Wawancara mendalam dengan 30 pengguna dari berbagai demografi.</li>
                <li><strong>Usability Testing:</strong> Testing aplikasi existing untuk mengidentifikasi pain points.</li>
                <li><strong>Competitor Analysis:</strong> Analisis 5 aplikasi banking kompetitor untuk benchmark.</li>
                <li><strong>Persona Development:</strong> Membuat 3 user persona berdasarkan data riset.</li>
            </ul>
            <p class="mb-4"><strong>Solusi Desain:</strong></p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li><strong>Typography:</strong> Font size minimum 16px dengan line height 1.5 untuk readability.</li>
                <li><strong>Color Contrast:</strong> Semua kombinasi warna memenuhi WCAG AAA standard (contrast ratio 7:1).</li>
                <li><strong>Touch Targets:</strong> Minimum 48x48px untuk semua button sesuai guideline accessibility.</li>
                <li><strong>Navigation:</strong> Simplified menu dengan maksimal 5 item utama di bottom navigation.</li>
                <li><strong>Feedback:</strong> Clear visual feedback untuk setiap interaksi dengan haptic response.</li>
            </ul>
            <p class="mb-4"><strong>Fitur Inovatif:</strong></p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Voice command untuk transfer dan pembayaran tagihan.</li>
                <li>Biometric authentication dengan fallback PIN yang mudah diingat.</li>
                <li>Tutorial interaktif dengan skip option untuk first-time users.</li>
                <li>Dark mode dengan automatic switching berdasarkan waktu.</li>
            </ul>
            <p class="mb-4"><strong>Hasil Testing:</strong></p>
            <p>Setelah redesign, task completion rate meningkat dari 68% menjadi 94%, dan user satisfaction score (SUS) naik dari 62 menjadi 87. Waktu rata-rata untuk menyelesaikan transfer turun dari 45 detik menjadi 18 detik.</p>
        `
    },

    
// ... (lanjutan dari database projectDatabase yang sudah ada)

    "restaurant": {
        title: "Savor Restaurant Website",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
        tech: ["React", "Tailwind CSS", "Firebase", "QR Code API"],
        description: `
            <p class="mb-4">Website modern untuk restoran fine dining dengan sistem reservasi online terintegrasi dan menu digital berbasis QR Code untuk pengalaman contactless dining.</p>
            <p class="mb-4"><strong>Fitur Utama:</strong></p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li><strong>Online Reservation:</strong> Sistem booking meja real-time dengan konfirmasi otomatis via email/SMS.</li>
                <li><strong>Digital Menu:</strong> Menu interaktif dengan foto high-quality, deskripsi detail, dan informasi alergen.</li>
                <li><strong>QR Code Integration:</strong> Setiap meja memiliki QR code unik untuk akses menu dan pemesanan langsung.</li>
                <li><strong>Gallery:</strong> Showcase foto makanan dan suasana restoran dengan lazy loading.</li>
                <li><strong>Reviews:</strong> Integrasi dengan Google Reviews dan testimonial pelanggan.</li>
            </ul>
            <p class="mb-4"><strong>Desain Visual:</strong></p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Color palette elegan dengan dominasi hitam, emas, dan putih untuk kesan premium.</li>
                <li>Typography menggunakan serif font untuk header dan sans-serif untuk body text.</li>
                <li>Animasi smooth scroll dan parallax effect untuk pengalaman browsing yang immersive.</li>
                <li>Responsive design yang optimal di semua device dari mobile hingga desktop.</li>
            </ul>
            <p class="mb-4"><strong>Teknologi Backend:</strong></p>
            <p class="mb-4">Firebase Firestore untuk database real-time, Cloud Functions untuk logic reservasi dan notifikasi, serta Firebase Storage untuk hosting gambar menu dengan CDN.</p>
            <p><strong>Impact:</strong> Setelah launching website, reservasi online meningkat 150% dan rating Google Reviews naik dari 4.2 menjadi 4.8 bintang.</p>
        `
    },

    "fittrack": {
        title: "FitTrack Pro: AI Fitness App",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&q=80",
        tech: ["React Native", "TensorFlow", "AWS", "Node.js", "PostgreSQL"],
        description: `
            <p class="mb-4">Aplikasi mobile pelacak kebugaran yang menggunakan Machine Learning untuk memberikan rekomendasi nutrisi dan program latihan yang dipersonalisasi berdasarkan data pengguna.</p>
            <p class="mb-4"><strong>Fitur AI & Machine Learning:</strong></p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li><strong>Meal Recognition:</strong> Scan foto makanan menggunakan TensorFlow untuk estimasi kalori otomatis.</li>
                <li><strong>Exercise Form Analysis:</strong> Computer vision untuk menganalisis postur latihan dan memberikan feedback real-time.</li>
                <li><strong>Personalized Recommendations:</strong> Algoritma collaborative filtering untuk saran workout berdasarkan progress.</li>
                <li><strong>Predictive Analytics:</strong> Prediksi pencapaian goal berdasarkan pola aktivitas historis.</li>
            </ul>
            <p class="mb-4"><strong>Fitur Utama:</strong></p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li><strong>Workout Tracker:</strong> Library 500+ exercise dengan video tutorial dan timer built-in.</li>
                <li><strong>Nutrition Planner:</strong> Meal planning dengan database 10,000+ makanan dan resep sehat.</li>
                <li><strong>Progress Tracking:</strong> Visualisasi grafik berat badan, body fat %, dan muscle mass.</li>
                <li><strong>Social Features:</strong> Challenge teman, leaderboard, dan sharing achievement.</li>
                <li><strong>Wearable Integration:</strong> Sync dengan Apple Watch, Fitbit, dan Garmin.</li>
            </ul>
            <p class="mb-4"><strong>Arsitektur Teknis:</strong></p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Frontend: React Native dengan Redux Toolkit untuk state management.</li>
                <li>Backend: Node.js microservices di AWS ECS dengan load balancing.</li>
                <li>Database: PostgreSQL untuk relational data, Redis untuk caching session.</li>
                <li>ML Pipeline: TensorFlow Lite untuk on-device inference, model training di AWS SageMaker.</li>
                <li>Storage: AWS S3 untuk media files dengan CloudFront CDN.</li>
            </ul>
            <p class="mb-4"><strong>Performa & Optimasi:</strong></p>
            <p class="mb-4">Implementasi code splitting dan lazy loading untuk mengurangi initial bundle size. Offline-first architecture dengan local SQLite database untuk akses tanpa internet. Push notification menggunakan Firebase Cloud Messaging dengan smart scheduling.</p>
            <p><strong>Hasil:</strong> App mencapai 50,000+ downloads dalam 3 bulan pertama dengan rating 4.7/5 di App Store dan Google Play. User retention rate 68% setelah 30 hari.</p>
        `
    }
};

// 2. LOGIKA RENDER HALAMAN
function renderProjectDetail() {
    // Ambil parameter ?id=... dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const data = projectDatabase[projectId];

    const mainContainer = document.querySelector('main');

    if (data) {
        // A. Inject Konten Teks & Gambar
        document.getElementById('p-title').textContent = data.title;
        document.getElementById('p-category').textContent = data.category;
        document.getElementById('p-image').src = data.image;
        document.getElementById('p-image').alt = data.title;
        document.getElementById('p-desc').innerHTML = data.description;
        
        // Update Title Browser
        document.title = `${data.title} | Portfolio Amanda`;

        // B. Inject Tech Stack (Looping)
        const techContainer = document.getElementById('p-tech');
        techContainer.innerHTML = ''; // Bersihkan container dulu

        data.tech.forEach(tech => {
            const span = document.createElement('span');
            // Styling Badge Tailwind
            span.className = "px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors cursor-default";
            span.textContent = tech;
            techContainer.appendChild(span);
        });

        // C. Setup Repository Link (opsional, bisa disesuaikan per project)
        const repoLink = document.getElementById('p-repo');
        // Contoh: setiap project punya link GitHub sendiri
        const repoUrls = {
            "keluang": "https://github.com/amandawijaya/keluang-finance",
            "greenfoot": "https://github.com/amandawijaya/space-shooter-game",
            "ecommerce": "https://github.com/amandawijaya/ecommerce-dashboard",
            "banking": "https://www.figma.com/file/banking-app-redesign",
            "restaurant": "https://github.com/amandawijaya/savor-restaurant",
            "fittrack": "https://github.com/amandawijaya/fittrack-pro"
        };
        
        if (repoUrls[projectId]) {
            repoLink.href = repoUrls[projectId];
        } else {
            repoLink.href = "#";
            repoLink.classList.add('opacity-50', 'cursor-not-allowed');
            repoLink.querySelector('span').textContent = 'Repository Private';
        }

    } else {
        // D. Tampilan 404 (Jika ID salah atau tidak ada)
        mainContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <div class="text-9xl mb-4">😕</div>
                <h2 class="text-3xl font-bold text-gray-800 mb-2">Project Tidak Ditemukan</h2>
                <p class="text-gray-500 mb-8">Maaf, project yang Anda cari tidak ada di database.</p>
                <a href="index.html#projects" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-xl hover:-translate-y-1 transition-all shadow-lg">
                    Kembali ke Homepage
                </a>
            </div>
        `;
    }
}

// 3. Jalankan fungsi saat DOM siap

// 3. Jalankan fungsi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    renderProjectDetail();
    
    // A. Smooth scroll untuk link "Kembali ke Projects"
    const backButton = document.querySelector('a[href*="#projects"]');
    if (backButton) {
        backButton.addEventListener('click', (e) => {
            // Jika link menuju index.html#projects, biarkan browser handle
            // Tapi kalau di halaman yang sama, smooth scroll
            if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
                e.preventDefault();
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
    
    // B. Loading animation untuk gambar
    const projectImage = document.getElementById('p-image');
    if (projectImage) {
        projectImage.addEventListener('load', () => {
            projectImage.classList.add('animate-fade-in');
        });
        
        // Fallback jika gambar gagal load
        projectImage.addEventListener('error', () => {
            projectImage.src = 'https://via.placeholder.com/1200x600/e2e8f0/64748b?text=Image+Not+Available';
            projectImage.alt = 'Image not available';
        });
    }
    
    // C. Animasi scroll reveal untuk konten
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elemen yang ingin di-animate
    const animatedElements = document.querySelectorAll('.bg-white, .bg-gradient-to-br');
    animatedElements.forEach(el => observer.observe(el));
    
    // D. Copy link button (opsional - untuk share project)
    addCopyLinkFeature();
});

// 4. Fungsi tambahan: Copy link untuk share
function addCopyLinkFeature() {
    // Buat button "Share Project" di bawah repository card
    const repoCard = document.querySelector('.bg-gradient-to-br.from-blue-50');
    if (repoCard) {
        const shareButton = document.createElement('button');
        shareButton.className = 'mt-4 w-full py-3 bg-white text-blue-600 rounded-xl font-semibold border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 flex items-center justify-center gap-2';
        shareButton.innerHTML = `
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
            </svg>
            <span>Bagikan Project Ini</span>
        `;
        
        shareButton.addEventListener('click', async () => {
            const currentUrl = window.location.href;
            
            // Coba gunakan Web Share API (untuk mobile)
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: document.getElementById('p-title').textContent,
                        text: 'Lihat project keren ini!',
                        url: currentUrl
                    });
                } catch (err) {
                    console.log('Share cancelled');
                }
            } else {
                // Fallback: Copy to clipboard
                try {
                    await navigator.clipboard.writeText(currentUrl);
                    
                    // Ubah text button sementara
                    const originalHTML = shareButton.innerHTML;
                    shareButton.innerHTML = `
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Link Tersalin!</span>
                    `;
                    shareButton.classList.add('bg-green-50', 'text-green-600', 'border-green-400');
                    
                    // Kembalikan ke semula setelah 2 detik
                    setTimeout(() => {
                        shareButton.innerHTML = originalHTML;
                        shareButton.classList.remove('bg-green-50', 'text-green-600', 'border-green-400');
                    }, 2000);
                } catch (err) {
                    alert('Gagal menyalin link. Silakan copy manual dari address bar.');
                }
            }
        });
        
        repoCard.appendChild(shareButton);
    }
}

// 5. Tambahan: Print project detail (opsional)
function addPrintFeature() {
    const backButtonContainer = document.querySelector('.text-center.mt-16');
    if (backButtonContainer) {
        const printButton = document.createElement('button');
        printButton.className = 'ml-4 inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg';
        printButton.innerHTML = `
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
            </svg>
            Print Project
        `;
        
        printButton.addEventListener('click', () => {
            window.print();
        });
        
        backButtonContainer.appendChild(printButton);
    }
}

// Panggil fungsi print jika diperlukan
document.addEventListener('DOMContentLoaded', () => {
    // ... kode sebelumnya
    addPrintFeature(); // Uncomment jika mau fitur print
});