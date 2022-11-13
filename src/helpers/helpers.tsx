import Swal from 'sweetalert';

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

	//  Fixed bug, if user select 4 tines the sane color, this will only show 1 in the grid if the color if in the code.
	const filterColors = Array.from(new Set(rowColors));
	console.log({ currentCode });
	for (let i = 0; i < filterColors.length; i++) {
		if (currentCode.includes(rowColors[i] as string)) {
			const randomIndex: number = Math.floor(
				Math.random() * availablePositions.length
			);
			const value = availablePositions[randomIndex];
			availablePositions.splice(randomIndex, 1);
			if (currentCode[i] === rowColors[i]) {
				// gridChildren &&
				if (gridChildren) {
					(gridChildren[value] as HTMLButtonElement).classList.remove(
						'check'
					);
					(gridChildren[value] as HTMLButtonElement).classList.add(
						'green'
					);
				}
			} else {
				if (gridChildren) {
					(gridChildren[value] as HTMLButtonElement).classList.remove(
						'check'
					);
					(gridChildren[value] as HTMLButtonElement).classList.add(
						'white'
					);
				}
			}
		}
	}

	if (currentCode.toString() === rowColors.toString()) {
		Swal('YOU WON!', 'Congratulations', 'success');
		return true;
	}
};

export const changeButtonColor = (
	e: React.MouseEvent<HTMLButtonElement>,
	color: string
) => {
	(e.target as HTMLButtonElement).style.backgroundColor = color;
	(e.target as HTMLButtonElement).setAttribute('data-color', color);
};

export const getRowColors = (rowEl: React.RefObject<HTMLDivElement>) => {
	const rowChildren = rowEl.current?.childNodes;
	const rowColors: (string | null)[] = [];

	if (rowChildren) {
		// The current colors in the row (default and user colors), if user did not put a color, the data-color attribute will be null
		rowChildren.forEach((button) => {
			const color = (button as HTMLButtonElement).getAttribute('data-color');
			rowColors.push(color);
		});
	}

	const filteredColors = rowColors.filter((color) => color !== null);

	return filteredColors;
};

export const triggerGameOverModal = () => {
	Swal('Game over', '', 'error');
};
