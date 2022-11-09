type ButtonProps = {
	size: string;
	color?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	gameOver?: boolean;
};

function Circle(props: ButtonProps) {
	return (
		<>
			{props.gameOver ? (
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
				>
					GAME OVER
				</button>
			) : (
				<button
					disabled={props.disabled}
					className='button'
					onClick={props.onClick}
					data-color={props.color}
					style={{
						backgroundColor: `${
							props.gameOver ? '#53483F' : `${props.color || '#53483F'}`
						}`,
						width: `${props.size}rem`,
						minWidth: `${props.size}rem`,
						height: `${props.size}rem`,
						minHeight: `${props.size}rem`,
					}}
				>
					PLAYING
				</button>
			)}
		</>
	);
}

export default Circle;
