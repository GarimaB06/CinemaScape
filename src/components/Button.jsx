const Button = ({
	className = "",
	label = "",
	onClick,
	ariaLabel = "",
	tabIndex,
	children,
}) => {
	return (
		<button
			type="button"
			onClick={onClick}
			aria-label={ariaLabel}
			tabIndex={tabIndex}
			className={`custom-button ${className}`}
		>
			{label}
			{children}
		</button>
	);
};

export default Button;
