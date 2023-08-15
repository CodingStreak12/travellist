import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 2, packed: true },
];
let id = 4;
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <header className="logo">
      <h1>🌴FAR AWAY💼</h1>
    </header>
  );
}

function Form() {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) {
      return;
    }

    const newItem = { desc, quantity, id: id++, packed: false };
    console.log(newItem);
    setDesc("");
    setQuantity(1);
  }
  return (
    <section className="add-form-section">
      <h3>What do you need for your 😍 trip?</h3>
      <form className="add-form" onSubmit={handleSubmit}>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from(Array(20), (_, index) => index + 1).map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    </section>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
