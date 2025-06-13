"use client";
import React from "react";
import styles from "./section.module.css";
import PropTypes from "prop-types";


const Section = ({ title, children, style, isAnimated, className }) => {
    const [activeSection, setActiveSection] = React.useState(styles.sections);
    const childRef = React.useRef();

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true }); // Anexar o ouvinte de evento
        // Remover o ouvinte de evento no desmontagem do componente (limpeza)
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    const handleScroll = () => {
        const top = window.scrollY // Obter a posição vertical da rolagem
        const sectionPos = childRef.current.offsetTop;
        if(top >= sectionPos-200){
            setActiveSection(styles.activeSection)
        }

    };

    function splitTitle() {
        const arrayWords = title.split(" ");
        const lastWord = arrayWords.pop();
        const newTitle = arrayWords.join(" ");
        return { newTitle, lastWord };
    }

    if (!title) {
        return (
            <section className={isAnimated ? activeSection : ''} style={style} ref={childRef}>
                {children}
            </section>
        );
    }
    // Split the title into words and extract the last word
    const { newTitle, lastWord } = splitTitle();

    return (
        <section className={isAnimated ? activeSection : ''} style={style} ref={childRef}>
            {title && <h2 className={styles.sectionTitle}>{newTitle} <strong style={{color: "var(--primary)"}}>{lastWord}</strong></h2>}
            {children}
        </section>
    );


}

Section.defaultProps = {
    style: {},
    className: ""
};
Section.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
    className: PropTypes.string
};

export default Section;