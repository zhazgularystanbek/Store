import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  function readData() {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    setData(data);
  }
  useEffect(() => {
    readData();
  }, []);

  function deleteData(id) {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data = data.filter((el) => el.id !== id);
    localStorage.setItem("data", JSON.stringify(data));
    readData();
  }
  console.log(data);
  return (
    <section id="home">
      <div className="container">
        <div className="home">
          <div className="home__cards">
            {data.map((el) => (
              <div className="home__cards__card">
                <img src={el.image} alt="img" />
                <div className="home__cards__card__txt">
                  <h3>{el.name}</h3>
                  <h3>{el.price}</h3>
                </div>
                <div className="home__cards__card__btns">
                  <button onClick={() => deleteData(el.id)}>delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
