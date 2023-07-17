


import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCze4bseQqYfIEBgj8ZmXbABwFaTq1Xyqs",
  authDomain: "tech-net-3b9ec.firebaseapp.com",
  projectId: "tech-net-3b9ec",
  storageBucket: "tech-net-3b9ec.appspot.com",
  messagingSenderId: "549647645479",
  appId: "1:549647645479:web:669c32d61557066269c702"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);