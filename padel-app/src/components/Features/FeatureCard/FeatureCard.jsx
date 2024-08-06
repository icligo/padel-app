import styles from './FeatureCard.module.scss';

// eslint-disable-next-line react/prop-types
const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default FeatureCard;
