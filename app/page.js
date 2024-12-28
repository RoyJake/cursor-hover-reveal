'use client'
import styles from './page.module.css'
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition';

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p className={styles.p} onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
        This project was built with Framer Motion and Next.js. Stay tuned for more!
        </p>
      </motion.div>


      <div className={styles.body}>
        <p className={styles.p}>Hi, my name is <span className={styles.span}>Roy Jake</span>. <br/>I build web ideas from front to back.</p>
      </div>
  

    </main>
  )
}
