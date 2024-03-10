import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  query,
  equalTo,
  orderByChild,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDKLXKW-AqqM0P5x3Xn-gf7D6df7t0Hso0",
  authDomain: "easyweb3-a0193.firebaseapp.com",
  projectId: "easyweb3-a0193",
  storageBucket: "easyweb3-a0193.appspot.com",
  messagingSenderId: "81623731836",
  appId: "1:81623731836:web:16c8aefb093f5aef8b83f9",
  measurementId: "G-W460ZXFDMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to add fields to the database
export async function addFieldsToDatabase(
  email: string,
  publicKey: string,
  privateKey: string,
  organization?: string,
  isSigner = false
): Promise<void> {
  const hashedEmail = await hashEmail(email);
  if (organization) {
    set(ref(database, `users/${hashedEmail}`), {
      email,
      publicKey,
      privateKey,
      organization,
      isSigner,
    });
  } else {
    set(ref(database, `users/${hashedEmail}`), {
      email,
      publicKey,
      privateKey,
      isSigner,
    });
  }
}

async function hashEmail(email: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(email);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

// Function to check if hashed email exists in the database
export async function checkEmailExists(email: string): Promise<boolean> {
  const hashedEmail = await hashEmail(email);
  const snapshot = await get(ref(database, `users/${hashedEmail}`));
  return snapshot.exists();
}

// Function to get publicKey and privateKey from the database
export async function getEmailKeys(email: string): Promise<{
  publicKey: string | null;
  privateKey: string | null;
  organization: string | null;
  isSigner: boolean | null;
}> {
  const hashedEmail = await hashEmail(email);
  const snapshot = await get(ref(database, `users/${hashedEmail}`));
  const userData = snapshot.val();
  if (userData) {
    const { publicKey, privateKey, isSigner } = userData;
    if (userData.organization) {
      return {
        publicKey,
        privateKey,
        organization: userData.organization,
        isSigner,
      };
    }
    return { publicKey, privateKey, organization: null, isSigner };
  } else {
    return {
      publicKey: null,
      privateKey: null,
      organization: null,
      isSigner: null,
    };
  }
}

// Usage examples
// addFieldsToDatabase("user@example.com", "publicKey123", "privateKey456");

// checkEmailExists(SHA256("user@example.com").toString()).then((exists) => {
//   console.log(exists); // true
// });

// getEmailKeys("user@example.com").then(({ publicKey, privateKey }) => {
//   console.log(publicKey, privateKey); // publicKey123 privateKey456
// });
