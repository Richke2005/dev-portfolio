import React from "react";
import styles from "./linkGroup.module.css";
import LinkButton from "@/components/buttons/linkButton";
import PropTypes from "prop-types";

export default function LinkGroup({ links }) {
  return (
    <ul className={styles.linkGroup}>
      {links.map((link, index) => (
        <li key={index} className={styles.linkItem}>
          <LinkButton href={link.url} name={link.name} shape="transparent">
            {<link.icon/>}
          </LinkButton>
        </li>
      ))}
    </ul>
  );
}

LinkGroup.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired
    })
  ).isRequired
};
LinkGroup.defaultProps = {
  links: []
};