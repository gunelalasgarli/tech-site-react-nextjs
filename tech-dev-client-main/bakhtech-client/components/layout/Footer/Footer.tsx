import type { NextPage } from 'next'
import styles from './Footer.module.scss'

const Footer: NextPage = () => {
    return (
        <>
            <div className={styles["footer"]}>
                <div className={styles.backgroundimg}>
                <img src="https://validthemes.online/themeforest/techa/assets/img/map.svg" alt="" />

                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className={styles.about}>
                                <img src="https://validthemes.online/themeforest/techa/assets/img/logo-light.png" alt="" />
                                <p>Happen active county. Winding for the morning am shyness evident to poor. Garrets because elderly new.</p>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <div className={styles.links}>
                                <h2 className={styles.linkHead}>Company</h2>
                                <ul className={styles.linkList}>
                                    <li><a>About Us</a></li>
                                    <li><a>Case Studies</a></li>
                                    <li><a>Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <div className={styles.links}>
                                <h2 className={styles.linkHead}>Solutions</h2>
                                <ul className={styles.linkList}>
                                    <li><a>Example</a></li>
                                    <li><a>Example</a></li>
                                    <li><a>Example</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className={styles.links}>
                                <h2 className={styles.linkHead}>Contact</h2>
                                <ul className={styles.linkList}>
                                    <li>
                                        <strong>Address:</strong>
                                        <br />
                                        <a>USA example address</a>
                                    </li>
                                    <li>
                                        <strong>Email:</strong>
                                        <br />
                                        <a href='example@gmail.com'>example@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
<hr />
                <div className={styles["footer-bottom"]}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                            <p className={styles.copyright}>Copyright © 2022</p>
                            </div> 
                            <div className="col-lg-6">
                            <ul className={styles.bottomList}>
                                <li><a href="">Terms</a></li>
                                <li><a href="">Privacy</a></li>
                                <li><a href="">Support</a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
