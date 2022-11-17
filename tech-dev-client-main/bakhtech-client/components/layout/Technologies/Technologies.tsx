import type { NextPage } from "next";
import Slider from "react-slick";
import styles from "./Technologies.module.scss";
import { FaAngular, FaAws, FaJava, FaReact, FaVuejs } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";

interface Props {}

const Menu: NextPage<Props> = ({}) => {
  const settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true
        }
      },
    ]
  };

  return (
    <div className={styles.technology}>
      <div className="container">
        <Slider {...settings}>
          <div className={styles.technologyItem}>
            <FaAws />
          </div>
          <div className={styles.technologyItem}>
            <FaAngular />
          </div>
          <div className={styles.technologyItem}>
            <FaReact />
          </div>
          <div className={styles.technologyItem}>
            <FaJava />
          </div>
          <div className={styles.technologyItem}>
            <FaVuejs />
          </div>
          <div className={styles.technologyItem}>
            <DiDotnet />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Menu;
