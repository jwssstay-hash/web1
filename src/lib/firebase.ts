// Removed static imports to prevent SSR bundling


const firebaseConfig = {
  apiKey: "AIzaSyCIXl8zBAziXl610MX9wbFUfQvO3mwQuQo",
  authDomain: "jwss-stay.firebaseapp.com",
  projectId: "jwss-stay",
  storageBucket: "jwss-stay.firebasestorage.app",
  messagingSenderId: "839858358482",
  appId: "1:839858358482:web:429fc80577716089c1c50b",
  measurementId: "G-6HQP9HXLJR"
};

// Firebase is massive and crashes the Cloudflare Worker size limits if bundled on the server.
// We must ensure Firebase is ONLY initialized on the client side.
let app: any = null;
let db: any = null;

if (typeof window !== "undefined") {
  // We use dynamic require to absolutely prevent server-side bundling of the SDK
  const { initializeApp, getApps, getApp } = require("firebase/app");
  const { getFirestore } = require("firebase/firestore/lite");
  
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  db = getFirestore(app);
}

export { app, db };
