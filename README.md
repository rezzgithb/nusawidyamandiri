# 🎓 Website Sekolah Nusa Widya Mandiri

Website sekolah yang modern, elegan, dan fully functional dengan dashboard admin untuk mengelola konten.

## 📋 Fitur Utama

### Halaman Publik
- **Beranda**: Slideshow, tentang sekolah, statistik, berita terbaru
- **Tentang Kami**: Sejarah, visi-misi, struktur organisasi, profil guru
- **Berita**: Berita internal, ekstrakurikuler, artikel (dengan filter dan pagination)
- **Gallery**: Koleksi foto dengan lightbox viewer
- **Hubungi Kami**: Form kontak, informasi lengkap, maps, social media

### Sistem Autentikasi
- ✅ Pendaftaran user dengan validasi email & password
- ✅ Login dengan email/password
- ✅ Login khusus admin dengan kredensial:
  - Email: `mhmmdrezabhtiar@gmail.com`
  - Password: `Reza505`
  - Nama: `admin`
- 📝 Google OAuth (siap diintegrasikan)

### Admin Dashboard
Sistem manajemen konten lengkap dengan fitur:
- 📊 Dashboard dengan statistik real-time
- 📝 Edit konten About (visi-misi)
- 📰 Kelola berita (tambah, edit, hapus)
- 🖼️ Kelola gallery (tambah, edit, hapus)
- 👨‍🏫 Kelola data guru
- 📧 Kelola pesan dari pengunjung
- 👥 Kelola user terdaftar
- ⚙️ Pengaturan sistem (informasi kontak, website)

### Desain & UX
- 🎨 Palet warna biru-putih profesional
- ✨ Animasi smooth & modern
- 📱 Fully responsive design
- 🚀 Performance optimized

## 🛠️ Teknologi

**Frontend:**
- HTML5
- CSS3 (dengan animasi custom)
- JavaScript (vanilla, tanpa framework)
- Font Awesome Icons

**Backend:**
- LocalStorage untuk data persistence (development)
- Siap untuk integrasi Supabase untuk production

**Deployment:**
- Siap untuk di-deploy ke free.jualhosting.com

## 📁 Struktur File

```
websmknwm/
├── index.html                 # Halaman beranda
├── css/
│   └── style.css             # Styling utama
├── js/
│   └── main.js               # JavaScript functionality
├── pages/
│   ├── login.html            # Halaman login
│   ├── signup.html           # Halaman registrasi
│   ├── about.html            # Tentang kami
│   ├── news.html             # Halaman berita
│   ├── gallery.html          # Halaman gallery
│   ├── contact.html          # Hubungi kami
│   ├── admin-dashboard.html  # Admin panel
│   └── user-dashboard.html   # User dashboard (siap dibuat)
├── assets/
│   ├── images/               # Folder untuk gambar
│   └── icons/                # Folder untuk icon
└── README.md                 # Dokumentasi
```

## 🚀 Cara Menggunakan

### 1. Buka Website
Buka `index.html` di browser Anda

### 2. Akses Sebagai User
- Klik tombol "Daftar" untuk membuat akun baru
- Isi form dengan email, nama lengkap, dan password
- Login dengan akun yang sudah dibuat

### 3. Akses Sebagai Admin
- Klik tombol "Masuk"
- Gunakan kredensial:
  - Email: `mhmmdrezabhtiar@gmail.com`
  - Password: `Reza505`
- Anda akan otomatis diarahkan ke admin dashboard

### 4. Kelola Konten
Di admin dashboard Anda bisa:
- Edit visi-misi sekolah
- Tambah/edit/hapus berita
- Kelola galeri foto
- Lihat pesan dari pengunjung
- Kelola data guru
- Manage semua user

## 💾 Data Storage

Data disimpan di browser menggunakan LocalStorage:
- `users` - Data user terdaftar
- `contactMessages` - Pesan dari form hubungi kami
- `schoolNews` - Data berita
- `schoolAbout` - Konten About
- `schoolSettings` - Pengaturan sekolah

**Catatan:** Untuk production, semua data harus dipindahkan ke Supabase

## 🔒 Keamanan (untuk Production)

Sebelum deploy ke production:
- ✅ Integrasikan dengan Supabase untuk database
- ✅ Setup Google OAuth
- ✅ Implementasi JWT untuk authentication
- ✅ Hash password dengan bcrypt
- ✅ Setup HTTPS
- ✅ Validasi di backend (bukan hanya frontend)

## 📱 Responsive

Website fully responsive untuk:
- 📱 Mobile (320px ke atas)
- 📱 Tablet (768px ke atas)
- 🖥️ Desktop (1024px ke atas)

## 🎯 TODO untuk Production

- [ ] Integrasikan Supabase
- [ ] Setup Google OAuth
- [ ] Upload gambar placeholder ke `/assets/images/`
- [ ] Setup email notifications
- [ ] Setup CDN untuk assets
- [ ] Optimasi SEO
- [ ] Setup Google Analytics
- [ ] Backup database regular

## 📞 Kontak & Support

**Email:** info@nusawidya.sch.id
**Phone:** +62 812-3456-7890
**Address:** Jl. Pendidikan No. 123, Kota Bandung

## 📄 Lisensi

© 2024 Sekolah Nusa Widya Mandiri. All rights reserved.

---

**Dibuat dengan ❤️ untuk Sekolah Nusa Widya Mandiri**
