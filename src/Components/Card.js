import React from 'react';

export default function Card({ ok }) {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-xl">
			<img className="w-full" src={ok} alt="Display" />
			<div className="px-6 py-4">
				<div className="font-bold text-indigo-500 text-xl mb-2">
					Orange Kitty
				</div>
				<p className=" text-gray-700 text-base">
					When i’m not engaged in terrorism i switch to yakking up hairballs on
					the carpet.
					<span></span>😜
				</p>
			</div>
			<div className="px-6 py-4">
				<span
					className="inline-block bg-gray-200 rounded-full px-3 py-1 
        text-sm font-semibold text-gray-700 mr-2"
				>
					#OK
				</span>
				<span
					className="inline-block bg-gray-200 rounded-full px-3 py-1 
        text-sm font-semibold text-gray-700 mr-2"
				>
					#Al Qaeda
				</span>
				<span
					className="inline-block bg-gray-200 rounded-full px-3 py-1 
        text-sm font-semibold text-gray-700 mt-2 ml-20"
				>
					#Public Menace
				</span>
			</div>
		</div>
	);
}
