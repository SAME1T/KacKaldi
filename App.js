import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, SafeAreaView } from 'react-native';

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    cinsiyet: null,
    egitim: null,
    sigara: null,
    spor: null,
  });
  const [result, setResult] = useState(null);

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
      title: 'Eğitim Durumunuz?',
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
        { label: '🚭 İçmiyorum', value: 0 },
        { label: '🚬 İçiyorum', value: 1 },
      ],
    },
    {
      title: 'Düzenli spor yapıyor musunuz?',
      key: 'spor',
      options: [
        { label: '😴 Yapmıyorum', value: 0 },
        { label: '💪 Yapıyorum', value: 1 },
      ],
    },
  ];

  const calculateResult = () => {
    const { cinsiyet, egitim, sigara, spor } = answers;
    
    if (cinsiyet === null || egitim === null || sigara === null || spor === null) {
      Alert.alert('Eksik Bilgi', 'Lütfen tüm soruları cevaplayın.');
      return;
    }

    const prediction = 70 + (cinsiyet * -3) + (egitim * 2) + (sigara * -8) + (spor * 5);
    setResult(Math.round(prediction));
  };

  const resetApp = () => {
    setCurrentStep(0);
    setAnswers({ cinsiyet: null, egitim: null, sigara: null, spor: null });
    setResult(null);
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

  if (result !== null) {
    return (
      <View style={[styles.container, styles.gradientBg]}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.resultContainer}>
            <Text style={styles.heartIcon}>❤️</Text>
            <Text style={styles.resultTitle}>Tahmini Ölüm Yaşınız</Text>
            <View style={styles.resultBox}>
              <Text style={styles.resultAge}>{result}</Text>
              <Text style={styles.resultYearText}>yaş</Text>
            </View>
            <TouchableOpacity style={styles.resetButton} onPress={resetApp}>
              <Text style={styles.resetButtonText}>🔄 Yeniden Hesapla</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <View style={[styles.container, styles.gradientBg]}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <Text style={styles.appTitle}>KaçKaldı</Text>
            <Text style={styles.stepIndicator}>{currentStep + 1} / {questions.length}</Text>
          </View>

          <View style={styles.questionContainer}>
            <Text style={styles.questionTitle}>{currentQuestion.title}</Text>
            <View style={styles.optionsContainer}>
              {currentQuestion.options.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.option,
                    answers[currentQuestion.key] === option.value && styles.selectedOption,
                  ]}
                  onPress={() => handleAnswer(currentQuestion.key, option.value)}
                >
                  <Text style={[
                    styles.optionText,
                    answers[currentQuestion.key] === option.value && styles.selectedOptionText,
                  ]}>
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.buttonContainer}>
            {currentStep > 0 && (
              <TouchableOpacity style={styles.prevButton} onPress={prevStep}>
                <Text style={styles.buttonText}>⬅️ Geri</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity 
              style={styles.nextButton} 
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
  container: { flex: 1 },
  gradientBg: { backgroundColor: '#667eea' },
  safeArea: { flex: 1 },
  scrollView: { flex: 1, padding: 20 },
  header: { alignItems: 'center', marginBottom: 30 },
  appTitle: { fontSize: 32, fontWeight: 'bold', color: 'white', marginBottom: 10 },
  stepIndicator: { fontSize: 16, color: 'rgba(255,255,255,0.8)' },
  questionContainer: { backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 15, padding: 20, marginBottom: 30 },
  questionTitle: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 20, textAlign: 'center' },
  optionsContainer: { marginBottom: 10 },
  option: { backgroundColor: '#f8f9fa', padding: 15, borderRadius: 10, marginBottom: 10, borderWidth: 2, borderColor: 'transparent' },
  selectedOption: { backgroundColor: '#667eea', borderColor: '#5a67d8' },
  optionText: { fontSize: 18, color: '#333', textAlign: 'center' },
  selectedOptionText: { color: 'white', fontWeight: 'bold' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  prevButton: { backgroundColor: 'rgba(255,255,255,0.3)', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 10, flex: 0.4 },
  nextButton: { backgroundColor: 'rgba(255,255,255,0.9)', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 10, flex: 0.5 },
  buttonText: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#333' },
  resultContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  heartIcon: { fontSize: 100, marginBottom: 30 },
  resultTitle: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 30, textAlign: 'center' },
  resultBox: { backgroundColor: 'rgba(255,255,255,0.9)', paddingHorizontal: 40, paddingVertical: 20, borderRadius: 20, marginBottom: 20, alignItems: 'center' },
  resultAge: { fontSize: 48, fontWeight: 'bold', color: '#667eea' },
  resultYearText: { fontSize: 18, color: '#667eea' },
  resetButton: { backgroundColor: 'rgba(255,255,255,0.9)', paddingHorizontal: 30, paddingVertical: 15, borderRadius: 10 },
  resetButtonText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
}); 