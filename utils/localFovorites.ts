const toggleFavorites = (id: number) => {
	let favorite: number[] = JSON.parse(
		localStorage.getItem('favorite') || '[]'
	);

	if (favorite.includes(id)) {
		favorite = favorite.filter(pokeId => pokeId !== id);
	} else {
		favorite.push(id);
	}
	localStorage.setItem('favorite', JSON.stringify(favorite));
};

const existFavorites = (id: number): boolean => {
	if (typeof window === 'undefined') return false;

	const favorite: number[] = JSON.parse(
		localStorage.getItem('favorite') || '[]'
	);

	return favorite.includes(id);
};

const pokemon = (): number[] => {
	return JSON.parse(localStorage.getItem('favorite') || '[]');
};

const exportedFunction = { toggleFavorites, existFavorites, pokemon };

export default exportedFunction;
