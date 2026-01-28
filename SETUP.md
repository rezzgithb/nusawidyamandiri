# ⚙️ Setup Guide - Nusa Widya Mandiri Website

Panduan lengkap untuk memulai website sekolah Nusa Widya Mandiri.

## 📋 Prasyarat

- Browser modern (Chrome, Firefox, Edge, Safari)
- Text editor (VS Code recommended)
- Server untuk hosting (free.jualhosting.com)
- (Optional) Supabase account untuk database

## 🚀 Quick Start

### 1. Download dan Extract
```bash
# Extract file websmknwm.zip ke folder project
cd websmknwm
```

### 2. Buka di Browser
- Local Testing: Buka `index.html` dengan browser
- Atau gunakan Live Server (VS Code Extension)

### 3. Test Akun Demo

**Admin Account:**
- Email: `mhmmdrezabhtiar@gmail.com`
- Password: `Reza505`
- Role: Admin (akses penuh ke dashboard)

**User Account:**
- Buat akun baru melalui halaman Signup
- Login dengan akun yang dibuat
- Akses portal siswa dengan fitur terbatas

## 📁 File Structure

```
websmknwm/
├── index.html                    # Home page
├── css/
│   └── style.css                # Main stylesheet (palet biru-putih)
├── js/
│   └── main.js                  # Core JavaScript
├── pages/
│   ├── login.html               # Login page
│   ├── signup.html              # Registration page
│   ├── about.html               # About school (history, vision, mission)
│   ├── news.html                # News & articles
│   ├── gallery.html             # Photo gallery
│   ├── contact.html             # Contact form & info
│   ├── admin-dashboard.html     # Admin panel
│   └── user-dashboard.html      # Student portal
├── assets/
│   ├── images/                  # Image placeholder folder
│   └── icons/                   # Icon folder
├── README.md                    # Project documentation
├── DEPLOYMENT.md               # Deployment guide
└── SETUP.md                    # This file
```

## 🎨 Design Features

### Color Palette
- **Primary Blue**: #1e40af
- **Light Blue**: #3b82f6
- **Sky Blue**: #0ea5e9
- **White**: #ffffff
- **Gray tones**: Various shades for hierarchy

### Animations
- Smooth fade-in on page load
- Slide animations on scroll
- Hover effects on buttons and cards
- Floating animations on hero images
- Pulse animations on loading states

### Responsive Breakpoints
- Mobile: 320px - 480px
- Tablet: 481px - 768px
- Desktop: 769px+

## 👥 User Roles

### Admin
- Edit semua konten halaman
- Manage berita dan gallery
- Manage guru profile
- Lihat pesan dari pengunjung
- Manage user accounts
- Atur pengaturan sistem

### User (Student)
- View profil pribadi
- Lihat nilai dan jadwal
- Check kehadiran
- Baca pengumuman
- Lihat daftar tugas
- Tidak bisa edit konten

### Guest (Public)
- Browse halaman publik
- Lihat berita dan gallery
- Akses informasi kontak
- Submit form contact

## 🔐 Authentication System

### Current Implementation (Development)
Data disimpan di `localStorage` browser:
- `users` - Registered users
- `userRole` - Current user role
- `userEmail` - Logged-in user email
- `userName` - Logged-in user name

### For Production
Migrate ke:
- Supabase Authentication
- Google OAuth
- Password hashing (bcrypt)
- JWT tokens

## 📝 Form Data Storage

### Contact Messages
Form data disimpan di `contactMessages` localStorage:
```javascript
{
  name: "John Doe",
  email: "john@example.com",
  phone: "+62 812...",
  subject: "Inquiry",
  message: "Message content",
  date: "2024-01-28T10:30:00Z",
  status: "pending"
}
```

Admin bisa lihat dan manage di dashboard.

## 🌐 Pages Overview

### index.html (Beranda)
- Hero section dengan CTA buttons
- Image slideshow (auto-rotate setiap 5 detik)
- About school dengan 4 highlight cards
- School statistics dengan counter animation
- Latest news preview dengan 3 articles
- Responsive design

### pages/about.html (Tentang Kami)
- **Tabs:**
  - Sejarah: Timeline dari 2009-2024
  - Visi & Misi: School goals dan values
  - Struktur Yayasan: Organization chart
  - Struktur Sekolah: Department structure
  - Profil Guru: 6+ teacher profiles
- Animated transitions between tabs

### pages/news.html (Berita)
- Category filter (All, Internal, Extracurricular, Articles)
- Card grid layout
- Modal view untuk baca full article
- Pagination (6 per page)
- Search-like filtering
- Author dan date information

### pages/gallery.html (Gallery)
- Category filter
- Masonry grid layout
- Lightbox viewer
- Navigation buttons (next/prev)
- Photo titles dan dates

### pages/contact.html (Hubungi Kami)
- Contact form dengan validation
- Contact information cards
- Embedded Google Map
- Operating hours
- Social media buttons
- Message storage di localStorage

### pages/login.html (Masuk)
- Email & password input
- Admin credentials display
- Google login button (ready for integration)
- Link ke signup dan lupa password
- Form validation
- Error handling

### pages/signup.html (Daftar)
- Full name, email, password input
- Password strength meter
- Confirm password validation
- Terms & conditions checkbox
- Google signup button (ready)
- Success redirect to login
- Data saved to localStorage

### pages/admin-dashboard.html (Admin Panel)
- **Dashboard:** Statistics overview
- **Edit About:** Manage visi-misi
- **Manage News:** Add/edit/delete articles
- **Manage Gallery:** Upload photos
- **Manage Teachers:** Teacher profiles CRUD
- **Messages:** View contact form submissions
- **Manage Users:** Delete user accounts
- **Settings:** School contact information

### pages/user-dashboard.html (Student Portal)
- **Profile:** Personal information
- **Grades:** Academic performance table
- **Schedule:** Class timetable
- **Attendance:** Presence data
- **Announcements:** School announcements
- **Assignments:** Task list

## 🔧 Customization

### Mengubah Warna
Edit `css/style.css` section `:root`:
```css
:root {
  --primary-blue: #1e40af;      /* Change this */
  --light-blue: #3b82f6;        /* Change this */
  --sky-blue: #0ea5e9;          /* Change this */
  /* ... other colors ... */
}
```

### Menambah Menu
Edit navbar di `index.html`:
```html
<ul class="navbar-menu" id="navMenu">
  <li><a href="#new-page">New Menu Item</a></li>
</ul>
```

### Menambah Animasi
Buat animation baru di `css/style.css`:
```css
@keyframes customAnimation {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Mengubah Content
Edit file HTML masing-masing halaman atau gunakan admin dashboard untuk:
- News content
- About information
- Contact details

## 🧪 Testing Checklist

### Functionality
- [ ] Homepage slideshow works
- [ ] Navigation links work
- [ ] Forms submit and validate
- [ ] Login/signup works
- [ ] Admin dashboard accessible
- [ ] CRUD operations in admin work
- [ ] Responsive on mobile

### Browser Compatibility
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Performance
- [ ] Page load time < 3s
- [ ] Smooth animations
- [ ] No console errors
- [ ] Images optimized

### Security
- [ ] No sensitive data in console
- [ ] Form validation present
- [ ] Password fields masked
- [ ] HTTPS ready

## 📱 Mobile Optimization

Semua halaman sudah dioptimasi untuk mobile:
- Hamburger menu di mobile
- Touch-friendly buttons
- Readable font sizes
- Proper spacing
- Image responsive

## 🚀 Before Deployment

1. **Replace Placeholder:**
   - Ganti images di `assets/images/`
   - Update contact information
   - Update social media links

2. **Test Everything:**
   - Test semua forms
   - Verify semua links
   - Check cross-browser compatibility

3. **Prepare Database:**
   - Setup Supabase (atau database lain)
   - Create tables
   - Migrate data dari localStorage

4. **Setup Domain:**
   - Register domain (if not using subdomain)
   - Configure DNS
   - Setup SSL certificate

5. **SEO Optimization:**
   - Add meta descriptions
   - Setup sitemap.xml
   - Setup robots.txt
   - Add Google Analytics

## 📞 Support & Help

Jika ada masalah:

1. **Check Console:** DevTools > Console untuk errors
2. **Check Network:** DevTools > Network untuk request issues
3. **LocalStorage:** DevTools > Application > LocalStorage untuk data
4. **Cache:** Clear browser cache jika ada masalah loading

## 📚 Documentation Files

- `README.md` - Project overview
- `DEPLOYMENT.md` - Deployment instructions
- `SETUP.md` - This setup guide

## 🎯 Next Steps

1. ✅ Customize website dengan data sekolah Anda
2. ✅ Upload images placeholder dengan foto asli
3. ✅ Test semua fitur di berbagai browser
4. ✅ Setup Supabase untuk production database
5. ✅ Deploy ke free.jualhosting.com
6. ✅ Setup monitoring dan backups
7. ✅ Announce ke siswa dan orang tua

## 💡 Tips

- Keep backups of database regularly
- Monitor website analytics
- Update security patches
- Optimize images before upload
- Test new features in staging first
- Document any customizations

---

**Questions?** Email: info@nusawidya.sch.id

**Happy Coding! 🎓**
