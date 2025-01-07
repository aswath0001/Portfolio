import React from 'react';
import styles from "./Education.module.css";
import { getImageUrl } from '../../utils';
export const Education = () => {
    return (
      <section className={styles.container} id="education">
        <h2 className={styles.title}>Education</h2>
        <div className={styles.content}>
          <ul className={styles.aboutItem}>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("school.png")} alt="school logo" />
              <div className={styles.aboutItemsText}>
                <h3>SSLC <h4>2017-2018</h4></h3>
                <h3>Percentage:82.6%</h3>
                <p>K.A.B.D.Matric hr Sec School Painkulam-629173</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("school.png")} alt="school logo" />
              <div className={styles.aboutItemsText}>
              <h3>HSC<h4>2019-2020</h4></h3>
                <h3>Percentage:76%</h3>
                <p>K.A.B.D.Matric hr Sec School Painkulam-629173</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("college.png")} alt="college logo" />
              <div className={styles.aboutItemsText}>
              <h3>Bachelor of Engineering (CSE)<h4>2020-2024</h4></h3>
                <h3>CGPA:7.5</h3>
                <p>Dr Sivanthi Aditanar College of Engineering Tiruchendur-628215</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  