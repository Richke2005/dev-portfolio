"use client";
import React from 'react';
import styles from './technologieCard.module.css';
import CustomLinearLabel from '@/components/linearProgress/customLinearLabel.jsx';
import PropTypes from 'prop-types';

const TechnologieCard = ({ name, iconImage, knowledge}) => {
    const [windowWidth, setWindowWidth] = React.useState({
            width: undefined,
            height: undefined
        });
    
        React.useEffect(()=>{
            function handleResize() {
                setWindowWidth({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            handleResize(); // Set initial size
    
            window.addEventListener("resize", handleResize);
        }, []);

    return (
    <div className={styles.technologieCard}>
        {iconImage}
        <div style={{marginLeft: "10px"}}>
            <h3>{name}</h3>
            <div className={styles.progressContainer} style={{width: windowWidth.width < 800 ? 5/6 * windowWidth.width : "250px"}}>
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