import { Productos } from "../../mock";
import "./CartFinish.css";
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";

const CartFinish = () => {
  const sendOrder = () => {
    const order = {
        buyer: {
          name: "pablo",
          phone: "2222",
          email: "prueba@coder.com",
        },
        items: [
          {
            name: "Baby Tee",
            price: 5200,
          },
        ],
        total: 5200,
      };
  
    const db = getFirestore();
    const ordersCollection = collection(db, "Orders");
    addDoc(ordersCollection,order).then(({id})=> alert(id))
  }

  return (
    <div>
      <h1>Finaliza tu compra</h1>
      <div className="producto-buyer">
        <div>
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div>
          <label>Dirección</label>
          <input type="text" />
        </div>
        <div>
          <label>Numero telefonico</label>
          <input type="text" />
        </div>
      </div>
      {Productos.map((producto) => {
        return (
          <div className="product-compra">
            <img src={producto.img} width={50} height={50} />
            <p>{producto.name}</p>
            <p>{producto.price}</p>
          </div>
        );
      })}
      <div>
        <button onClick={()=>sendOrder()}>Generar order</button>
      </div>
    </div>
  );
}

export default CartFinish;