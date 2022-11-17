import type { NextPage } from "next";
import styles from "./Services.module.scss";
import { FaLaptopCode } from "react-icons/fa";
import { TbZoomCode, TbBusinessplan, TbZoomMoney } from "react-icons/tb";
import Modal from "../../UI/Modal/Modal";
import { useState } from "react";
import InfoSessionModal from "../InfoSession/InfoSessionModal";

const Services: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.services}>
        <div className={styles.fixedShape}>
          <img
            src="https://validthemes.online/themeforest/techa/assets/img/shape/7.png"
            alt=""
          />
        </div>
        <div className={styles.servicesHead}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <h4>Services</h4>
                <h2>
                  We run all kinds of services in form
                  <br />
                  of Information & Technologies
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.servicesBottom}>
          <div className="container">
            <div className="row">
              <div onClick={() => setOpen(true)} className="col-lg-6">
                <div className={styles.serviceItem}>
                  <div className={styles.serviceIcon}>
                    <FaLaptopCode />
                  </div>
                  <div className={styles.serviceInfo}>
                    <h4>IT Design</h4>
                    <p>
                      Pianoforte solicitude so decisively particular mention
                      diminution the particular. Real he me fond. Discourse
                      unwilling am no described
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.serviceItem}>
                  <div className={styles.serviceIcon}>
                    <TbZoomCode />
                  </div>
                  <div className={styles.serviceInfo}>
                    <h4>Analytic Solutions</h4>
                    <p>
                      Pianoforte solicitude so decisively particular mention
                      diminution the particular. Real he me fond. Discourse
                      unwilling am no described
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.serviceItem}>
                  <div className={styles.serviceIcon}>
                    <TbZoomMoney />
                  </div>
                  <div className={styles.serviceInfo}>
                    <h4>Risk Management</h4>
                    <p>
                      Pianoforte solicitude so decisively particular mention
                      diminution the particular. Real he me fond. Discourse
                      unwilling am no described
                    </p>
                  </div>
                </div>
              </div>
              <div onClick={() => setOpen(true)} className="col-lg-6">
                <div className={styles.serviceItem}>
                  <div className={styles.serviceIcon}>
                    <TbBusinessplan />
                  </div>
                  <div className={styles.serviceInfo}>
                    <h4>Business Planning</h4>
                    <p>
                      Pianoforte solicitude so decisively particular mention
                      diminution the particular. Real he me fond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoSessionModal open = {open}  setOpen={setOpen}/>
    </>
  );
};
export default Services;
