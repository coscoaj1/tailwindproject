import React from 'react';

export default function Card({ image }) {
	const tags = image.tags.split(',');

	return (
		<div className="max-w-sm rounded overflow-hidden shadow-xl">
			<img className="w-full" src={image.webformatURL} alt="Display" />
			<div className="px-6 py-4">
				<div className="font-bold text-indigo-500 text-xl mb-2">
					Photo by {image.user}
				</div>
				<ul>
					<li>
						likes: <strong>{image.likes}</strong>
					</li>
					<li>
						views: <strong>{image.views}</strong>
					</li>
					<li>
						downloads: <strong>{image.downloads}</strong>
					</li>
				</ul>
			</div>
			<div className="px-6 py-4">
				{tags.map((item) => (
					<span
						className="inline-block bg-gray-200 rounded-full px-3 py-1 
        text-sm font-semibold text-gray-700 mr-2"
					>
						#{item}
					</span>
				))}
			</div>
		</div>
	);
}
