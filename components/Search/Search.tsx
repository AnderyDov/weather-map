import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import SearchIcon from './search.svg';
import { useState } from 'react';

export function Search({ ...props }: SearchProps): JSX.Element {
    const [text, setText] = useState<string>('');

    function handleSearch() {
        console.log(text.trim());
    }

    function handleSearchEnter(e) {
        if (e.code === 'Enter' && text !== '') {
            console.log(text.trim());
        }
    }

    return (
        <div className={styles.wrap}>
            <input
                type='text'
                {...props}
                className={styles.search}
                placeholder='Искать населённый пункт'
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleSearchEnter}
            />
            <SearchIcon className={styles.icon} onClick={handleSearch} />
        </div>
    );
}
