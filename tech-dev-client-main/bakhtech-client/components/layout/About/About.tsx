import { url } from "inspector";
import type { NextPage } from "next";
import styles from "./About.module.scss";

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
   <div className={styles.about}>
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className={styles.info}>
                <h3 className={styles.headText}>About Us</h3> 
                <h1 className={styles.headTitle}>We Help IT Companies Scale Engineering Capacity</h1>
                <p className={styles.aboutInner}>Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight sang lose. 
                </p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className={styles.bannerPic}>
                <img src="https://validthemes.online/themeforest/techa/assets/img/illustration/7.png" alt="" />
                </div>            
            </div>
        </div>
    </div>
   </div>
  );
};

export default About;
