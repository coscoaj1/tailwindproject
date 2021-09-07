import { React, useState } from 'react';

export default function ImageSearch({ searchText }) {
	const [text, setText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		searchText(text);
		console.log(text);
		console.log('clicked');
	};

	return (
		<div>
			<form className="px - 4" onSubmit={handleSubmit}>
				<p>Enter search:</p>
				<input
					className="border-2 border-gray-800"
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button type="submit">submit</button>
			</form>
		</div>
	);
}
