import "./App.css";
import BitCoin from "./screen/BitCoin";
import Buisness from "./screen/Buisness";
import Home from "./screen/Home";
import axios from "axios";
import { Route, NavLink, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [bitcoin, setBitcoin] = useState([]);
  const [buisness, setBuisness] = useState([]);
  const urlTemp = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=08783835fecb42539846462cc17ca48e`;
  useEffect(() => {
    const getBuisness = async () => {
      const urlTemp = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=08783835fecb42539846462cc17ca48e`;
      // const url = process.env.REACT_APP_API_URL + process.env.REACT_APP_API_KEY;
      const res = await axios.get(urlTemp);
      console.log(res);
      setBuisness(res.data.articles);
    };
    getBuisness();
  }, []);
  useEffect(() => {
    const getBitcoin = async () => {
      const urlTemp = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=08783835fecb42539846462cc17ca48e`;
      const res = await axios.get(urlTemp);
      console.log(urlTemp);
      setBitcoin(urlTemp.data);
    };
    getBitcoin();
  }, []);

  return (
    <div className="App">
      <div className="link">
        <nav>
          <NavLink exact to={"/"}>
            Home
          </NavLink>
          <NavLink to={"/BitCoin"}>Bitcoin</NavLink>
          <NavLink to={"/Buisness"}>Buisness</NavLink>
        </nav>
      </div>
      <main>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/BitCoin"}>
            <BitCoin bitcoin={bitcoin} />
          </Route>
          <Route exact path={"/Buisness"}>
            <Buisness buisness={Buisness} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
