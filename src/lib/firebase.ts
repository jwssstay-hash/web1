const firebaseConfig = {
  apiKey: "AIzaSyCIXl8zBAziXl610MX9wbFUfQvO3mwQuQo",
  authDomain: "jwss-stay.firebaseapp.com",
  projectId: "jwss-stay",
  storageBucket: "jwss-stay.firebasestorage.app",
  messagingSenderId: "839858358482",
  appId: "1:839858358482:web:429fc80577716089c1c50b",
  measurementId: "G-6HQP9HXLJR"
};

let cachedApp: any = null;
let cachedDb: any = null;

export async function getDb() {
  if (cachedDb) return cachedDb;
  if (typeof window === "undefined") return null;
  try {
    const { initializeApp, getApps, getApp } = await import("firebase/app");
    const { getFirestore } = await import("firebase/firestore/lite");
    
    cachedApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    cachedDb = getFirestore(cachedApp);
    return cachedDb;
  } catch (e) {
    console.error("Firebase getDb initialization error:", e);
    return null;
  }
}

export const db: any = null;
export const app: any = null;
