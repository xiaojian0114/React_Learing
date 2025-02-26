import { Carousel } from "antd";
import "./MainBanner.css";

const MainBanner = () => {
  return (
    <div className="banner-container">
      <Carousel autoplay effect="fade">
        <div className="carousel-item">
          <img
            src="https://th.bing.com/th/id/OIP.PJtrOB9Qa0-tGaIsxrGYMwHaEo?w=202&h=126&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://th.bing.com/th/id/OIP.q576UJ3SoTxkTSX43Lh5xQHaDt?w=202&h=101&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://th.bing.com/th/id/OIP.VwML0wJrLXZgvXQHlQE7sgHaEM?w=202&h=115&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Slide 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default MainBanner;
