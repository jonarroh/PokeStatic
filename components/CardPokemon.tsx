import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { FC } from 'react';
import { SmallPokemon } from '../interfaces';

interface Props {
	pokemon: SmallPokemon;
}

export const CardPokemon: FC<Props> = ({ pokemon }) => {
	const router = useRouter();
	const handleClick = () => {
		router.push(`/pokemon/${pokemon.id}`);
	};

	return (
		<>
			<Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
				<Card hoverable clickable onClick={handleClick}>
					<Card.Body>
						<Card.Image src={pokemon.img} width="100%" height={140} />
						<Card.Footer>
							<Row justify="space-between">
								<Text transform="capitalize"> {pokemon.name}</Text>
								<Text>#{pokemon.id}</Text>
							</Row>
						</Card.Footer>
					</Card.Body>
				</Card>
			</Grid>
		</>
	);
};
