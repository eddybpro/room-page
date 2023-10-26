import "./Card.css";
import PropTypes from "prop-types";
import { PrevIcon, NextIcon, ArrowIcon } from "../assets";

function Card(props) {
  return (
    <div className="Card">
      <div className="Card-ImgBox">
        <picture>
          <source media="(max-width:768px)" srcSet={props.image.mobile} />
          <source media="(min-width:769px)" srcSet={props.image.desktop} />
          <img src={props.image.mobile} alt="" />
        </picture>
        <div className="Card-ImgBox-BtnsBox">
          <button
            aria-label="prev image"
            className="Card-ImgBox-BtnsBox-PrevBtn"
            onClick={props.prevSlide}
          >
            <img src={PrevIcon} alt="" />
          </button>
          <button
            aria-label="next image"
            className="Card-ImgBox-BtnsBox-NextBtn"
            onClick={props.nextSlide}
          >
            <img src={NextIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="Card-TxtBox">
        <h1 className="Card-TxtBox-Title">{props.title}</h1>
        <p className="Card-TxtBox-Para">{props.para}</p>
        <button className="Card-TxtBox-ShopBtn">
          <span>shop now</span>
          <img src={ArrowIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  para: PropTypes.string,
  nextSlide: PropTypes.func,
  prevSlide: PropTypes.func,
};

export default Card;
