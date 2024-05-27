// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyAAd-O6SVTuKL2xVdnybxO0QKSmKjIDIb0",
//     authDomain: "casamento-leticia.firebaseapp.com",
//     projectId: "casamento-leticia",
//     storageBucket: "casamento-leticia.appspot.com",
//     messagingSenderId: "211568741009",
//     appId: "1:211568741009:web:c51ea1ee048fa938d74d30",
//     measurementId: "G-XZNZQYGS94"
// };

// export const app = initializeApp(firebaseConfig);


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAAd-O6SVTuKL2xVdnybxO0QKSmKjIDIb0",
    authDomain: "casamento-leticia.firebaseapp.com",
    databaseURL: "https://casamento-leticia-default-rtdb.firebaseio.com",
    projectId: "casamento-leticia",
    storageBucket: "casamento-leticia.appspot.com",
    messagingSenderId: "211568741009",
    appId: "1:211568741009:web:c51ea1ee048fa938d74d30",
    measurementId: "G-XZNZQYGS94"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, uploadBytes, getDownloadURL };
