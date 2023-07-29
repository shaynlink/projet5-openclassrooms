import './TopCard.scss';

export default function TopCard({ src, alt, title, brightness, datas }) {
    const imgStyle = {};
    
    if (brightness) {
        imgStyle.filter = `brightness(${brightness})`;
    };
    
    if (!datas) {
        datas = {};
    }

    return (
        <div className="top-card" {...datas}>
            <img
                src={src}
                alt={alt}
                style={imgStyle}
            />
            {title && <h1>{title}</h1>}
        </div>
    )
}