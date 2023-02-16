import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import { Search } from '../../components';
import cn from 'classnames';
import { Error } from '../../components';
import { useRecoilValue } from 'recoil';
import { errorState } from '../../store/atoms';

export default function Header({
    className,
    ...props
}: HeaderProps): JSX.Element {
    const error = useRecoilValue(errorState);

    return (
        <div className={cn(className, styles.header)} {...props}>
            <Search />
            <Error>{error}</Error>
        </div>
    );
}
