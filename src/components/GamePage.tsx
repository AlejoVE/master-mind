import AvailableColors from './AvailableColors';
import Row from './Row';
import ShowCode from './ShowCode';
import { useContext, useEffect } from 'react';
import { GameContext } from '../context/gameContext';
import { Link } from 'react-router-dom';

function GamePage() {
	const { gameRows, setAvailableRows, gameOver } = useContext(GameContext);
	const gameRowsArr = Array.from(Array(gameRows).keys());

	useEffect(() => {
		setAvailableRows(gameRows);
	}, [gameRows, setAvailableRows]);

	const reloadPage = () => {
		window.location.reload();
	};

	return (
		<>
			<Link to={'/start'}>Home</Link>
			<div className='page-content'>
				{gameOver && (
					<button className='button' onClick={reloadPage}>
						NEW GAME
					</button>
				)}
				<ShowCode />
				{gameRowsArr.map((row, i) => (
					<Row key={i} />
				))}
				<AvailableColors />
			</div>
		</>
	);
}

export default GamePage;
