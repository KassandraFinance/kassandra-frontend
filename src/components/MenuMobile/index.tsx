import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';

import Burger from './Burger';
import Menu from './Menu';

import styles from './menu-mobile.module.scss';

const MenuMobile = () => {

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const openMenu = React.useCallback(
    (option) => {
      document.body.className = option ? 'menu-open' : '';
      setOpen(option);
    },
    [setOpen],
  );

  useOnClickOutside(menuRef, () => {
    document.body.className = '';
    setOpen(false);
  });

  return (
    <div className={styles['class-menu-container']}>
      <Burger />
      <Menu />
    </div>
  );
};

export default MenuMobile
