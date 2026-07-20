import "./n.css";
import img1 from "../assets/wallpaper.jpg";

const Slider = () => {
  return (
    <div className="slider">
      <img src={img1} alt="Wallpaper" className="slider-img"/>
    </div>
  );
};

export default Slider;