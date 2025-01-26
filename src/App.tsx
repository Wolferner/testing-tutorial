import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [data, setData] = useState<string>('');
	const [toggle, setToggle] = useState<boolean>(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setData('Zig');
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	const toggleHandler = () => setToggle(prev => !prev);

	return (
		<div>
			{toggle && <div data-testid='toggle-div'>Toggle is on</div>}
			{data !== '' && <div style={{ color: 'red' }}>{data}</div>}
			<h1>Hello world!</h1>
			<input type='text' placeholder='Type something here' />
			<button onClick={toggleHandler} data-testid='toggle-btn'>
				Submit
			</button>
		</div>
	);
}

export default App;
