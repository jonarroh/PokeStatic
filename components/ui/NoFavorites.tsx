import { Container, Image, Text } from '@nextui-org/react';

export const NoFavorites = () => {
	return (
		<Container
			css={{
				display: 'flex',
				flexDirection: 'column',
				height: 'calc(100vh-100px)',
				alignContent: 'center',
				alignSelf: 'center'
			}}>
			<Text h1> No hay favoritos</Text>
			<Image
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png"
				alt="No pokemon"
				width={500}
				height={500}></Image>
		</Container>
	);
};
