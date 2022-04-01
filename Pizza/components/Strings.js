import LocalizedStrings from 'react-native-localization';

let localizedStrings = new LocalizedStrings({
  en: {
    appName: 'Pizza',
  },
  it: {
    appName: 'Pizza',
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