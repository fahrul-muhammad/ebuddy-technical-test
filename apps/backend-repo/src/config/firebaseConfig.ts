import { credential, ServiceAccount } from "firebase-admin";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "./serviceAccount.json";

export const firebaseConfig = {
  credential: credential.cert(serviceAccount as ServiceAccount),
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
