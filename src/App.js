import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { menus } from "./mock";
import CartFinish from "./components/CartFinish/CartFinish";

function App() {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    const categoryCollection = collection(db, "Categorias");

    getDocs(categoryCollection).then((result) => {
      if (result.size === 0) {
        console.log("no retorna nada");
      }
      setCategorias(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      console.log(categorias);
    });
  }, []);

  return (
    <BrowserRouter className="App">
      <NavBar menus={menus} categorias={categorias} />
      <Routes>
        <Route exact path="/category/:id" element={<ItemListContainer />} />
        <Route exact path="/items/:id" element={<ItemDetailContainer />} />
        <Route exact path="/Cart" element={<CartFinish />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
