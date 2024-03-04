import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import tEn from './locales/en/Translation.json';
import tSa from './locales/sa/Translation.json';


import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';


import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        common: tEn
      },
      sa: {
        common: tSa 
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });





  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  
  </I18nextProvider>,
  );
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
