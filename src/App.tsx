import { HeroProfile, Layout, TechStack, MyWork, Divider, LatestProjects } from './components';

function App() {
	return (
		<Layout>
			<HeroProfile />
			<Divider />
			<TechStack
				front={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next', 'Tailwind', 'SASS']}
				back={['NodeJS', 'GraphQL', 'SQLite', 'MySQL']}
			/>
			<Divider />
			<MyWork />
			<Divider />
			<LatestProjects />
			<Divider />
		</Layout>
	);
}

export default App;
