import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
import pickle

# Örnek veri seti oluştur (gerçek veriler yerine)
np.random.seed(42)
n_samples = 1000

# Özellikler
cinsiyet = np.random.choice([0, 1], n_samples)  # 0: Kadın, 1: Erkek
yas = np.random.randint(20, 80, n_samples)
egitim = np.random.choice([0, 1, 2, 3], n_samples)  # 0: İlkokul, 1: Ortaokul, 2: Lise, 3: Üniversite
sigara = np.random.choice([0, 1], n_samples)  # 0: İçmiyor, 1: İçiyor
spor = np.random.choice([0, 1], n_samples)  # 0: Yapmıyor, 1: Yapıyor
sehir_kodu = np.random.randint(1, 82, n_samples)  # İl kodları

# Hedef değişken: Ölüm yaşı (basit formül ile)
olum_yasi = (
    70 +  # Temel yaş
    (cinsiyet * -3) +  # Erkekler biraz daha erken
    (egitim * 2) +  # Eğitim arttıkça yaşam süresi artar
    (sigara * -8) +  # Sigara yaşam süresini azaltır
    (spor * 5) +  # Spor yaşam süresini artırır
    np.random.normal(0, 5, n_samples)  # Rastgele gürültü
)

# Veri çerçevesi oluştur
df = pd.DataFrame({
    'cinsiyet': cinsiyet,
    'mevcut_yas': yas,
    'egitim': egitim,
    'sigara_kullanıyor': sigara,
    'spor_yapıyor': spor,
    'sehir_kodu': sehir_kodu,
    'olum_yasi': olum_yasi
})

# Model eğitimi
X = df[['cinsiyet', 'mevcut_yas', 'egitim', 'sigara_kullanıyor', 'spor_yapıyor', 'sehir_kodu']]
y = df['olum_yasi']

model = LinearRegression()
model.fit(X, y)

# Modeli kaydet
with open('olum_yasi_model.pkl', 'wb') as f:
    pickle.dump(model, f)

print("✅ Model başarıyla eğitildi ve 'olum_yasi_model.pkl' olarak kaydedildi!")

# Örnek tahminler
test_ornekleri = [
    {'cinsiyet': 1, 'mevcut_yas': 35, 'egitim': 3, 'sigara_kullanıyor': 0, 'spor_yapıyor': 1, 'sehir_kodu': 6},  # Erkek, üniversiteli, sigara içmeyen, spor yapan
    {'cinsiyet': 0, 'mevcut_yas': 40, 'egitim': 1, 'sigara_kullanıyor': 1, 'spor_yapıyor': 0, 'sehir_kodu': 34},  # Kadın, ortaokul, sigara içen, spor yapmayan
    {'cinsiyet': 1, 'mevcut_yas': 50, 'egitim': 2, 'sigara_kullanıyor': 1, 'spor_yapıyor': 0, 'sehir_kodu': 1}   # Erkek, lise, sigara içen, spor yapmayan
]

print("\n📊 Örnek Tahminler:")
for i, ornek in enumerate(test_ornekleri, 1):
    test_df = pd.DataFrame([ornek])
    tahmin = model.predict(test_df)[0]
    print(f"  {i}. Örnek: Tahmini ölüm yaşı = {tahmin:.1f}")

print("\n🎯 Model kullanıma hazır!")
print("Kullanım: pickle ile modeli yükleyip tahmin yapabilirsin.") 