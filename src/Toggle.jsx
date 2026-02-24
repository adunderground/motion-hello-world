import React from 'react';
import { motion } from 'motion/react';

import styles from './Toggle.module.css';

function Toggle({
  value,
  onChange,
  ...delegated
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      className={styles.wrapper}
      onClick={() => onChange(!value)}
      {...delegated}
    >
      <span
        className={styles.ball}
        style={{
          transition: 'transform 300ms',
          transform: `translateX(${
            value ? '100%' : '0%'
          })`,
        }}
      />
    </button>
  );
}

export default Toggle;