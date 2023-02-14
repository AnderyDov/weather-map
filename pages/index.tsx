import withLayout from '../Layout/Layout';
import styles from '../styles/Home.module.css';
import { Button } from '../components';

function Home() {
    async function handleFetch() {
        let weather = await fetch('/api/getweather');
        weather = await weather.json();
        console.log(weather);
    }

    return (
        <div className={styles.home}>
            <Button onClick={handleFetch}>Показать</Button>
        </div>
    );
}
export default withLayout(Home);
