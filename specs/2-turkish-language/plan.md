# Implementation Plan: Turkish Language Support

**Feature**: Turkish Language Support
**Spec**: [spec.md](./spec.md)
**Created**: 2025-12-03

---

## 1. Technical Approach

### Strategy
Tüm UI metinlerini doğrudan Türkçe olarak güncelleyeceğiz. i18n framework kullanmadan basit hardcoded çeviriler yapılacak.

### Files to Modify

| File | Changes |
|------|---------|
| `app/page.tsx` | Ana sayfa metinleri Türkçe |
| `app/layout.tsx` | Sayfa başlığı ve meta Türkçe |
| `app/today/page.tsx` | Bugün sayfası metinleri + tarih formatı |
| `app/history/page.tsx` | Geçmiş sayfası metinleri |
| `components/Navigation.tsx` | Navigasyon linkleri Türkçe |
| `components/HabitCard.tsx` | Değişiklik yok (dinamik içerik) |
| `components/DayCard.tsx` | Tarih formatı + "(Bugün)" etiketi |
| `components/FeedbackSection.tsx` | AI bölümü metinleri Türkçe |
| `app/api/feedback/route.ts` | AI prompt Türkçe |
| `prisma/seed.ts` | Alışkanlık isimleri Türkçe |

---

## 2. Implementation Tasks

### Task 1: Update Layout & Metadata
**File**: `app/layout.tsx`
- Title: "AI Alışkanlık Koçu"
- Description: Türkçe açıklama

### Task 2: Update Home Page
**File**: `app/page.tsx`
- Başlık: "AI Alışkanlık Koçu"
- Alt başlık: "Günlük alışkanlıklarını takip et..."
- Butonlar: "Takibe Başla", "Geçmişi Gör"

### Task 3: Update Navigation
**File**: `components/Navigation.tsx`
- Logo: "Alışkanlık Koçu"
- Links: "Bugün", "Geçmiş"

### Task 4: Update Today Page
**File**: `app/today/page.tsx`
- Başlık: "Bugün"
- Tarih formatı: `tr-TR` locale
- Loading: "Alışkanlıklar yükleniyor..."
- Counter: "X/Y alışkanlık tamamlandı"

### Task 5: Update History Page
**File**: `app/history/page.tsx`
- Başlık: "Geçmiş"
- Alt başlık: "Son 7 günün"
- Loading: "Geçmiş yükleniyor..."

### Task 6: Update DayCard Component
**File**: `components/DayCard.tsx`
- Tarih formatı: `tr-TR` locale (kısa format)
- Today label: "(Bugün)"

### Task 7: Update FeedbackSection Component
**File**: `components/FeedbackSection.tsx`
- Başlık: "AI Geri Bildirimi"
- Açıklama: Türkçe
- Button: "AI Geri Bildirimi Al"
- Loading: "Alışkanlıklarınız analiz ediliyor..."
- Error: "Hata", "Tekrar dene"
- Refresh: "Yeni geri bildirim al"

### Task 8: Update AI Prompt
**File**: `app/api/feedback/route.ts`
- System prompt: Türkçe
- User prompt: Türkçe

### Task 9: Update Seed Data
**File**: `prisma/seed.ts`
- Alışkanlık isimleri Türkçe

### Task 10: Re-seed Database
- Mevcut veritabanını sıfırla
- Türkçe alışkanlıklarla yeniden seed et

---

## 3. Date Format Reference

### Turkish Locale Options

**Tam tarih (Bugün sayfası):**
```typescript
date.toLocaleDateString('tr-TR', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})
// Output: "3 Aralık 2025 Çarşamba"
```

**Kısa tarih (Geçmiş sayfası):**
```typescript
date.toLocaleDateString('tr-TR', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
})
// Output: "Çar, 3 Ara"
```

---

## 4. AI Prompt (Turkish)

**System:**
```
Sen yardımsever bir alışkanlık koçusun. Kısa ve uygulanabilir geri bildirimler ver. Yanıtlarını 150 kelimeyi geçme.
```

**User:**
```
İşte son 7 günlük alışkanlık tamamlama durumum:

- Su İç: X/7 gün
- Egzersiz Yap: X/7 gün
...

Lütfen bana:
1. Kısa bir motivasyon mesajı (2-3 cümle)
2. Gelişim için somut bir öneri

ver.
```

---

## 5. Testing Checklist

- [ ] Ana sayfa Türkçe görünüyor
- [ ] Navigasyon Türkçe
- [ ] Bugün sayfası tarih formatı doğru
- [ ] Geçmiş sayfası tarih formatı doğru
- [ ] AI geri bildirimi Türkçe geliyor
- [ ] Alışkanlık isimleri Türkçe
- [ ] Hata mesajları Türkçe
- [ ] Yükleme mesajları Türkçe

