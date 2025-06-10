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
export default function LinkButton({name = "Button", color = "primary", shape = "contained", href, children}){
  return <Tooltip title={name}>
      <a
        href={href}
        className={`${styles[color]} ${styles[shape]}`}
        style={{ color: color }}
      >
        {children}
      </a>
  </Tooltip>
}

LinkButton.propTypes = {
  name: PropTypes.string,
  shape: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node
};