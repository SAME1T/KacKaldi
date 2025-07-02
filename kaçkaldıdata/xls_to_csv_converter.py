import os
import pandas as pd

# Dönüştürülecek klasör
folder = os.path.dirname(os.path.abspath(__file__))

# Klasördeki tüm .xls dosyalarını bul
for filename in os.listdir(folder):
    if filename.lower().endswith('.xls'):
        xls_path = os.path.join(folder, filename)
        csv_path = os.path.splitext(xls_path)[0] + '.csv'
        try:
            # Excel dosyasını oku
            df = pd.read_excel(xls_path)
            # CSV olarak kaydet
            df.to_csv(csv_path, index=False)
            print(f"Dönüştürüldü: {filename} -> {os.path.basename(csv_path)}")
        except Exception as e:
            print(f"Hata ({filename}): {e}") 