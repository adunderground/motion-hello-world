import React from 'react';
import { motion } from 'motion/react';

import styles from './Toggle.module.css';

function Toggle({ value, onChange, ...delegated }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      className={styles.wrapper}
      onClick={() => onChange(!value)}
      {...delegated}
    >
      <motion.span
        initial={false}
        animate={{
          x: value ? '100%' : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 225,
          damping: 30,
        }}
        className={styles.ball}
      />
    </button>
  );
}

export default Toggle;
