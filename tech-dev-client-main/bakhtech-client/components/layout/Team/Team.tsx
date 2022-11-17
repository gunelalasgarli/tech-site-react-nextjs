import type { NextPage } from "next";
import styles from "./Team.module.scss";

interface Props {}

const Team: NextPage<Props> = ({}) => {
  return (
    <div className={styles.team}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Meet Our Team</h2>
        </div>
        <div className="row d-flex">
          <div className="col-xl-4 col-lg-6 col-12 p-4">
            <div>
              <div className={styles.thumb}>
                <img
                  src="https://validthemes.online/themeforest/techa/assets/img/team/1.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <h4>Ilham Baghirov</h4>
                <span>IT Department Director</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-12 p-4">
            <div>
              <div className={styles.thumb}>
                <img
                  src="https://validthemes.online/themeforest/techa/assets/img/team/6.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <h4>Gunel Alasgarli</h4>
                <span>Finance Department Director</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-12 p-4">
            <div>
              <div className={styles.thumb}>
                <img
                  src="https://validthemes.online/themeforest/techa/assets/img/team/3.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <h4>Bakhty</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
