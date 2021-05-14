import React from 'react';

import styles from './burger.module.scss';

const Burger = () =>

  // function handleClickMenu() {
  //   setOpen(!open);
  //   setIsBackgroundFixed(!isBackgroundFixed);
  // }

   (
    <div
    className={styles.burger}
    aria-label="Menu"
      title="Menu"
    >
      <div />
      <div />
      <div />
    </div>
  )
;

export default Burger
