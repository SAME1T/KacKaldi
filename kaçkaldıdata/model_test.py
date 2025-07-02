import pickle
import pandas as pd

# Modeli yükle
with open('olum_yasi_model.pkl', 'rb') as f:
    model = pickle.load(f)

print("🚀 ÖLÜM YAŞI TAHMİN SİSTEMİ")
print("=" * 40)

def tahmin_yap(cinsiyet, mevcut_yas, egitim, sigara, spor, sehir_kodu):
    """Verilen bilgilere göre ölüm yaşı tahmini yapar"""
    veri = pd.DataFrame({
        'cinsiyet': [cinsiyet],
        'mevcut_yas': [mevcut_yas], 
        'egitim': [egitim],
        'sigara_kullanıyor': [sigara],
        'spor_yapıyor': [spor],
        'sehir_kodu': [sehir_kodu]
    })
    
    tahmin = model.predict(veri)[0]
    return tahmin

# Örnek kullanımlar
ornekler = [
    {
        'isim': 'Ahmet (35, Erkek, Üniversite, Sigara içmiyor, Spor yapıyor)',
        'cinsiyet': 1, 'mevcut_yas': 35, 'egitim': 3, 'sigara': 0, 'spor': 1, 'sehir': 6
    },
    {
        'isim': 'Ayşe (40, Kadın, Lise, Sigara içiyor, Spor yapmıyor)', 
        'cinsiyet': 0, 'mevcut_yas': 40, 'egitim': 2, 'sigara': 1, 'spor': 0, 'sehir': 34
    },
    {
        'isim': 'Mehmet (50, Erkek, İlkokul, Sigara içiyor, Spor yapmıyor)',
        'cinsiyet': 1, 'mevcut_yas': 50, 'egitim': 0, 'sigara': 1, 'spor': 0, 'sehir': 1
    }
]

for ornek in ornekler:
    tahmin = tahmin_yap(
        ornek['cinsiyet'], ornek['mevcut_yas'], ornek['egitim'], 
        ornek['sigara'], ornek['spor'], ornek['sehir']
    )
    print(f"👤 {ornek['isim']}")
    print(f"   📊 Tahmini ölüm yaşı: {tahmin:.1f}")
    print()

print("🔢 Kodlama Bilgileri:")
print("   Cinsiyet: 0=Kadın, 1=Erkek")  
print("   Eğitim: 0=İlkokul, 1=Ortaokul, 2=Lise, 3=Üniversite")
print("   Sigara/Spor: 0=Hayır, 1=Evet")
print("   Şehir: İl plaka kodu (1-81)") 