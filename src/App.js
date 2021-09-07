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
				`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${input}&image_type=image&pretty=true/`
			)
			.then((response) => {
				setImageGallery(response.data.hits);
				console.log(response.data.hits);
				console.log(imageGallery);
			});
	}, [input]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setInput(e.target.value);
	};

	const handleChange = (e) => {
		setInput(e.target.value);
		console.log(e.target.value);
	};

	return (
		<div>
			<form className="px - 4" onSubmit={handleSubmit}>
				<p>Enter search:</p>
				<input
					className="border-2 border-gray-800"
					type="text"
					value={input}
					onChange={handleChange}
				/>
			</form>
			<div className="grid grid-cols-3 gap-4">
				{imageGallery.map((image) => (
					<Card key={image.id} image={image} />
				))}
			</div>
		</div>
	);
}

export default App;
