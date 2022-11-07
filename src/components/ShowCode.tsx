import { useContext } from 'react';
import Circle from './Circle';
import { GameContext } from '../context/gameContext';

function ShowCode() {
	const { currentCode, gameOver } = useContext(GameContext);

	return (
		<div>
			{gameOver ? (
				currentCode.map((color) => {
					return <Circle disabled={true} color={color} size='4' />;
				})
			) : (
				<div>
					<Circle disabled={true} size='4' />;
					<Circle disabled={true} size='4' />;
					<Circle disabled={true} size='4' />;
					<Circle disabled={true} size='4' />;
				</div>
			)}
		</div>
	);
}

export default ShowCode;
