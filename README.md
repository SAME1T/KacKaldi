# KaçKaldı - Ölüm Yaşı Tahmini Uygulaması

React Native + Expo ile geliştirilmiş, kullanıcılardan aldığı verilerle makine öğrenmesi algoritması kullanarak ölüm yaşı tahmini yapan mobil uygulama.

## 🚀 Özellikler

- **📱 React Native + Expo**: Cross-platform mobil uygulama
- **🧠 Akıllı Tahmin**: Linear Regression algoritması ile ölüm yaşı tahmini
- **📋 4 Basit Soru**: Kullanıcı dostu adım adım form
- **🎨 Modern UI**: Gradient tasarım ve dokunmatik optimizasyonu
- **📱 iPhone Uyumlu**: SafeAreaView ve iOS optimizasyonları

## 📱 Sorular

1. **👫 Cinsiyet**: Kadın/Erkek
2. **🎓 Eğitim**: İlkokul, Ortaokul, Lise, Üniversite
3. **🚬 Sigara**: İçiyor/İçmiyor
4. **💪 Spor**: Yapıyor/Yapmıyor

## 🧠 Model Algoritması

Python'da Linear Regression ile eğitilmiş model formülü:
```
Ölüm Yaşı = 70 + (Cinsiyet × -3) + (Eğitim × 2) + (Sigara × -8) + (Spor × 5)
```

- **Temel yaş**: 70
- **Erkek**: -3 yıl
- **Eğitim seviyesi**: +2 yıl (her seviye için)
- **Sigara**: -8 yıl
- **Spor**: +5 yıl

## 🛠 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (https://nodejs.org)
- Expo CLI
- iPhone'da Expo Go uygulaması

### Hızlı Başlatma
```bash
# 1. Expo CLI kur
npm install -g expo-cli

# 2. Bağımlılıkları yükle
npm install

# 3. Uygulamayı başlat
npx expo start

# 4. iPhone'da Expo Go ile QR kodu tara
```

### 🔥 En Hızlı Test Yöntemi
1. App Store'dan **"Expo Go"** indir
2. https://snack.expo.dev adresine git
3. `App.js` kodunu kopyala-yapıştır
4. **Save** butonuna bas
5. QR kod ile Expo Go'dan aç

## 📊 Örnek Sonuçlar

- **Üniversiteli, spor yapan, sigara içmeyen erkek**: ~78 yaş
- **Lise mezunu, sigara içen, spor yapmayan kadın**: ~66 yaş
- **İlkokul mezunu, sigara içen, spor yapmayan erkek**: ~59 yaş

## 📂 Proje Yapısı

```
KaçKaldı/
├── App.js                 # Ana React Native kodu
├── app.json              # Expo konfigürasyonu
├── package.json          # Bağımlılıklar
├── EXPO_REHBERI.md       # Detaylı kurulum rehberi
├── kaçkaldıdata/         # Python model ve veri dosyaları
│   ├── simple_model.py   # Model eğitimi
│   ├── model_test.py     # Model test
│   └── *.csv             # Temizlenmiş veri setleri
└── README.md             # Bu dosya
```

## 🧪 Model Geliştirme

Python modeli ayrı olarak geliştirilmiş ve test edilmiştir:

```bash
# Model eğitimi ve test
cd kaçkaldıdata
python simple_model.py
python model_test.py
```

## 🔧 Sorun Giderme

### QR Kod Taranmıyor
- Expo Go güncel mi kontrol et
- Aynı WiFi ağında olduğundan emin ol
- `expo start --clear` ile cache temizle

### Metro Bundler Açılmıyor
```bash
npx expo start --clear
# veya
npx expo start --tunnel
```

## 🤝 Katkıda Bulunma

1. Bu repo'yu fork et
2. Feature branch oluştur (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerini commit et (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'i push et (`git push origin feature/yeni-ozellik`)
5. Pull Request oluştur

## 📄 Lisans

Bu proje eğitim amaçlıdır ve MIT lisansı altında dağıtılmaktadır.

## ⚠️ Uyarı

**Bu uygulama sadece eğlence ve eğitim amaçlıdır.** Gerçek sağlık tavsiyeleri için doktorunuza başvurun. Uygulamanın tahminleri bilimsel kesinlik taşımaz. 