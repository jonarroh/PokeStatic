import { useState } from 'react';
import {
	Button,
	Card,
	Container,
	Grid,
	Image,
	Text
} from '@nextui-org/react';
import { GetStaticProps, NextPage } from 'next';
import { GetStaticPaths } from 'next';
import confetti from 'canvas-confetti';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { localFovorites } from '../../utils';

interface Props {
	pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
	const [isInFavorite, setisInFavorite] = useState(
		localFovorites.existFavorites(pokemon.id)
	);

	const handleToggle = () => {
		localFovorites.toggleFavorites(pokemon.id);
		setisInFavorite(!isInFavorite);
		if (!isInFavorite) {
			confetti({
				zIndex: 999,
				particleCount: 100,
				spread: 160,
				angle: -100,
				origin: {
					x: 1,
					y: 0
				}
			});
		}
	};

	return (
		<Layout title={pokemon.name}>
			<Grid.Container css={{ marginTop: '5px' }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card hoverable css={{ padding: '30px' }}>
						<Card.Body>
							<Card.Image
								src={
									pokemon.sprites.other?.dream_world.front_default ||
									'no-bitches.png'
								}
								alt={pokemon.name}
								width="100%"
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid sm={8} xs={12}>
					<Card>
						<Card.Header
							css={{
								display: 'flex',
								justifyContent: 'space-between'
							}}>
							<Text h1 transform="capitalize">
								{pokemon.name}
							</Text>
							<Button
								color={'gradient'}
								ghost={!isInFavorite}
								size="xs"
								onClick={handleToggle}>
								{isInFavorite
									? 'En favoritos'
									: 'Guardar en favoritos'}
							</Button>
						</Card.Header>
						<Card.Body>
							<Text size={30}>Sprites:</Text>
							<Container direction="row" display="flex" gap={0}>
								<Image
									src={pokemon.sprites.front_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.front_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async ctx => {
	const pokemon151 = [...Array(151)].map((value, i) => `${i + 1}`);
	return {
		paths: pokemon151.map(id => ({
			params: { id }
		})),
		fallback: 'blocking'
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };
	const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
	const pokemon = {
		id: data.id,
		name: data.name,
		sprites: data.sprites
	};

	return {
		props: {
			pokemon: data
		}
	};
};

export default PokemonPage;
