import './n.css';
import heroImage from "../assets/wallpaper.jpg";

const navbar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="ull">
          <li className="l"><a>Home</a></li>
          <li className="l"><a>About</a></li>
          <li className="l"><a>Service</a></li>
          <li className="l"><a>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar; 