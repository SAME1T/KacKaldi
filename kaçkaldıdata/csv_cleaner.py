import os
import pandas as pd
import numpy as np

folder = os.path.dirname(os.path.abspath(__file__))

for filename in os.listdir(folder):
    if filename.lower().endswith('.csv'):
        csv_path = os.path.join(folder, filename)
        try:
            # Dosyayı oku, ilk 100 satırı atla (başlık ve veri bloğu arayışı için)
            df_raw = pd.read_csv(csv_path, header=None, skip_blank_lines=False)
            # Gerçek başlık satırını bul
            header_row = None
            for i, row in df_raw.iterrows():
                # En az 2-3 dolu hücre varsa başlık olabilir
                if row.notnull().sum() >= 3 and not all(str(cell).startswith('Unnamed') for cell in row):
                    header_row = i
                    break
            if header_row is None:
                print(f"Başlık bulunamadı: {filename}")
                continue
            # Gerçek veriyi başlıktan itibaren al
            df = pd.read_csv(csv_path, header=header_row)
            # Tamamen boş satır/sütunları sil
            df.dropna(axis=0, how='all', inplace=True)
            df.dropna(axis=1, how='all', inplace=True)
            # Eksik verileri doldur (sayısal ise ortalama, kategorik ise mod)
            for col in df.columns:
                if df[col].dtype in [np.float64, np.int64]:
                    mean_val = df[col].mean()
                    df[col].fillna(mean_val, inplace=True)
                else:
                    mode_val = df[col].mode().iloc[0] if not df[col].mode().empty else ''
                    df[col].fillna(mode_val, inplace=True)
            # Temiz dosyayı kaydet
            clean_path = os.path.splitext(csv_path)[0] + '_clean.csv'
            df.to_csv(clean_path, index=False)
            print(f"Temizlendi: {filename} -> {os.path.basename(clean_path)}")
        except Exception as e:
            print(f"Hata ({filename}): {e}") 