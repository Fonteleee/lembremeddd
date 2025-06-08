// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBnWMG6M0h5qNF0q-FnS8Smo3OMmeHC1Ds',
  authDomain: 'lemberrmed.firebaseapp.com',
  projectId: 'lemberrmed',
  storageBucket: 'lemberrmed.firebasestorage.app',
  messagingSenderId: '114875695519',
  appId: '1:114875695519:web:cbd182c2930a29a9363daa',
};

const app = initializeApp(firebaseConfig);

export default app;
