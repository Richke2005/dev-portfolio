import styles from './article.module.css';
import Image from 'next/image';

export default function Article({ title, date, description, image, content }) {
    return (
        <article className={styles.article}>
            <Image src={image} alt={title} className={styles.articleImage} />
            <div className={styles.articleHeader}>
                <h1>{title}</h1>
                <p>{date}</p>
            </div>
            <div
                className={styles.articleContent}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </article>
    );
}