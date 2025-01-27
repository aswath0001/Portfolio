
import React from 'react';
import Styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>Hi, I'm Aswath</h1>
        <p className={Styles.description}>
          I'm a full-stack developer with 6 months of experience. Reach out if you'd like to learn more!
        </p>
        <a href="#contact" className={Styles.contactBtn}>Contact me</a> {/* Updated link */}
      </div>
      <img
        src={getImageUrl("aswath circle.png")}
        alt="Image of me"
        className={Styles.image}
      />
      <div className={Styles.topBlur} />
      <div className={Styles.bottomBlur} />
    </section>
  );
};
