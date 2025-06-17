import React from 'react';
import styles from './technologieCard.module.css';
import Image from 'next/image';
import CustomLinearLabel from '@/components/linearProgress/customLinearLabel.jsx';
import PropTypes from 'prop-types';

const TechnologieCard = ({ name, Icon, knowledge}) => {
    return (
    <div className={styles.technologieCard}>
        <Image src={Icon} alt={`Image: ${name}`} style={{width: 50, height: 50}}/>
        <div style={{marginLeft: "10px"}}>
            <h3>{name}</h3>
            <div className={styles.progressContainer}>
                <CustomLinearLabel
                    finalvalue={knowledge}
                />
            </div>
        </div>
    </div>
  );
}

TechnologieCard.propTypes = {
  name: PropTypes.string.isRequired,
  iconImage: PropTypes.element.isRequired,
  knowledge: PropTypes.number.isRequired,
};

export default TechnologieCard;