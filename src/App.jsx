import "./App.css";
import { data } from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { Dark, Light } from "./assets";
import { useState } from "react";

function App() {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev == length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev == 0 ? length - 1 : prev - 1));
  };
  return (
    <main>
      <Navbar />
      <div className="HeroWrapper">
        {data.map((el, i) => (
          <div className={current === i ? "slide active" : "slide"} key={i}>
            {current === i && (
              <Card {...el} nextSlide={nextSlide} prevSlide={prevSlide} />
            )}
          </div>
        ))}
      </div>
      <div className="Wrapper">
        <div className="Wrapper-DarkImgBox">
          <img src={Dark} alt="" />
        </div>
        <div className="Wrapper-Furniture">
          <h1 className="Wrapper-Furniture-Title">about our furniture</h1>
          <p className="Wrapper-Furniture-Para">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <div className="Wrapper-LightImgBox">
          <img src={Light} alt="" />
        </div>
      </div>
    </main>
  );
}

export default App;
