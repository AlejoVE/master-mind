import AvailableColors from './AvailableColors';
import Row from './Row';
import ShowCode from './ShowCode';

function GamePage() {
	return (
		<div className='page-content'>
			{/* Size in rem */}
			<ShowCode />
			<Row id='row-1' />
			<Row id='row-2' />
			<Row id='row-3' />
			<Row id='row-4' />
			<Row id='row-5' />
			<AvailableColors />
		</div>
	);
}

export default GamePage;
