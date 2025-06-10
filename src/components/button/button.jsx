'use client'
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Icon } from '@mui/material';
import styles from './button.module.css';


export default function Button({disabled = false, isActive, children}){
  const [stateButton, setIsActive] = React.useState(isActive);

  function handleClick() {
    setIsActive(!stateButton);
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={stateButton ? styles.active : styles.button}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.instanceOf(Icon),
  onClick: PropTypes.func.isRequired
};