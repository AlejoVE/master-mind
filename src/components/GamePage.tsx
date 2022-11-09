import AvailableColors from './AvailableColors';
import Row from './Row';
import ShowCode from './ShowCode';
import { useContext, useEffect, useState } from 'react';
import { GameContext } from '../context/gameContext';

function GamePage() {
	const { score, gameRows, setAvailableRows } = useContext(GameContext);
	const gameRowsArr = Array.from(Array(gameRows).keys());
	const [gameOver, setGameOver] = useState<boolean>(false);

	const handleGlobalColor = () => {
		setGameOver(true);
	};
	useEffect(() => {
		setAvailableRows(gameRows);
	}, [gameRows, setAvailableRows]);

	return (
		<>
			<h2>SCORE: {score}</h2>
			<div className='page-content'>
				<ShowCode />
				<>
					{gameRowsArr.map((row, i) => (
						<Row handleGlobalColor={handleGlobalColor} key={i} />
					))}
				</>
				<AvailableColors />
			</div>
		</>
	);
}

export default GamePage;
