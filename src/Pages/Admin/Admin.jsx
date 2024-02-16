import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  function createData() {
    let obj = {
      image,
      name,
      price,
      id: Date.now(),
    };
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data.push(obj);
    localStorage.setItem("data", JSON.stringify(data));
    setImage("");
    setName("");
    setPrice("");
    navigate("/");
  }
  function checkNumber(e) {
    let str = e.target.value;
    str = str
      .split("")
      .filter((el) => +el)
      .join("");
    setPrice(str);
  }
  return (
    <section id="admin">
      <div className="container">
        <div className="admin">
          <h1>Admin</h1>
          <input
            type="text"
            placeholder="name..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="url"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          <input
            type="text"
            placeholder="price"
            onChange={checkNumber}
            value={price}
          />
          <button onClick={createData}>create</button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
