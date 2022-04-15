import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { pokeApi } from '../api';
import { CardPokemon } from '../components/CardPokemon';

interface Props {
	pokemon: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemon }) => {
	return (
		<>
			<Layout title="Listado de Pokemon">
				<Grid.Container gap={2} justify="flex-start">
					{pokemon.map(pokemon => (
						<CardPokemon pokemon={pokemon} key={pokemon.id} />
					))}
				</Grid.Container>
			</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ctx => {
	const { data } = await pokeApi.get<PokemonListResponse>(
		'/pokemon/?limit=151'
	);

	const pokemon: SmallPokemon[] = data.results.map((poke, i) => ({
		...poke,
		id: i + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
			i + 1
		}.svg`
	}));

	return {
		props: {
			pokemon
		}
	};
};

export default Home;
