import Swal from 'sweetalert';
import { Colors } from '../types/types';

export const generateRandomCode = (colors: string[]) => {
	const randomCode: string[] = [];

	do {
		const randomIndex: number = Math.floor(Math.random() * colors.length);
		const color: string = colors[randomIndex];

		// Duplicates not allowed
		if (!randomCode.includes(color)) {
			randomCode.push(color);
		}
	} while (randomCode.length < 4);

	return randomCode;
};

export const checkAnswers = (
	refRowEl: React.RefObject<HTMLDivElement>,
	refGridEl: React.RefObject<HTMLDivElement>,
	currentCode: string[]
) => {
	const rowChildren = refRowEl.current?.childNodes;
	const gridChildren = refGridEl.current?.childNodes;
	const rowColors: (string | null)[] = [];

	// Get all row's colors
	rowChildren?.forEach((button) => {
		const color = (button as HTMLButtonElement).getAttribute('data-color');
		rowColors.push(color);
	});

	// This will be use to select a random space in the grid of 4 small buttons on the right
	const availablePositions = [0, 1, 2, 3];
	console.log({ currentCode });
	for (let i = 0; i < rowColors.length; i++) {
		if (currentCode.includes(rowColors[i] as string)) {
			const randomIndex: number = Math.floor(
				Math.random() * availablePositions.length
			);
			const value = availablePositions[randomIndex];
			availablePositions.splice(randomIndex, 1);
			if (currentCode[i] === rowColors[i]) {
				if (gridChildren) {
					(
						gridChildren[value] as HTMLButtonElement
					).style.backgroundColor = Colors.YELLOW;
				}
			} else {
				if (gridChildren) {
					(
						gridChildren[value] as HTMLButtonElement
					).style.backgroundColor = Colors.PURPLE;
				}
			}
		}
	}

	if (currentCode.toString() === rowColors.toString()) {
		Swal('YOU WON!', 'Congratulations', 'success');
		return true;
	}
};
