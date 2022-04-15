import { FC } from 'react';
import { Card, Grid } from '@nextui-org/react';
import Router from 'next/router';

interface Props {
	id: number;
}
export const FavoritePokemon: FC<Props> = ({ id }) => {
	const onFavoriteClick = () => {
		Router.push(`/pokemon/${id}`);
	};

	return (
		<Grid xs={6} sm={3} md={2} xl={1} key={id}>
			<Card
				hoverable
				clickable
				css={{ padding: '10px' }}
				onClick={onFavoriteClick}>
				<Card.Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
					width={100}
					height={100}
				/>
			</Card>
		</Grid>
	);
};
