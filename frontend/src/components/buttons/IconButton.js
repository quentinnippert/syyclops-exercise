import './index.css';

const IconButton = ({
    icon,
    onClick,
    alt = '',
    size = 'btn-md',
    iconSize = 'ic-md',
    className = '',
}) => {

    return (
        <button className={`icon-button ${size} ${className}`} onClick={onClick}>
            <img src={icon} alt={alt} className={`icon ${iconSize}`} />
        </button>
    );
}

export default IconButton;