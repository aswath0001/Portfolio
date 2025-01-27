import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';
export const About = () => {
  return (
   <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img src={getImageUrl("Aswath.png")} alt = "my image" className={styles.aboutImage}/>
    <ul className={styles.aboutItem}>
      <li className={styles.aboutItem}>
        <img src = {getImageUrl("frontend.png")} alt = "frontend"/>
      <div className={styles.aboutItemsText}>
        <h3>Frontend Developer</h3>
        <p>Frontend developer with knowledge in building responsive and optimized websites</p>
      </div>
      </li>
      <li className={styles.aboutItem}>
        <img src = {getImageUrl("backend developer.png")} alt = "backend"/>
      <div className={styles.aboutItemsText}>
        <h3>Backend Developer</h3>
        <p>Backend developer with knowledge in developing databases using Java and SQL</p>
      </div>
      </li>
    </ul>
   </div>
    </section>
  )
}
