import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import { Search } from '../../components';
import cn from 'classnames';

export default function Header({
    className,
    ...props
}: HeaderProps): JSX.Element {
    return (
        <div className={cn(className, styles.header)} {...props}>
            <Search />
        </div>
    );
}
