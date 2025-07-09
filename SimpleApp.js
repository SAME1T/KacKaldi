import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    {
      q: 'Cinsiyetiniz?',
      key: 'gender',
      options: [
        { text: '👩 Kadın', val: 0 },
        { text: '👨 Erkek', val: 1 }
      ]
    },
    {
      q: 'Hangi ilde doğdunuz?',
      key: 'city',
      options: [
        { text: '🏙️ İstanbul', val: 2 },
        { text: '🌊 İzmir', val: 1 },
        { text: '🏛️ Ankara', val: 1 },
        { text: '🌅 Antalya', val: 3 },
        { text: '⛰️ Doğu Anadolu', val: -2 },
        { text: '🌾 Karadeniz', val: 0 },
        { text: '🏜️ Güneydoğu Anadolu', val: -1 },
        { text: '🌿 Diğer', val: 0 }
      ]
    },
    {
      q: 'Eğitim durumunuz?',
      key: 'edu',
      options: [
        { text: '📚 İlkokul', val: 0 },
        { text: '📖 Ortaokul', val: 1 },
        { text: '🎓 Lise', val: 2 },
        { text: '🎯 Üniversite', val: 3 },
        { text: '👨‍🎓 Yüksek Lisans+', val: 4 }
      ]
    },
    {
      q: 'Kalıtsal hastalığınız var mı?',
      key: 'genetic',
      options: [
        { text: '✅ Yok', val: 0 },
        { text: '💊 Diyabet', val: -5 },
        { text: '❤️ Kalp hastalığı', val: -7 },
        { text: '🧬 Kanser geçmişi', val: -8 },
        { text: '🩸 Hipertansiyon', val: -3 },
        { text: '🧠 Nörolojik hastalık', val: -6 },
        { text: '🫁 Solunum hastalığı', val: -4 }
      ]
    },
    {
      q: 'Şu anda tedavi görüyor musunuz?',
      key: 'treatment',
      options: [
        { text: '✅ Hayır', val: 0 },
        { text: '💊 İlaç kullanıyorum', val: -2 },
        { text: '🏥 Düzenli kontrole gidiyorum', val: -1 },
        { text: '⚕️ Aktif tedavi görüyorum', val: -4 },
        { text: '🩺 Fizik tedavi', val: -1 }
      ]
    },
    {
      q: 'Sigara kullanıyor musunuz?',
      key: 'smoke',
      options: [
        { text: '🚭 Hiç içmedim', val: 2 },
        { text: '🚫 Bıraktım', val: 0 },
        { text: '🚬 Az içiyorum (1-10/gün)', val: -5 },
        { text: '🚬 Orta (10-20/gün)', val: -8 },
        { text: '🚬 Çok içiyorum (20+/gün)', val: -12 }
      ]
    },
    {
      q: 'Spor alışkanlığınız?',
      key: 'sport',
      options: [
        { text: '😴 Hiç yapmam', val: -2 },
        { text: '🚶 Ara sıra yürüyüş', val: 1 },
        { text: '🏃 Haftada 2-3 kez', val: 3 },
        { text: '💪 Düzenli spor yapıyorum', val: 5 },
        { text: '🏋️ Profesyonel seviyede', val: 7 }
      ]
    },
    {
      q: 'Beslenme alışkanlığınız?',
      key: 'nutrition',
      options: [
        { text: '🍔 Fast food ağırlıklı', val: -3 },
        { text: '🍖 Et ağırlıklı', val: -1 },
        { text: '🥗 Dengeli besleniyorum', val: 2 },
        { text: '🌱 Vejeteryan', val: 3 },
        { text: '🥬 Vegan', val: 4 }
      ]
    }
  ];

  const answer = (key, value) => {
    setData({...data, [key]: value});
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setTimeout(() => {
        const newData = {...data, [key]: value};
        // Gelişmiş algoritma
        const baseAge = 72;
        const genderEffect = newData.gender * -2;
        const cityEffect = newData.city || 0;
        const eduEffect = newData.edu * 1.5;
        const geneticEffect = newData.genetic || 0;
        const treatmentEffect = newData.treatment || 0;
        const smokeEffect = newData.smoke || 0;
        const sportEffect = newData.sport || 0;
        const nutritionEffect = newData.nutrition || 0;
        
        const age = baseAge + genderEffect + cityEffect + eduEffect + 
                   geneticEffect + treatmentEffect + smokeEffect + 
                   sportEffect + nutritionEffect;
        
        setResult(Math.max(45, Math.min(95, Math.round(age))));
      }, 100);
    }
  };

  const reset = () => {
    setStep(0);
    setData({});
    setResult(null);
  };

  const goBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  if (result) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🌿 KaçKaldı</Text>
        <Text style={styles.heart}>💚</Text>
        <Text style={styles.resultText}>Detaylı Analiz Sonucunuz</Text>
        <View style={styles.resultBox}>
          <Text style={styles.age}>{result}</Text>
          <Text style={styles.yearText}>yaş</Text>
        </View>
        
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            {result >= 80 ? '🎉 Mükemmel! Sağlıklı yaşam tarzınız sayesinde uzun yaşam beklentiniz var.' :
             result >= 70 ? '😊 İyi! Bazı alışkanlıklarınızı geliştirerek daha da iyi olabilir.' :
             result >= 60 ? '⚠️ Dikkat! Yaşam tarzınızda değişiklikler yapmanız önerilir.' :
             '🚨 Acil! Sağlık uzmanına danışmanız ve yaşam tarzınızı değiştirmeniz gerekli.'}
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={reset}>
          <Text style={styles.buttonText}>🔄 Yeniden Hesapla</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>🌿 KaçKaldı</Text>
        <Text style={styles.stepText}>Adım {step + 1}/{questions.length}</Text>
        
        <View style={styles.progressBar}>
          <View style={[styles.progress, {width: `${((step + 1) / questions.length) * 100}%`}]} />
        </View>
        
        <Text style={styles.question}>{questions[step].q}</Text>
        
        {questions[step].options.map((opt, i) => (
          <TouchableOpacity 
            key={i}
            style={styles.option} 
            onPress={() => answer(questions[step].key, opt.val)}
          >
            <Text style={styles.optionText}>{opt.text}</Text>
          </TouchableOpacity>
        ))}
        
        {step > 0 && (
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <Text style={styles.backButtonText}>⬅️ Geri</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#2d5016',
  },
  container: {
    flex: 1,
    backgroundColor: '#2d5016',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    minHeight: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#c8e6c9',
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 4,
  },
  stepText: {
    fontSize: 16,
    color: '#a5d6a7',
    marginBottom: 20,
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 4,
    marginBottom: 30,
  },
  progress: {
    height: '100%',
    backgroundColor: '#4caf50',
    borderRadius: 4,
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e8f5e8',
    marginBottom: 25,
    textAlign: 'center',
    lineHeight: 28,
  },
  option: {
    backgroundColor: 'rgba(200, 230, 201, 0.95)',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    width: '100%',
    borderLeftWidth: 4,
    borderLeftColor: '#4caf50',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  optionText: {
    fontSize: 16,
    color: '#1b5e20',
    textAlign: 'center',
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#c8e6c9',
    fontWeight: 'bold',
  },
  heart: {
    fontSize: 80,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 20,
    color: '#c8e6c9',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  resultBox: {
    backgroundColor: 'rgba(200, 230, 201, 0.95)',
    padding: 30,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#4caf50',
  },
  age: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#1b5e20',
  },
  yearText: {
    fontSize: 20,
    color: '#2e7d32',
    fontWeight: '600',
  },
  infoBox: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
    width: '100%',
  },
  infoText: {
    fontSize: 16,
    color: '#c8e6c9',
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
}); 