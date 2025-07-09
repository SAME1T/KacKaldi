# 🌿 KaçKaldı - Ölüm Yaşı Tahmini Uygulaması

React Native + Expo ile geliştirilmiş, kullanıcılardan aldığı 5 temel soruyla yaşam beklentisi tahmini yapan basit mobil uygulama.

## 🚀 Özellikler

- **📱 React Native + Expo**: Cross-platform mobil uygulama
- **🎯 Tek Dosya**: Basit ve anlaşılır kod yapısı
- **📋 5 Temel Soru**: Hızlı ve kullanıcı dostu anket
- **🎨 Modern UI**: Yeşil tema ve glassmorphism tasarım
- **🌍 İl Seçimi**: Türkiye'nin büyük illeri dahil
- **📊 Anında Sonuç**: Gerçek zamanlı hesaplama

## 📱 Sorular

1. **👫 Cinsiyet**: Kadın/Erkek
2. **🏙️ İl**: İstanbul, Ankara, İzmir, Antalya, Bursa, Diğer
3. **🎓 Eğitim**: İlkokul, Ortaokul, Lise, Üniversite
4. **🚬 Sigara**: Hiç içmedim / Bıraktım / Az içiyorum / Çok içiyorum
5. **💪 Spor**: Hiç yapmam / Ara sıra / Düzenli / Çok aktifim

## 🧮 Hesaplama Algoritması

Türkiye istatistiklerine dayalı basit formül:
```
Temel Yaş: 72 yıl
+ Cinsiyet etkisi (Erkek: -3 yıl)
+ Eğitim seviyesi (+2 yıl her seviye için)
+ İl etkisi (İstanbul: +3, Ankara: +2, İzmir: +1)
+ Sigara etkisi (-10 ile +2 arası)
+ Spor etkisi (-2 ile +7 arası)
```

## 🛠 Kurulum ve Çalıştırma

### 🔥 En Hızlı Test Yöntemi (Önerilen)
1. App Store / Play Store'dan **"Expo Go"** indir
2. https://snack.expo.dev adresine git
3. `App.js` kodunu kopyala-yapıştır
4. **Save** butonuna bas
5. QR kod ile Expo Go'dan aç ✨

### Geleneksel Kurulum
```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Uygulamayı başlat
npx expo start


## 📂 Proje Yapısı

```
KaçKaldı/
├── App.js               # 🎯 TEK DOSYA - Tüm uygulama kodu
├── app.json            # Expo konfigürasyonu
├── package.json        # Bağımlılıklar
├── EXPO_REHBERI.md     # Detaylı kurulum rehberi
└── kaçkaldıdata/       # 📊 Python veri analizi (opsiyonel)
    ├── *.csv           # Ham veri setleri
    └── *.py           # Veri temizleme scriptleri
```

## 🎨 Öne Çıkan Tasarım

- **🌿 Yeşil Tema**: Doğal ve rahatlatıcı renk paleti
- **💎 Glassmorphism**: Modern şeffaf tasarım elementleri
- **📱 Responsive**: Tüm ekran boyutlarına uyumlu
- **🎭 Emoji**: Görsel zenginlik için emoji kullanımı
- **⚡ Smooth UX**: Akıcı geçişler ve animasyonlar

## 🔧 Sorun Giderme

### ❌ Sorular Görünmüyor
- **Çözüm**: Tek dosya (`App.js`) kullanın, import yok!
- Snack Expo'da ayrı dosyalar bazen sorun çıkarır

### 🤳 QR Kod Taranmıyor
- Expo Go güncel mi kontrol et
- Aynı WiFi ağında olduğundan emin ol
- `expo start --tunnel` dene

### 📱 Metro Bundler Sorunları
```bash
# Cache temizle
npx expo start --clear

# Tunnel modu
npx expo start --tunnel
```

## ⚡ Hızlı Başlangıç Rehberi

1. **Snack Expo'ya git**: https://snack.expo.dev
2. **App.js'i kopyala**: Tüm kodu seç ve kopyala
3. **Yapıştır ve kaydet**: Save butonuna bas
4. **QR kodu tara**: Expo Go ile aç
5. **Anketi doldur**: 5 soruyu yanıtla
6. **Sonucu gör**: Yaşam beklentin! 🎯

## 🤝 Katkıda Bulunma

1. Repo'yu fork et
2. Feature branch oluştur (`git checkout -b yeni-ozellik`)
3. Commit yap (`git commit -m 'Özellik eklendi'`)
4. Push et (`git push origin yeni-ozellik`)
5. Pull Request aç

## 📄 Lisans

Bu proje MIT lisansı altında dağıtılmaktadır - eğitim amaçlıdır.

## ⚠️ Önemli Uyarı

**🎮 Bu uygulama tamamen eğlence amaçlıdır!**
- Gerçek tıbbi tavsiye değildir
- Sağlık kararları için doktorunuza başvurun
- Sonuçlar bilimsel kesinlik taşımaz
- Sadece genel istatistiklere dayalıdır

---

💚 **Sağlıklı günler dileriz!** 🌿
