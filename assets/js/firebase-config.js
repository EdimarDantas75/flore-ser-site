// =============================================================
//  Internacionaliza · UFG — Inicialização do Firebase (front-end)
//  ES Modules, sem build. Importe `db`, `auth` nos módulos do painel.
// =============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { initializeFirestore, connectFirestoreEmulator } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, connectAuthEmulator } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage, connectStorageEmulator } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Preencha com as credenciais do projeto (Console Firebase > Configurações).
const firebaseConfig = {
  apiKey: "DEMO_LOCAL_MODE",
  authDomain: "internacionaliza-ufg.firebaseapp.com",
  projectId: "internacionaliza-ufg",
  storageBucket: "internacionaliza-ufg.firebasestorage.app",
  messagingSenderId: "138592336968",
  appId: "1:138592336968:web:7de80c50e0ca92d981ac7d",
};

const app = initializeApp(firebaseConfig);
// long-polling auto-detect: garante conexão com o emulador e com redes
// que bloqueiam o transporte WebChannel/streaming padrão.
const db = initializeFirestore(app, { experimentalAutoDetectLongPolling: true });
const auth = getAuth(app);
const storage = getStorage(app);

// Em localhost com ?emu=1 conecta aos emuladores; senão usa produção.
const USE_EMU =
  new URLSearchParams(location.search).get("emu") === "1" ||
  localStorage.getItem("UFG_EMU") === "1";
const emEmulador = USE_EMU && ["localhost", "127.0.0.1"].includes(location.hostname);
if (emEmulador) {
  connectAuthEmulator(auth, "http://localhost:9099", { disableWarnings: true });
  connectFirestoreEmulator(db, "localhost", 8080);
  connectStorageEmulator(storage, "localhost", 9199);
  console.info("[Internacionaliza] Conectado aos emuladores locais.");
}

// Firebase está realmente em uso? (credenciais reais OU emulador local).
// Quando false, o painel roda em modo demonstração lendo os seeds locais.
const FIREBASE_CONFIGURADO = firebaseConfig.apiKey !== "YOUR_API_KEY";
// Flore-ser · Passo 4: modo LOCAL — painel público sem login, lendo os seeds de Goiânia.
// (Reativar login/gestão no Passo 7, com o projeto Firebase próprio do Flore-ser.)
const USAR_FIREBASE = false;

export { db, auth, storage, app, USAR_FIREBASE, USE_EMU };
