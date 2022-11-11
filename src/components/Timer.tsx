import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { GameContext } from '../context/gameContext';
import { triggerGameOverModal } from '../helpers/helpers';

function Timer() {
	const [minutes, setMinutes] = useState<number>(2);
	const [seconds, setSeconds] = useState<number>(0);
	const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
	const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
	const { startTimer, setAvailableRows, setGameOver, setStartTimer } =
		useContext(GameContext);

	const interval = setTimeout(() => {
		clearInterval(interval);

		if (!startTimer) return;

		if (minutes === 0 && seconds === 0) {
			setStartTimer(false);
			triggerGameOverModal();
			setAvailableRows(0);
			setGameOver(true);
			return;
		}

		if (seconds === 0) {
			setMinutes(minutes - 1);
			setSeconds(59);
			return;
		}

		setSeconds(seconds - 1);
	}, 1000);
	return (
		<div>
			<h1>
				{timerMinutes} : {timerSeconds}
			</h1>
		</div>
	);
}

export default Timer;
