const firebaseConfig = {
  apiKey: "AIzaSyDIqbfgCAHvDi6WI_A_ngPeC7P4T2u6K64",
  authDomain: "hyttetur-e11c4.firebaseapp.com",
  projectId: "hyttetur-e11c4",
  storageBucket: "hyttetur-e11c4.firebasestorage.app",
  messagingSenderId: "161988631593",
  appId: "1:161988631593:web:8a6b4e7f5c9b7160e9d038",
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Init Firestore
const db = firebase.firestore();

// Hjelpefunksjoner

async function addFilm(title) {
  return db.collection("films").add({
    title,
    created: Date.now(),
  });
}

async function getAllFilms() {
  const snapshot = await db
    .collection("films")
    .orderBy("created", "desc")
    .get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
