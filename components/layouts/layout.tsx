import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../ui';

interface Props {
	children: any;
	title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || 'Pokemon app'}</title>
				<meta name="author" content="Jonarro" />
				<meta
					name="description"
					content={`Informacion sobre ${title}`}
				/>
				<meta
					name="keywords"
					content={`Pokemon, pokedex, ${title}`}
				/>
			</Head>
			<Navbar />
			<main
				style={{
					padding: '0px 20px'
				}}>
				{children}
			</main>
		</>
	);
};
