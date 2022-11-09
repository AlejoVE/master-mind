import { Navigate, Route, Routes } from 'react-router-dom';
import GamePage from '../components/GamePage';
import StartPage from '../components/StartPage';
import GameProvider from '../context/GameProvider';

function AppRouter() {
	return (
		<GameProvider>
			<Routes>
				<Route path='game' element={<GamePage />} />
				<Route path='start' element={<StartPage />} />
				<Route path='/' element={<Navigate to='/start' />} />
			</Routes>
		</GameProvider>
	);
}

export default AppRouter;
