import { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/Card';
import axios from 'axios';

function App() {
	const [input, setInput] = useState('');
	const [imageGallery, setImageGallery] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${input}&image_type=illustration&pretty=true/`
			)
			.then((response) => {
				setImageGallery(response.data);
				console.log(response.data);
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setInput(e.target.value);
	};

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	return (
		<div className="flex items-center justify-center">
			<form className="px - 4" onSubmit={handleSubmit}>
				<p>Enter search:</p>
				<input
					className="border-2 border-gray-800"
					type="text"
					value={input}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
}

export default App;
