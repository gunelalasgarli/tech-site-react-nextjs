import { url } from "inspector";
import type { NextPage } from "next";
import { AiFillPhone } from "react-icons/ai";
import { FaMapMarkerAlt, FaRegEnvelopeOpen } from "react-icons/fa";
import Button from "../../UI/Button";
import styles from "./Contact.module.scss";

interface Props {}

const Contact: NextPage<Props> = ({}) => {
  return (
    <div className={styles.contact}>
      <div
        className={`${styles.top} d-flex align-items-center justify-content-center`}
      >
        <h3>Contact Us</h3>
      </div>
      <div className={`container ${styles.contactContainer}`}>
        <div className="row d-flex">
          <div className="col-xl-6 col-lg-8 col-md-12">
            <div className={styles["form-header"]}>
              <h2>Need Help?</h2>
              <p>Reach out to the world’s most reliable IT services.</p>
            </div>
            <form>
              <div className="row">
                <div className={`col-md-6 col-12`}>
                  <div className={styles.control}>
                    <input type="text" placeholder="Name" required id="title" />
                  </div>
                </div>
                <div className={`col-md-6 col-12`}>
                  <div className={styles.control}>
                    <input
                      type="text"
                      placeholder="Email"
                      required
                      id="title"
                    />
                  </div>
                </div>
                <div className={`col-12`}>
                  <div className={styles.control}>
                    <input
                      type="text"
                      placeholder="Phone"
                      required
                      id="title"
                    />
                  </div>
                </div>
                <div className={`col-12`}>
                  <div className={styles.control}>
                    <textarea
                      placeholder="Please describe what you need."
                      required
                      id="title"
                    ></textarea>
                  </div>
                </div>
                <div col-4 className={styles.action}>
                  <Button
                    content="Get a free consultation"
                    style={styles.button}
                  />
                </div>
              </div>
            </form>
          </div>
          <div
            className={`col-xl-6 col-lg-4 col-md-12 ps-5 d-flex  ${styles.left}`}
          >
            <ul className={styles.contacts}>
              <li>
                <div className={styles.icon}>
                  <FaMapMarkerAlt />
                </div>
                <div className={styles.contactinfo}>
                  <p>
                    Our Location
                    <span>Alexima, NT 456678</span>
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.icon}>
                  <FaRegEnvelopeOpen />
                </div>
                <div className={styles.contactinfo}>
                  <p>
                    Send Us Email
                    <span>info@orchsky.com</span>
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.icon}>
                  <AiFillPhone />
                </div>
                <div className={styles.contactinfo}>
                  <p>
                    Call Us
                    <span>+456 456 4443</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
