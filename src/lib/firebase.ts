const firebaseConfig = {
  apiKey: "AIzaSyCIXl8zBAziXl610MX9wbFUfQvO3mwQuQo",
  authDomain: "jwss-stay.firebaseapp.com",
  projectId: "jwss-stay",
  storageBucket: "jwss-stay.firebasestorage.app",
  messagingSenderId: "839858358482",
  appId: "1:839858358482:web:429fc80577716089c1c50b",
  measurementId: "G-6HQP9HXLJR"
};

let app: any = null;
let db: any = null;

if (typeof window !== "undefined") {
  try {
    const { initializeApp, getApps, getApp } = require("firebase/app");
    const { getFirestore } = require("firebase/firestore/lite");
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
  } catch (e) {}
}

export async function getDb() {
  if (db) return db;
  if (typeof window === "undefined") return null;
  try {
    const { initializeApp, getApps, getApp } = await import("firebase/app");
    const { getFirestore } = await import("firebase/firestore/lite");
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
    return db;
  } catch (e) {
    return null;
  }
}

export { app, db };
