import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCRRhYnU_hn-E7GNkI3y9NW3-1QEEU-O7w',
  authDomain: 'sleact-55b8b.firebaseapp.com',
  projectId: 'sleact-55b8b',
  storageBucket: 'sleact-55b8b.appspot.com',
  messagingSenderId: '383797669937',
  appId: '1:383797669937:web:f67b3db07893ba0d86e510',
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
