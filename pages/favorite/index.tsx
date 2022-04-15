import { Grid, Card } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { FavoriteCardPokemon } from '../../components/FavoriteCardPokemon';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui/NoFavorites';
import { localFovorites } from '../../utils';

const Favorites = () => {
	const [favoritePokemon, setfavoritePokemon] = useState<number[]>(
		[]
	);
	useEffect(() => {
		setfavoritePokemon(localFovorites.pokemon);
	}, []);

	return (
		<>
			<Layout title="Favorites">
				{favoritePokemon.length === 0 ? (
					<NoFavorites />
				) : (
					<FavoriteCardPokemon pokemon={favoritePokemon} />
				)}
			</Layout>
		</>
	);
};

export default Favorites;
