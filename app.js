// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAoxXioKfQqXWYLdr6XD2x-Db55pH7O184",
  authDomain: "colegio-701ed.firebaseapp.com",
  projectId: "colegio-701ed",
  storageBucket: "colegio-701ed.appspot.com",
  messagingSenderId: "758519445268",
  appId: "1:758519445268:web:381f8ec37dae86445f3401",
  measurementId: "G-JKYHKQ9LWE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const nome = document.getElementById("inputNome")
const sobre = document.getElementById("inputSobrenome")
const email = document.getElementById("inputEmail")
const senha = document.getElementById("inputSenha")
const realizado = document.getElementById("cadastro")
const btn = document.getElementById("btn")
const msg = document.getElementById("registrado")
const itsOk = document.getElementById("itsOk")
const TURMA = "turmaA";
let db = firebase.firestore();

btn.addEventListener('click', () => {
  realizado.style.display = "none";
  msg.style.display = "block";
  itsOk.style.display = "block";
  itsOk.addEventListener('click', () => {
    realizado.style.display = "block";
    msg.style.display = "none";
    itsOk.style.display = "none";
    nome.value = "";
    sobre.value = "";
    email.value = "";
    senha.value = "";
  })
  db.collection(TURMA).doc(nome.value).set({
    nome: nome.value,
    sobrenome: sobre.value,
    email: email.value,
    senha: senha.value
  }).then(() => {
    console.log("Cadastrado com sucesso")
  }).catch((erro) => {
    console.log("Erro no cadastro")
  })
})