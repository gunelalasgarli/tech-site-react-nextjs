import type { NextPage } from "next";
import styles from "./Main.module.scss";


interface Props {
}

const Menu: NextPage<Props> = ({ }) => {
    return (
        <div className={styles.long}>
            <div className={styles.main}>
                <div className={styles.item}>
                    <div className="container h-100">
                        <div className="row d-flex h-100 align-items-center">
                            <div className="col-xl-6 col-lg-7">
                                <div className={styles.content}>
                                    <h4>IT Software & Design</h4>
                                    <h2>Creating a better <strong>IT solutions</strong></h2>
                                </div>
                            </div>
                            <div className={`${styles["main-image"]} col-xl-6 col-lg-5`}>
                                <img src="https://validthemes.online/themeforest/techa/assets/img/illustration/5.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["fix-shaped"]}>
                    <img src="https://validthemes.online/themeforest/techa/assets/img/shape/13.png" alt="" />
                </div>
                <div className={styles["fix-shaped-wave"]}>
                    <img src="https://validthemes.online/themeforest/techa/assets/img/shape/waves-shape.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Menu;
