# Feature Specification: Turkish Language Support

**Version**: 1.0
**Created**: 2025-12-03
**Status**: Draft

---

## 1. Overview

### 1.1 Problem Statement

Mevcut uygulama tamamen İngilizce. Türk kullanıcılar için arayüz, tarihler ve AI geri bildirimleri Türkçe olmalı.

### 1.2 Proposed Solution

Uygulamanın tüm kullanıcı arayüzünü Türkçe'ye çevirmek:
- Tüm metin içerikleri Türkçe
- Tarih formatları Türkçe (örn: "3 Aralık 2025, Çarşamba")
- AI geri bildirimleri Türkçe
- Alışkanlık isimleri Türkçe

### 1.3 Target Users

- Türkçe konuşan kullanıcılar
- Türkiye'deki kullanıcı tabanı

### 1.4 Success Criteria

| Criterion | Measure |
|-----------|---------|
| Tüm UI metinleri Türkçe | %100 çeviri oranı |
| Tarihler Türkçe formatında | Gün ve ay isimleri Türkçe görünür |
| AI Türkçe yanıt veriyor | Geri bildirimler akıcı Türkçe |
| Alışkanlık isimleri Türkçe | Varsayılan alışkanlıklar Türkçe |

---

## 2. User Scenarios & Testing

### 2.1 Primary User Flows

#### Scenario 1: Türkçe Arayüz Görüntüleme
**Kullanıcı olarak**
Uygulamayı açtığımda tüm metinleri Türkçe görmek istiyorum
**Böylece** uygulamayı rahatça kullanabilirim

**Acceptance Criteria:**
- [ ] Ana sayfa başlığı ve açıklaması Türkçe
- [ ] Navigasyon linkleri Türkçe ("Bugün", "Geçmiş")
- [ ] Butonlar Türkçe ("Takibe Başla", "Geçmişi Gör")
- [ ] Tamamlama sayacı Türkçe ("X/Y alışkanlık tamamlandı")

#### Scenario 2: Türkçe Tarih Formatı
**Kullanıcı olarak**
Tarihleri Türkçe formatında görmek istiyorum
**Böylece** hangi gün olduğunu kolayca anlayabilirim

**Acceptance Criteria:**
- [ ] Bugün sayfasında tarih Türkçe (örn: "3 Aralık 2025, Çarşamba")
- [ ] Geçmiş sayfasında günler Türkçe (örn: "Pzt, 2 Ara")
- [ ] "(Bugün)" etiketi Türkçe görünür

#### Scenario 3: Türkçe AI Geri Bildirimi
**Kullanıcı olarak**
AI'dan Türkçe geri bildirim almak istiyorum
**Böylece** önerileri anlayıp uygulayabilirim

**Acceptance Criteria:**
- [ ] "AI Geri Bildirimi Al" butonu Türkçe
- [ ] AI yanıtı tamamen Türkçe
- [ ] Motivasyon mesajı Türkçe
- [ ] Öneriler Türkçe ve anlaşılır

### 2.2 Edge Cases

| Case | Expected Behavior |
|------|-------------------|
| AI Türkçe yanıt veremezse | Hata mesajı Türkçe gösterilir |
| Yükleme durumu | "Yükleniyor..." Türkçe görünür |

---

## 3. Functional Requirements

### 3.1 UI Çevirileri

#### Ana Sayfa (/)
| İngilizce | Türkçe |
|-----------|--------|
| AI Habit Coach | AI Alışkanlık Koçu |
| Track your daily habits and get personalized AI feedback | Günlük alışkanlıklarını takip et ve kişiselleştirilmiş AI geri bildirimi al |
| Start Tracking | Takibe Başla |
| View History | Geçmişi Gör |

#### Navigasyon
| İngilizce | Türkçe |
|-----------|--------|
| Habit Coach | Alışkanlık Koçu |
| Today | Bugün |
| History | Geçmiş |

#### Bugün Sayfası (/today)
| İngilizce | Türkçe |
|-----------|--------|
| Today | Bugün |
| Loading habits... | Alışkanlıklar yükleniyor... |
| X/Y habits completed | X/Y alışkanlık tamamlandı |

#### Geçmiş Sayfası (/history)
| İngilizce | Türkçe |
|-----------|--------|
| History | Geçmiş |
| Your last 7 days | Son 7 günün |
| Loading history... | Geçmiş yükleniyor... |
| (Today) | (Bugün) |

#### AI Geri Bildirim Bölümü
| İngilizce | Türkçe |
|-----------|--------|
| AI Feedback | AI Geri Bildirimi |
| Get personalized feedback on your habit progress | Alışkanlık ilerlemeniz hakkında kişiselleştirilmiş geri bildirim alın |
| Get AI Feedback | AI Geri Bildirimi Al |
| Analyzing your habits... | Alışkanlıklarınız analiz ediliyor... |
| Error | Hata |
| Try again | Tekrar dene |
| Get new feedback | Yeni geri bildirim al |

### 3.2 Alışkanlık İsimleri (Seed Data)

| İngilizce | Türkçe |
|-----------|--------|
| Drink Water | Su İç |
| Exercise | Egzersiz Yap |
| Study English | İngilizce Çalış |
| Read Book | Kitap Oku |

### 3.3 Tarih Formatları

| Sayfa | Format | Örnek |
|-------|--------|-------|
| Bugün | Tam tarih | "3 Aralık 2025, Çarşamba" |
| Geçmiş | Kısa tarih | "Pzt, 2 Ara" |

### 3.4 AI Prompt Güncellemesi

AI'a gönderilen sistem mesajı Türkçe olmalı:
- "Sen yardımsever bir alışkanlık koçusun. Kısa ve uygulanabilir geri bildirimler ver. Yanıtlarını 150 kelimeyi geçme."
- Kullanıcı mesajı da Türkçe olmalı

---

## 4. Non-Functional Requirements

### 4.1 Tutarlılık
- Tüm metinler tutarlı Türkçe terminoloji kullanmalı
- Yazım kurallarına uyulmalı

### 4.2 Performans
- Çeviri ek gecikmeye yol açmamalı (statik metinler)

---

## 5. Out of Scope

- Çoklu dil desteği (sadece Türkçe)
- Dil seçimi ayarı
- Dinamik çeviri sistemi (i18n framework)

---

## 6. Assumptions

| Assumption | Rationale |
|------------|-----------|
| Sadece Türkçe yeterli | Kullanıcı talebi, MVP için tek dil |
| Hardcoded çeviriler kabul edilebilir | Basit MVP, i18n framework gereksiz |
| AI Türkçe anlıyor | OpenRouter modelleri Türkçe destekliyor |

---

## 7. Dependencies

| Dependency | Purpose |
|------------|---------|
| OpenRouter AI | Türkçe yanıt üretimi |

