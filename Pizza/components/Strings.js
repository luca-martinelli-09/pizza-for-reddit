import LocalizedStrings from 'react-native-localization';

let localizedStrings = new LocalizedStrings({
  en: {
    appName: 'Pizza',
    appSubName: 'for Reddit',
    signIn: 'Log in',
    logInError: 'Error during login, retry',
  },
  it: {
    appName: 'Pizza',
    appSubName: 'for Reddit',
    signIn: 'Accedi',
    logInError: 'C\'è stato un errore durante il login. Riprova',
    momentMonths: {
      months: [
        'Gennaio',
        'Febbraio',
        'Marzo',
        'Aprile',
        'Maggio',
        'Giugno',
        'Luglio',
        'Agosto',
        'Settembre',
        'Ottobre',
        'Novembre',
        'Dicembre',
      ],
    },
  },
});

export { localizedStrings };