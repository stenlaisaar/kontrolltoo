const Button = ({ textOnly, onClick, children }) => {
    const cssButton = textOnly ? "text-button" : "button";

    return (
        <button className={cssButton} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;