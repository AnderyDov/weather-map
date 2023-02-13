import withLayout from '../Layout/Layout';
import styles from '../styles/Home.module.css';

function Home() {
    return (
        <div className={styles.home}>
            weather-map
            <button>click</button>
            <a href='#'>LINK</a>
        </div>
    );
}
export default withLayout(Home);
