import { useState } from 'react';
import TopCard from '../TopCard/TopCard';

import './Caroussel.scss';

export default function Caroussel({ images, alt = '' }) {
    const [index, setIndex] = useState(0);
    const isMultiple = images.length;

    function getCarousselPosition(i) {
        if (i === index) return 'current';
        else if (i < index) return 'left';
        else return 'right';
    }

    function handleChangeIndex(direction) {
        if (direction === 'left') {
            if (index === 0) setIndex(isMultiple - 1);
            else setIndex(index - 1);
        } else {
            if (index === isMultiple - 1) setIndex(0);
            else setIndex(index + 1);
        }
    }

    return (
        <>
            <div className="caroussel">
                {isMultiple && (
                    <div className="direction">
                        <svg onClick={() => handleChangeIndex('left')} width="96" height="120" viewBox="0 0 96 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z" fill="white"/>
                        </svg>

                        <svg onClick={() => handleChangeIndex('right')} width="96" height="121" viewBox="0 0 96 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z" fill="white"/>
                        </svg>
                    </div>
                )}

                {images.map((image, i) => (
                    <TopCard
                        key={image}
                        src={image}
                        alt={alt.replace('{{index}}', index + 1)}
                        datas={{'data-position': getCarousselPosition(i)}}
                    />
                ))}
            </div>
        </>
    )
}