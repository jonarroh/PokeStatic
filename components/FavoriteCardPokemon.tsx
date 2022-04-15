import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavoritePokemon } from './FavoritePokemon';

interface Props {
	pokemon: number[];
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemon }) => {
	return (
		<Grid.Container gap={2} direction="row" justify="flex-start">
			{pokemon.map(id => (
				<FavoritePokemon key={id} id={id} />
			))}
		</Grid.Container>
	);
};
