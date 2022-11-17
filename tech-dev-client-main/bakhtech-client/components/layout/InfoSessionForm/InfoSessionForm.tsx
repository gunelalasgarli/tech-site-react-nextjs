import type { NextPage } from "next";
import { AiFillPhone } from "react-icons/ai";
import { FaMapMarkerAlt, FaRegEnvelopeOpen } from "react-icons/fa";
import Button from "../../UI/Button";
import styles from "./InfoSessionForm.module.scss";

interface Props {}

const InfoSessionForm: NextPage<Props> = ({}) => {
  return (
    <>
      <div
        className={`${styles.top} d-flex align-items-center justify-content-center`}
      >
        <h3>Info Session</h3>
      </div>
      <div className="container">
        <div className="row d-flex">
          <div
            className={`col-xl-7 col-lg-4 col-md-12 d-flex  ${styles.left}`}
          >
            <div className={styles["session-form"]}>
              <div className={styles["form-wrapper"]}>
                <div className={styles["session-modal"]}>
                  <h3>Cloud Engineering</h3>
                  <p>
                    Informative session for nerds who want to learn cloud
                    engineering. Press button for completing a from and you will
                    receive an email for session link.
                  </p>
                </div>
                <form className={styles["form"]}>
                  <div className="row d-flex">
                    <div className={`col-md-6 col-12`}>
                      <div className={styles.control}>
                        <input
                          type="text"
                          placeholder="First Name"
                          required
                          id="title"
                        />
                      </div>
                    </div>
                    <div className={`col-md-6 col-12`}>
                      <div className={styles.control}>
                        <input
                          type="text"
                          placeholder="Last Name"
                          required
                          id="title"
                        />
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
                    <div className={`col-md-6 col-12`}>
                      <div className={styles.control}>
                        <input
                          type="text"
                          placeholder="Phone"
                          required
                          id="title"
                        />
                      </div>
                    </div>
                    <div className={styles.action}>
                      <Button content="Submit Form" style={styles.button} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className={`col-xl-5 col-lg-4 col-md-12 d-flex   ${styles.left}`}
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
    </>
  );
};

export default InfoSessionForm;
