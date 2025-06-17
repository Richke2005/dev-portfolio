import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './blogCard.module.css';

export default function BlogCard({ title, description, image, link }) {
    return(
        <Link href={{ pathname: link}}>
            <div className={styles.blogCard}>
                <Image src={image} alt={title} className={styles.blogImage} />
                <h3 className={styles.blogTitle}>{title}</h3>
                <p className={styles.blogDescription}>{description}</p>
            </div>
        </Link>
    )
}