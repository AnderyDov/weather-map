import { FunctionComponent } from 'react';
// import Footer from './Footer/Footer';
// import Header from './Header/Header';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';
// import cn from 'classnames';

function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <div className={styles.layout}>
            {/* <Header className={styles.header} /> */}
            <div className={styles.content} tabIndex={0}>
                {children}
            </div>
            {/* <Footer className={styles.footer} /> */}
        </div>
    );
}

export default function withLayout<T extends Record<string, unknown>>(
    Component: FunctionComponent<T>,
) {
    return function withLauoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
}
