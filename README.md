# AI Alışkanlık Koçu / AI Habit Coach

[🇹🇷 Türkçe](#türkçe) | [🇬🇧 English](#english)

---

## Türkçe

Yapay zeka destekli alışkanlık takip uygulaması. Günlük alışkanlıklarını takip et, haftalık ilerleme raporunu gör ve AI'dan kişiselleştirilmiş geri bildirim al.

### Özellikler

- ✅ Günlük alışkanlık takibi (Su İç, Egzersiz Yap, İngilizce Çalış, Kitap Oku)
- 📊 Son 7 günlük ilerleme grafiği
- 🤖 AI destekli kişiselleştirilmiş geri bildirim ve öneriler

### Teknolojiler

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Stil:** Tailwind CSS
- **Veritabanı:** SQLite + Prisma ORM
- **AI:** OpenRouter API

---

### 🔑 API Key Alma (ÖNEMLİ)

Bu uygulama AI geri bildirimi için OpenRouter API kullanıyor. **Kendi ücretsiz API key'ini alman gerekiyor:**

#### Adım 1: OpenRouter'a Kayıt Ol
1. https://openrouter.ai adresine git
2. Sağ üstten **"Sign In"** tıkla
3. Google veya GitHub ile giriş yap (ücretsiz)

#### Adım 2: API Key Oluştur
1. Giriş yaptıktan sonra https://openrouter.ai/keys adresine git
2. **"Create Key"** butonuna tıkla
3. Key'e bir isim ver (örn: "habit-coach")
4. Oluşturulan key'i kopyala (`sk-or-v1-...` ile başlar)

#### Adım 3: Key'i Projeye Ekle
1. Proje klasöründe `.env.local` adında bir dosya oluştur
2. İçine şunları yaz:

```env
DATABASE_URL="file:./dev.db"
OPENROUTER_API_KEY=sk-or-v1-buraya-kendi-keyini-yapistir
MODEL_ID=google/gemma-3-27b-it:free
```

> ⚠️ **ÖNEMLİ:** API key'ini kimseyle paylaşma ve GitHub'a yükleme!

---

### Kurulum

```bash
# 1. Repoyu klonla
git clone https://github.com/emirdege/AI-al-kanl-k-ko-u.git
cd AI-al-kanl-k-ko-u

# 2. Bağımlılıkları yükle
npm install

# 3. .env.local dosyasını oluştur (yukarıdaki adımları takip et)

# 4. Veritabanını kur
npx prisma migrate dev --name init
npm run db:seed

# 5. Uygulamayı başlat
npm run dev
```

Tarayıcıda http://localhost:3000 adresini aç.

---

### Kullanılabilir AI Modelleri

`.env.local` dosyasındaki `MODEL_ID` değerini değiştirerek farklı modeller kullanabilirsin:

| Model | ID | Not |
|-------|-----|-----|
| Gemma 3 27B (Ücretsiz) | `google/gemma-3-27b-it:free` | Geliştirme için ideal |
| Claude Sonnet 4.5 | `anthropic/claude-sonnet-4.5` | Premium, en iyi kalite |
| Claude 3.5 Sonnet | `anthropic/claude-3.5-sonnet` | Premium alternatif |

Tüm modeller: https://openrouter.ai/models

---

### Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusunu başlat |
| `npm run build` | Prodüksiyon için derle |
| `npm run db:seed` | Demo verileri yükle |
| `npm run db:studio` | Prisma Studio'yu aç |

---

## English

AI-powered habit tracking application. Track your daily habits, view weekly progress, and get personalized AI feedback.

### Features

- ✅ Daily habit tracking (Drink Water, Exercise, Study English, Read Book)
- 📊 7-day progress visualization
- 🤖 AI-powered personalized feedback and suggestions

### Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS
- **Database:** SQLite + Prisma ORM
- **AI:** OpenRouter API

---

### 🔑 Getting Your API Key (IMPORTANT)

This app uses OpenRouter API for AI feedback. **You need to get your own free API key:**

#### Step 1: Sign Up for OpenRouter
1. Go to https://openrouter.ai
2. Click **"Sign In"** in the top right
3. Sign in with Google or GitHub (free)

#### Step 2: Create an API Key
1. After signing in, go to https://openrouter.ai/keys
2. Click **"Create Key"**
3. Give your key a name (e.g., "habit-coach")
4. Copy the generated key (starts with `sk-or-v1-...`)

#### Step 3: Add Key to Project
1. Create a file named `.env.local` in the project root
2. Add the following content:

```env
DATABASE_URL="file:./dev.db"
OPENROUTER_API_KEY=sk-or-v1-paste-your-key-here
MODEL_ID=google/gemma-3-27b-it:free
```

> ⚠️ **IMPORTANT:** Never share your API key or commit it to GitHub!

---

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/emirdege/AI-al-kanl-k-ko-u.git
cd AI-al-kanl-k-ko-u

# 2. Install dependencies
npm install

# 3. Create .env.local file (follow the steps above)

# 4. Set up the database
npx prisma migrate dev --name init
npm run db:seed

# 5. Start the application
npm run dev
```

Open http://localhost:3000 in your browser.

---

### Available AI Models

Change `MODEL_ID` in `.env.local` to use different models:

| Model | ID | Notes |
|-------|-----|-------|
| Gemma 3 27B (Free) | `google/gemma-3-27b-it:free` | Good for development |
| Claude Sonnet 4.5 | `anthropic/claude-sonnet-4.5` | Premium, best quality |
| Claude 3.5 Sonnet | `anthropic/claude-3.5-sonnet` | Premium alternative |

All models: https://openrouter.ai/models

---

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run db:seed` | Load demo data |
| `npm run db:studio` | Open Prisma Studio |

---

## Project Structure / Proje Yapısı

```
├── app/
│   ├── api/
│   │   ├── feedback/route.ts    # AI feedback endpoint
│   │   └── habits/              # Habit API endpoints
│   ├── today/page.tsx           # Daily tracking page
│   ├── history/page.tsx         # History + AI feedback
│   └── layout.tsx               # App layout
├── components/                   # React components
├── lib/
│   ├── prisma.ts                # Database client
│   └── openrouter.ts            # AI API wrapper
├── prisma/
│   ├── schema.prisma            # Database schema
│   └── seed.ts                  # Demo data
├── .env.example                 # Example environment file
└── .env.local                   # Your API key (create this!)
```

---

## License / Lisans

MIT
