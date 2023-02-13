import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import Telegram from '../icons/telegram.svg';
import Git from '../icons/git.svg';
import Email from '../icons/email.svg';
import cn from 'classnames';

export default function Footer({ className, ...props }: FooterProps) {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://t.me/dovbanAndrey'
            >
                <Telegram className={styles.icons} />
            </a>
            <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://github.com/AnderyDov?tab=repositories'
            >
                <Git className={styles.icons} />
            </a>
            <a
                rel='noreferrer noopener'
                href='mailto:dovban.andreyy@rambler.ru'
                target='_blank'
            >
                <Email className={styles.icons} />
            </a>
        </footer>
    );
}
