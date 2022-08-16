import "./styles/App.css";
import HeroImg from "./assets/hero.svg";
import _ from "lodash";

function App({ name }) {
  return `<h1 class="text-center">${_.join(["Welcome,", name], " ")}</h1>
  <img src="${HeroImg}" alt="hero image" class="hero-img" />`;
}

export default App;
