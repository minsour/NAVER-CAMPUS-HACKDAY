import { default as React } from 'react';
import en from './lang/en';
import ko from './lang/ko';

const languages = {
  en,
  ko
};

// for DEV
const langKey = localStorage.getItem('langKey');

export default function i18n(OriginComponent) {
  return class extends React.Component {
    render() {
      const currentLang = languages[langKey];
      return <OriginComponent lang={currentLang} />
    }
  }
}