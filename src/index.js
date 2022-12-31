import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartContextProvider } from "./Context/CartContext";

const firebaseConfig = {
  apiKey: "AIzaSyAm14ZCfZIaT9rkbZ54o8aoUfcNnPILHd8",
  authDomain: "proyecto-react---coder.firebaseapp.com",
  projectId: "proyecto-react---coder",
  storageBucket: "proyecto-react---coder.appspot.com",
  messagingSenderId: "723074181604",
  appId: "1:723074181604:web:a5e3bcd2b44f060cce3ff1",
  measurementId: "G-QKC21P6MG7"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
