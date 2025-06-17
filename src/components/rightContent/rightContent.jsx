import styles from './rightContent.module.css';

export default function RightContent({children}) {
    return(
        <div className={styles.rightContent}>
            {children}
        </div>
    )
}