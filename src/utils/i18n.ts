// src/i18n.js
import i18next from 'i18next';

i18next.init({
  lng: 'en', // default language
  fallbackLng: 'en', // fallback language if a translation is missing
  resources: {
    en: {
      translation: {
        welcome: "Welcome to our website!",
        nav: {
          home: "Home",
          about: "About",
          contact: "Contact"
        }
      }
    },
    es: {
      translation: {
        welcome: "¡Bienvenido a nuestro sitio web!",
        nav: {
          home: "Inicio",
          about: "Acerca de",
          contact: "Contacto"
        }
      }
    },
    // Add other languages here
  }
});

export default i18next;
