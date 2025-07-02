import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import pickle

# Dosya adı ve başlık satırı
# 12. satır başlık, pandas için header=12 (0-indexli: 11)
data_path = 'YAŞ GURUBU CİNSİYET EĞİTİME GÖRE ÖLÜM_clean.csv'
df = pd.read_csv(data_path, header=11)

# Yaş grubu sütununu ortalama yaşa çevir
age_map = {
    '6-9': 7.5, '10-14': 12, '15-19': 17, '20-24': 22, '25-29': 27, '30-34': 32, '35-39': 37, '40-44': 42,
    '45-49': 47, '50-54': 52, '55-59': 57, '60-64': 62, '65-69': 67, '70-74': 72, '75+': 80
}
def get_age(row):
    for k, v in age_map.items():
        if k in str(row):
            return v
    return np.nan

df['ortalama_ölüm_yaşı'] = df['Yaş grubu'].apply(get_age)

# Sadece yaş grubu ve yıl sayısal olan satırları al
numeric_cols = ['Erkek-Male', 'Toplam', 'bilmeyen', 'No school', 'Primary', 'Higher', 'Yıl']
# Sadece sayısal değerlere sahip satırları filtrele
for col in numeric_cols:
    df = df[pd.to_numeric(df[col], errors='coerce').notnull()]
    df[col] = pd.to_numeric(df[col], errors='coerce')

# Hedef değişkeni de filtrele
X = df[numeric_cols]
y = df['ortalama_ölüm_yaşı']

# Eksik verileri doldur
X = X.fillna(X.mean())
y = y.fillna(y.mean())

# Modelleme
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = LinearRegression()
model.fit(X_train, y_train)

# Modeli serialize et
with open('olum_yasi_model.pkl', 'wb') as f:
    pickle.dump(model, f)

print('Model eğitildi ve olum_yasi_model.pkl olarak kaydedildi.')

# Örnek tahmin
demo = pd.DataFrame({
    'Erkek-Male': [1],
    'Toplam': [1000],
    'bilmeyen': [10],
    'No school': [5],
    'Primary': [100],
    'Higher': [50],
    'Yıl': [2023]
})
pred = model.predict(demo)
print(f'Örnek tahmini ölüm yaşı: {pred[0]:.1f}') 