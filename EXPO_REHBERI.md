# 📱 iPhone'da KaçKaldı Uygulamasını Çalıştırma Rehberi

## 🚀 **EXPO İLE HIZLI ÇÖZÜM**

### **1️⃣ Expo Go Uygulamasını İndir**
- App Store'dan **"Expo Go"** uygulamasını indir
- Ücretsiz ve resmi Expo uygulaması

### **2️⃣ Node.js Kur (Bilgisayara)**
```bash
# https://nodejs.org adresine git
# LTS versiyonunu indir ve kur
```

### **3️⃣ Expo CLI Kur**
```bash
npm install -g expo-cli
# veya
npm install -g @expo/cli
```

### **4️⃣ Proje Klasöründe Başlat**
```bash
# KaçKaldı klasöründe
npm install
expo start
```

### **5️⃣ iPhone'da Aç**
- **QR Kod**: Expo Go ile QR kodu tara
- **Aynı WiFi**: Telefon ve bilgisayar aynı ağda olmalı
- **Metro Server**: http://localhost:19000 açılacak

---

## 🔧 **ALTERNATIF: SNACK.EXPO.DEV**

### **Online Editör (Hemen Test Et)**
1. https://snack.expo.dev adresine git
2. **App.js** kodunu yapıştır
3. **Save** butonuna bas
4. **QR Kod** ile Expo Go'dan aç

---

## 📋 **PROJE DOSYALARI**

### **Ana Dosyalar:**
- ✅ `App.js` - React Native kodu
- ✅ `app.json` - Expo konfigürasyonu  
- ✅ `package.json` - Bağımlılıklar

### **Özellikler:**
- 🎯 **4 Adımlı Soru**: Cinsiyet, Eğitim, Sigara, Spor
- 🧮 **Akıllı Tahmin**: Linear regression modeli
- 🎨 **Modern UI**: Gradient arka plan, animasyonlar
- 📱 **iPhone Uyumlu**: SafeAreaView, dokunmatik optimizasyonu

---

## ⚡ **HIZLI BAŞLATMA**

```bash
# 1. Expo CLI kur
npm install -g expo-cli

# 2. Bağımlılıkları yükle  
npm install

# 3. Başlat
expo start

# 4. iPhone'da Expo Go ile QR kodu tara
```

---

## 🔍 **SORUN GİDERME**

### **QR Kod Taranmıyor**
- Expo Go güncel mi kontrol et
- Aynı WiFi ağında olduğundan emin ol
- Metro Bundler'ı yeniden başlat: `r` tuşuna bas

### **Metro Bundler Açılmıyor**
```bash
expo start --clear
# veya
npx expo start --clear
```

### **Bağlantı Sorunu**
- Firewall kapalı olduğundan emin ol
- `expo start --tunnel` komutu ile tunnel kullan

---

## 🎉 **BAŞARI!**

Artık iPhone'unda **KaçKaldı** uygulaması çalışıyor! 
- Soruları cevapla
- Tahmini ölüm yaşını gör
- Arkadaşlarınla paylaş

**Not**: Bu sadece eğlence amaçlıdır, gerçek sağlık tavsiyesi değildir! 😄 