// config.example.js — ASSENT Flow (Página Pública de Booking)
//
// ── Como usar ────────────────────────────────────────────────────────────────
// 1. Copie este arquivo: cp config.example.js config.js
// 2. Preencha os valores reais abaixo em config.js
// 3. NUNCA commite o config.js (ele já está no .gitignore)
//
// As chaves são as mesmas do .env do projeto AG (VITE_FIREBASE_*).
// ─────────────────────────────────────────────────────────────────────────────

window.FLOW_CONFIG = {

  // ── Firebase (mesmo projeto do AG) ────────────────────────────────────────
  firebase: {
    apiKey:            "SUA_VITE_FIREBASE_API_KEY",
    authDomain:        "SEU_PROJETO.firebaseapp.com",
    projectId:         "SEU_PROJETO_ID",
    storageBucket:     "SEU_PROJETO.appspot.com",
    messagingSenderId: "SEU_VITE_FIREBASE_MESSAGING_SENDER_ID",
    appId:             "SEU_VITE_FIREBASE_APP_ID",
    // measurementId é opcional (Analytics)
    // measurementId: "SEU_MEASUREMENT_ID",
  },

  // ── reCAPTCHA v3 (App Check) — mesmo site key do AG ──────────────────────
  // Obtenha em: https://console.cloud.google.com/security/recaptcha
  recaptchaSiteKey: "SEU_VITE_RECAPTCHA_SITE_KEY",

  // ── Debug local (desenvolvimento) ─────────────────────────────────────────
  // Em produção: mantenha como false ou remova esta linha.
  // Em dev local: mude para true — o token de debug aparecerá no console do browser.
  // Registre o token gerado em: Firebase Console → App Check → Apps → Manage debug tokens
  appCheckDebugToken: false,

};
