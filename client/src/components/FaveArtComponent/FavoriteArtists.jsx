import React from 'react';
import Artist from './Artist.jsx';
import artistData from './artist-test-data.js';

const FavoriteArtists = () => {
	return (
		<>
			Placeholder for album image
			{artistData.map((artist) => (
				<span>{artist.name}</span>
			))}
		</>
	);
};

export default FavoriteArtists;
