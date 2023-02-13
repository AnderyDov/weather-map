import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import SearchIcon from './search.svg';
import { useState } from 'react';

export function Search({ ...props }: SearchProps): JSX.Element {
    const [text, setText] = useState<string>('');

    return (
        <div className={styles.wrap}>
            <input
                type='text'
                {...props}
                className={styles.search}
                placeholder='Искать населённый пункт'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <SearchIcon
                className={styles.icon}
                onClick={() => console.log(text)}
            />
        </div>
    );
}
