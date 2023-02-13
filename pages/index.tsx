import withLayout from '../Layout/Layout';
import styles from '../styles/Home.module.css';
import { Button } from '../components';

function Home() {
    return (
        <div className={styles.home}>
            <Button>Показать</Button>
        </div>
    );
}
export default withLayout(Home);
