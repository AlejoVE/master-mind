import { changeButtonColor } from '../helpers/helpers';
import useRef from 'react';
import { useContext } from 'react';
import { GameContext } from '../context/gameContext';

type ButtonProps = {
	size: string;
	color?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	gameOver?: boolean;
	className?: string;
};

function Circle(props: ButtonProps) {
	const { gameOver } = useContext(GameContext);
	const button = document.querySelector('button') as HTMLButtonElement;

	if (gameOver) {
		if (button) {
			button.style.backgroundColor = 'green';
		}
	}

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
