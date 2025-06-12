'use client'
import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';
import { Tooltip } from '@mui/material';

/**
 * Button component renders a customizable button with icon support.
 *
 * @param {Object} props - Component props.
 * @param {string} props.name - The name of the button (not currently used).
 * @param {string} props.shape - The shape style of the button (contained, outlined, outdashed and transparent).
 * @param {string} props.color - The color style of the button (primary, secondary, thirdary, sucess).
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {boolean} props.isActive - Initial active state of the button.
 * @param {React.ReactNode} props.children - The content (usually an icon) to display inside the button.
 * @returns {JSX.Element} The rendered IconButton component.
 */
export default function Button({name = "Button", color = "primary", shape = "contained", disabled = false, isActive = false, style, children}){
  const [stateButton, setIsActive] = React.useState(isActive);

  function handleClick() {
    setIsActive(!stateButton);
  }

  return <Tooltip title={name}>
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`${styles[color]} ${styles[shape]} ${stateButton ? styles.active : ''}`}
        style={style}
      >
        {children}
      </button>
  </Tooltip>
}

Button.propTypes = {
  name: PropTypes.string,
  shape: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  children: PropTypes.node
};