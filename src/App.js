import { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/Card';
import axios from 'axios';
import ImageSearch from './Components/ImageSearch';
import spinner from './assets/Spinner-1s-200px.svg';

function App() {
	const [imageGallery, setImageGallery] = useState([]);
	const [isLoading, setIsLoading] = useState([false]);
	const [term, setTerm] = useState('');

	useEffect(() => {
		axios
			.get(
				`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=image&pretty=true/`
			)
			.then((response) => {
				setImageGallery(response.data.hits);
				setIsLoading(true);
				setTimeout(() => {
					setIsLoading(false);
				}, 800);
			});
	}, [term]);

	return (
		<div>
			<ImageSearch searchText={(text) => setTerm(text)} />

			{imageGallery.length === 0 && (
				<h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
			)}

			{isLoading ? (
				<img
					src={spinner}
					className="text-5xl text-center mx-auto mt-32"
					alt="loading animation"
				/>
			) : (
				<div className="grid grid-cols-3 gap-4">
					{imageGallery.map((image) => (
						<Card key={image.id} image={image} />
					))}
				</div>
			)}
		</div>
	);
}

export default App;
