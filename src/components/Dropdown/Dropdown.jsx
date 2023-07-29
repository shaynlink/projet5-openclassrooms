import { useState } from 'react';

import './Dropdown.scss';

export default function Dropdown({ title, content }) {
    const [active, setActive] = useState('');

    if (!title) {
        throw new Error('Dropdown component must have a title prop');
    }

    if (!content) {
        throw new Error('Dropdown component must have a content prop');
    }

    function handleDropdownClick() {
        if (active === '') {
            setActive('active');
        } else {
            setActive('');
        }
    }

    return (
        <>
            <div className={`dropdown ${active}`} onClick={handleDropdownClick}>
                <div className="dropdown-header">
                    <p>{title}</p>
                    <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2897 0.789661C11.9591 0.120242 13.0462 0.120242 13.7157 0.789661L23.9979 11.0719C24.6674 11.7414 24.6674 12.8285 23.9979 13.4979C23.3285 14.1673 22.2414 14.1673 21.572 13.4979L12.5 4.42595L3.42804 13.4926C2.75862 14.162 1.67148 14.162 1.00206 13.4926C0.332646 12.8231 0.332646 11.736 1.00206 11.0666L11.2843 0.784306L11.2897 0.789661Z" fill="white"/>
                    </svg>
                </div>
                <div className="dropdown-content">
                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}