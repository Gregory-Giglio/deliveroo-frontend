import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Category from "./assets/components/Category";
import Cart from "./assets/components/Cart";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://site--deliveroo-backend--4pswvlk4zjzj.code.run/");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="App">
      <header>
        <img src="./img/logo-teal.svg" alt="logo" />
      </header>
      <div className="restaurant">
        <div>
          <h2>{data.restaurant.name}</h2>
          <p>{data.restaurant.description}</p>
        </div>
        <img src={data.restaurant.picture} alt="restaurant" />
      </div>
      <div className="container">
        <div className="categories">
          {data.categories.map((category, index) => {
            if (category.meals.length > 0){
              return <Category key={index} category={category} cart={cart} setCart={setCart} />
            } else {
              return null;
            }
          })}
          
        </div>
        <div className="cart">
          <Cart cart={cart} setCart={setCart}/>
        </div>
      </div>
    </div>
  );
}

export default App;