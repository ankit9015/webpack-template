import "./styles/App.css";
import HeroImg from "./assets/hero.svg";

function App({ name }) {
  return `<h1 class="text-center">Hello ${name}</h1>
  <img src="${HeroImg}" alt="hero image" class="hero-img" />`;
}

export default App;
