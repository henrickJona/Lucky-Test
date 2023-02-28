import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Principal from './screens';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  pt: { title: 'Teste de Sorte', buttonText: 'Testar', placeholderText:'Número de participantes so sorteio',alertTitle:'Aviso', negativeWarning:'Insira numeros superiores a 1',defatulValue:'Primeiro adicione o número de participantes',finalMessage:'Número de tentativas até sair seu número' },
  en: { title: 'Luck Test', buttonText: 'Check', placeholderText:'Number of draw participants',alertTitle:'Warning', negativeWarning:'Insert numbers over 1',defatulValue:'Fist insert number of participants',finalMessage:'Attempts number of draw to win'  },
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;


export default function App() {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Principal/>
      
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A3950',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
