import withLayout from '../Layout/Layout';
import styles from '../styles/Home.module.css';

function Home() {
    return <div className={styles.home}>weather-map</div>;
}
export default withLayout(Home);
