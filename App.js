import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [currentStep, setCurrentStep] = useState(-1); // -1 = giriş sayfası
  const [answers, setAnswers] = useState({
    cinsiyet: null,
    il: null,
    egitim: null,
    sigara: null,
    spor: null,
  });
  const [result, setResult] = useState(null);

  // Basit sorular - KESIN ÇALIŞIR
  const questions = [
    {
      title: 'Cinsiyetiniz?',
      key: 'cinsiyet',
      options: [
        { label: '👩 Kadın', value: 0 },
        { label: '👨 Erkek', value: 1 },
      ],
    },
    {
      title: 'Hangi ilde yaşıyorsunuz?',
      key: 'il',
      options: [
        { label: '🏙️ İstanbul', value: 'İstanbul' },
        { label: '🏛️ Ankara', value: 'Ankara' },
        { label: '🌊 İzmir', value: 'İzmir' },
        { label: '🌅 Antalya', value: 'Antalya' },
        { label: '🏭 Bursa', value: 'Bursa' },
        { label: '🌆 Diğer', value: 'Diğer' },
      ],
    },
    {
      title: 'Eğitim durumunuz?',
      key: 'egitim',
      options: [
        { label: '📚 İlkokul', value: 0 },
        { label: '📖 Ortaokul', value: 1 },
        { label: '🎓 Lise', value: 2 },
        { label: '🎯 Üniversite', value: 3 },
      ],
    },
    {
      title: 'Sigara kullanıyor musunuz?',
      key: 'sigara',
      options: [
        { label: '🚭 Hiç içmedim', value: 2 },
        { label: '🚫 Bıraktım', value: 0 },
        { label: '🚬 Az içiyorum', value: -5 },
        { label: '🚬 Çok içiyorum', value: -10 },
      ],
    },
    {
      title: 'Spor yapıyor musunuz?',
      key: 'spor',
      options: [
        { label: '😴 Hiç yapmam', value: -2 },
        { label: '🚶 Ara sıra', value: 1 },
        { label: '🏃 Düzenli yapıyorum', value: 5 },
        { label: '💪 Çok aktifim', value: 7 },
      ],
    },
  ];

  const calculateResult = () => {
    const { cinsiyet, il, egitim, sigara, spor } = answers;
    
    // Basit hesaplama
    let baseAge = 72;
    baseAge += cinsiyet * -3; // Erkek -3
    baseAge += egitim * 2; // Eğitim +2 her seviye
    baseAge += sigara; // Sigara etkisi
    baseAge += spor; // Spor etkisi
    
    // İl etkisi
    if (il === 'İstanbul') baseAge += 3;
    else if (il === 'Ankara') baseAge += 2;
    else if (il === 'İzmir') baseAge += 1;
    
    setResult(Math.max(50, Math.min(90, Math.round(baseAge))));
  };

  const resetApp = () => {
    setCurrentStep(-1);
    setAnswers({
      cinsiyet: null,
      il: null,
      egitim: null,
      sigara: null,
      spor: null,
    });
    setResult(null);
  };

  const startQuiz = () => {
    setCurrentStep(0);
  };

  const handleAnswer = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // GİRİŞ SAYFASI
  if (currentStep === -1) {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>🌿 KaçKaldı</Text>
            <Text style={styles.welcomeSubtitle}>Ölüm Yaşı Tahmin Uygulaması</Text>
            
            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>📊 Nasıl Çalışır?</Text>
              <Text style={styles.infoText}>
                • Cinsiyet, yaşadığınız il, eğitim durumu{'\n'}
                • Sigara kullanımı ve spor alışkanlıkları{'\n'}
                • Türkiye istatistiklerine dayalı hesaplama{'\n'}
                • Kişiselleştirilmiş sonuçlar
              </Text>
            </View>

            <View style={styles.disclaimerContainer}>
              <Text style={styles.disclaimerText}>
                ⚠️ Bu uygulama sadece eğlence amaçlıdır.
              </Text>
            </View>

            <TouchableOpacity style={styles.startButton} onPress={startQuiz}>
              <Text style={styles.startButtonText}>🚀 Başla</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  // SONUÇ SAYFASI
  if (result !== null) {
    const getResultMessage = () => {
      if (result >= 80) return '🎉 Mükemmel! Uzun yaşam beklentiniz var.';
      if (result >= 70) return '😊 İyi! Bazı alışkanlıklarınızı geliştirin.';
      if (result >= 60) return '⚠️ Dikkat! Yaşam tarzınızı değiştirin.';
      return '🚨 Acil! Sağlık uzmanına danışın.';
    };

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.resultContainer}>
            <Text style={styles.heartIcon}>💚</Text>
            <Text style={styles.resultTitle}>Sonucunuz</Text>
            
            <View style={styles.resultBox}>
              <Text style={styles.resultAge}>{result}</Text>
              <Text style={styles.resultYearText}>yaş</Text>
            </View>
            
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>{getResultMessage()}</Text>
            </View>
            
            <TouchableOpacity style={styles.resetButton} onPress={resetApp}>
              <Text style={styles.resetButtonText}>🔄 Yeniden Hesapla</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  // SORULAR SAYFASI
  const currentQuestion = questions[currentStep];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* BAŞLIK */}
          <View style={styles.header}>
            <Text style={styles.appTitle}>KaçKaldı</Text>
            <Text style={styles.stepIndicator}>{currentStep + 1} / {questions.length}</Text>
            
            <View style={styles.progressBar}>
              <View style={[styles.progress, {width: `${((currentStep + 1) / questions.length) * 100}%`}]} />
            </View>
          </View>

          {/* SORU */}
          <View style={styles.questionContainer}>
            <Text style={styles.questionTitle}>{currentQuestion.title}</Text>
            
            {/* ŞIKLAR */}
            <View style={styles.optionsContainer}>
              {currentQuestion.options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.option,
                    answers[currentQuestion.key] === option.value && styles.selectedOption,
                  ]}
                  onPress={() => handleAnswer(currentQuestion.key, option.value)}
                >
                  <Text style={styles.optionText}>
                    {answers[currentQuestion.key] === option.value ? '✅ ' : '◯ '}{option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* BUTONLAR */}
          <View style={styles.buttonContainer}>
            {currentStep > 0 && (
              <TouchableOpacity style={styles.prevButton} onPress={prevStep}>
                <Text style={styles.buttonText}>⬅️ Geri</Text>
              </TouchableOpacity>
            )}
            
            <TouchableOpacity 
              style={[
                styles.nextButton, 
                answers[currentQuestion.key] === null && styles.disabledButton
              ]} 
              onPress={nextStep}
              disabled={answers[currentQuestion.key] === null}
            >
              <Text style={styles.buttonText}>
                {currentStep === questions.length - 1 ? '🎯 Hesapla' : 'İleri ➡️'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#2d5016'
  },
  safeArea: { 
    flex: 1 
  },
  scrollView: { 
    flex: 1, 
    padding: 20 
  },
  
  // GİRİŞ SAYFASI
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#c8e6c9',
    marginBottom: 10,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 18,
    color: '#a5d6a7',
    marginBottom: 40,
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: 'rgba(200, 230, 201, 0.1)',
    borderRadius: 20,
    padding: 25,
    marginBottom: 30,
    width: '100%',
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e8f5e8',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#c8e6c9',
    lineHeight: 24,
  },
  disclaimerContainer: {
    backgroundColor: 'rgba(255, 193, 7, 0.2)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    width: '100%',
  },
  disclaimerText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#4caf50',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 25,
  },
  startButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },

  // SORULAR SAYFASI
  header: { 
    alignItems: 'center', 
    marginBottom: 30 
  },
  appTitle: { 
    fontSize: 36, 
    fontWeight: 'bold', 
    color: '#c8e6c9', 
    marginBottom: 10,
  },
  stepIndicator: { 
    fontSize: 18, 
    color: '#a5d6a7', 
    marginBottom: 15
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 4,
  },
  progress: {
    height: '100%',
    backgroundColor: '#4caf50',
    borderRadius: 4,
  },
  questionContainer: { 
    backgroundColor: 'rgba(200, 230, 201, 0.95)', 
    borderRadius: 20, 
    padding: 25, 
    marginBottom: 30,
  },
  questionTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#1b5e20', 
    marginBottom: 25, 
    textAlign: 'center' 
  },
  optionsContainer: { 
    marginBottom: 10 
  },
  option: { 
    backgroundColor: '#fff', 
    padding: 18, 
    borderRadius: 15, 
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#4caf50',
  },
  selectedOption: { 
    backgroundColor: '#4caf50',
  },
  optionText: { 
    fontSize: 18, 
    color: '#1b5e20', 
    fontWeight: '600',
  },
  buttonContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20 
  },
  prevButton: { 
    backgroundColor: 'rgba(255,255,255,0.2)', 
    paddingHorizontal: 25, 
    paddingVertical: 18, 
    borderRadius: 15, 
    flex: 0.4,
  },
  nextButton: { 
    backgroundColor: '#4caf50', 
    paddingHorizontal: 25, 
    paddingVertical: 18, 
    borderRadius: 15, 
    flex: 0.55,
    marginLeft: 10,
  },
  disabledButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    opacity: 0.5,
  },
  buttonText: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#fff' 
  },

  // SONUÇ SAYFASI
  resultContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  heartIcon: { 
    fontSize: 120, 
    marginBottom: 30 
  },
  resultTitle: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#c8e6c9', 
    marginBottom: 30, 
    textAlign: 'center',
  },
  resultBox: { 
    backgroundColor: 'rgba(200, 230, 201, 0.95)', 
    paddingHorizontal: 50, 
    paddingVertical: 30, 
    borderRadius: 25, 
    marginBottom: 25, 
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#4caf50',
  },
  resultAge: { 
    fontSize: 56, 
    fontWeight: 'bold', 
    color: '#1b5e20' 
  },
  resultYearText: { 
    fontSize: 20, 
    color: '#2e7d32', 
    fontWeight: '600' 
  },
  infoBox: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    width: '100%',
  },
  resetButton: { 
    backgroundColor: '#4caf50', 
    paddingHorizontal: 35, 
    paddingVertical: 18, 
    borderRadius: 15,
  },
  resetButtonText: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#fff' 
  },
}); 