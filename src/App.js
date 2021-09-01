import Navbar from './components/Navbar';
import { HashRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';

function App() {
	return (
		<div>
			<HashRouter>
				<Navbar />
			</HashRouter>
		</div>
	);
}

export default App;

