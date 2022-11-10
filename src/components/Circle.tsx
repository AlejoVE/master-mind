type ButtonProps = {
	size: string;
	color?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	gameOver?: boolean;
};

function Circle(props: ButtonProps) {
	return (
		<button
			disabled={props.disabled}
			className='button'
			onClick={props.onClick}
			data-color={props.color}
			style={{
				backgroundColor: `${`${props.color || '#53483F'}`}`,
				width: `${props.size}rem`,
				minWidth: `${props.size}rem`,
				height: `${props.size}rem`,
				minHeight: `${props.size}rem`,
			}}
		></button>
	);
}

export default Circle;
