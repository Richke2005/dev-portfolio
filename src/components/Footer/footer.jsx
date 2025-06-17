import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '../buttons/linkButton.jsx';
import GitHubIcon from '../../../public/images/svgIcons/github.svg';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <p style={{ margin: 0 }}>© {new Date().getFullYear()} <strong style={{color: "var(--primary)"}}>Richard Carvalho.</strong> All rights reserved,</p>
                <p style={{ margin: 0 }}>Made with ❤️ using React and Next.js</p>
            </div>
            
            <div>
                <Link href={"https://github.com/Richke2005/dev-portfolio"}>
                    <Image src={GitHubIcon} alt="GitHub Do Portifólio" width={30} height={30} />
                </Link>
            </div>
        </footer>
    );
}