# 📖 Panduan Deployment dan Integrasi

Dokumen ini menjelaskan cara deploy website ke free.jualhosting.com dan integrasi dengan Supabase.

## 🚀 Deployment ke free.jualhosting.com

### Langkah 1: Persiapkan File Project
1. Kompres semua file di folder `websmknwm/` menjadi satu file ZIP
2. Pastikan struktur folder tetap sama

### Langkah 2: Upload ke Hosting
1. Login ke akun free.jualhosting.com
2. Buka File Manager atau FTP
3. Buat folder baru bernama `nusawidya` atau sesuai domain
4. Upload semua file dari folder `websmknwm/` ke folder tersebut
5. Pastikan `index.html` berada di root folder

### Langkah 3: Konfigurasi Domain
1. Arahkan domain ke folder website Anda
2. Setup DNS jika menggunakan domain eksternal
3. Tunggu propagasi DNS (24-48 jam)

### Langkah 4: Testing
- Akses website melalui browser
- Test semua fitur utama
- Verifikasi link dan fungsi

---

## 🔐 Integrasi dengan Supabase

### Langkah 1: Buat Akun Supabase
1. Kunjungi https://supabase.com
2. Daftar dengan akun Google atau email
3. Buat project baru
4. Tunggu project selesai diinisialisasi

### Langkah 2: Dapatkan API Keys
1. Di dashboard Supabase, buka **Settings > API**
2. Copy `Project URL`
3. Copy `anon public` key
4. Simpan di tempat aman

### Langkah 3: Buat Database Schema

Buat tabel-tabel berikut di Supabase:

#### Tabel: users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Tabel: news
```sql
CREATE TABLE news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  excerpt VARCHAR(500),
  category VARCHAR(100),
  author_id UUID REFERENCES users(id),
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  published BOOLEAN DEFAULT true
);
```

#### Tabel: teachers
```sql
CREATE TABLE teachers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(255) NOT NULL,
  subject VARCHAR(100) NOT NULL,
  experience_years INTEGER,
  bio TEXT,
  image_url VARCHAR(500),
  email VARCHAR(255),
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Tabel: gallery
```sql
CREATE TABLE gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  image_url VARCHAR(500) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Tabel: messages
```sql
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Tabel: settings
```sql
CREATE TABLE settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key VARCHAR(100) UNIQUE NOT NULL,
  value TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Langkah 4: Setup Row Level Security (RLS)

Enable RLS untuk setiap tabel:
```sql
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
```

### Langkah 5: Integrasikan ke Website

Buat file `js/supabase-config.js`:

```javascript
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'

const SUPABASE_URL = 'YOUR_PROJECT_URL'
const SUPABASE_KEY = 'YOUR_ANON_KEY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
```

Update file `js/auth.js` untuk menggunakan Supabase:

```javascript
// Login function
async function loginWithEmail(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    
    if (error) throw error
    
    localStorage.setItem('userRole', 'user')
    localStorage.setItem('userEmail', email)
    localStorage.setItem('userName', data.user.user_metadata.full_name)
    
    return true
  } catch (error) {
    console.error('Login error:', error.message)
    return false
  }
}

// Sign up function
async function signupWithEmail(email, fullName, password) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName
        }
      }
    })
    
    if (error) throw error
    
    return true
  } catch (error) {
    console.error('Signup error:', error.message)
    return false
  }
}

// Logout function
async function logout() {
  await supabase.auth.signOut()
  localStorage.removeItem('userRole')
  localStorage.removeItem('userEmail')
  localStorage.removeItem('userName')
}
```

---

## 📧 Setup Email Notifications (Optional)

### Menggunakan EmailJS

1. Daftar di https://www.emailjs.com
2. Setup service email (Gmail, etc.)
3. Copy Service ID dan Template ID
4. Integrate ke form contact:

```javascript
emailjs.init('YOUR_PUBLIC_KEY')

function sendEmail(form) {
  emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form)
    .then(() => {
      showNotification('Email berhasil dikirim!', 'success')
    })
    .catch((error) => {
      showNotification('Error: ' + error.text, 'error')
    })
}
```

---

## 🔄 Setup CI/CD Pipeline (Optional)

### Menggunakan GitHub Actions

1. Push project ke GitHub
2. Buat folder `.github/workflows/`
3. Buat file `deploy.yml`:

```yaml
name: Deploy to Hosting

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@4.1.0
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./
```

---

## 🔒 Keamanan untuk Production

### HTTPS Setup
1. Aktifkan SSL certificate (free dari Let's Encrypt)
2. Force HTTPS di semua halaman

### Environment Variables
Gunakan `.env` file (jangan commit ke git):
```
SUPABASE_URL=your_url_here
SUPABASE_KEY=your_key_here
API_SECRET=your_secret_here
```

### Backend Validation
- Jangan hanya validasi di frontend
- Implement server-side validation
- Use HTTPS untuk semua API calls
- Implement rate limiting

### Database Security
- Enable Row Level Security (RLS)
- Buat policy untuk setiap tabel
- Jangan expose API keys di frontend (untuk public key OK)

---

## 📊 Monitoring & Maintenance

### Setup Monitoring
1. Google Analytics - Track user behavior
2. Sentry.io - Error tracking
3. Uptime Monitor - Status monitoring

### Regular Backups
- Backup database setiap hari
- Export data ke format CSV/JSON
- Test restore process

### Performance Optimization
- Compress images
- Minify CSS/JS
- Setup CDN
- Enable caching

---

## 🆘 Troubleshooting

### Domain tidak bisa diakses
- Check DNS settings
- Verify file permissions
- Check FTP upload status
- Wait 24-48 jam untuk propagasi

### Database connection error
- Verify API URL dan Keys
- Check network settings
- Verify CORS settings di Supabase
- Check firewall rules

### Login tidak berfungsi
- Clear browser cache/cookies
- Check localStorage di DevTools
- Verify password hashing
- Check CORS headers

### Email tidak terkirim
- Verify EmailJS setup
- Check email template
- Verify SMTP credentials
- Check spam folder

---

## 📞 Support

Untuk bantuan lebih lanjut:
- Email: info@nusawidya.sch.id
- Documentation: Baca README.md
- GitHub Issues: Report bugs di repository

---

**Terakhir updated:** Januari 2024
**Version:** 1.0
