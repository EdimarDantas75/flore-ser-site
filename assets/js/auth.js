// =============================================================
//  Flore-ser · UFG — Autenticação (Firebase Auth · Google)
//
//  Gate de acesso: o painel só carrega dados do Firestore para
//  usuários autenticados (as Security Rules exigem isAuth()).
//  O `papel` (admin/governanca/gestor/leitor) vem do custom claim
//  no token — leia com obterPapel().
// =============================================================
import { auth, USAR_FIREBASE } from "./firebase-config.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

export { USAR_FIREBASE };

/** Observa o estado de login. Chama cb(user|null) na carga e a cada mudança. */
export function observarAuth(cb) {
  return onAuthStateChanged(auth, cb);
}

/** Login com Google (popup). Lança erro em caso de falha/cancelamento. */
export async function entrarComGoogle() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  return signInWithPopup(auth, provider);
}

/** Login com e-mail e senha (usuários de demonstração: PRPG, SRI, PPG). */
export async function entrarComEmail(email, senha) {
  return signInWithEmailAndPassword(auth, email, senha);
}

/** Logout. */
export async function sair() {
  return signOut(auth);
}

/** Papel (custom claim) do usuário logado; 'leitor' como padrão. */
export async function obterPapel(user) {
  if (!user) return null;
  const token = await user.getIdTokenResult();
  return token.claims.papel || "leitor";
}
