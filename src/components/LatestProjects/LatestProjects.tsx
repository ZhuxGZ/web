import { Project } from './components/Project';

export const LatestProjects = () => {
	return (
		<section>
			<h2>Latest Projects</h2>
			<section>
				<Project
					title="Crud"
					description="This is very simple crud made as full stack practice with next using the next api endpoint
					in combination with SQLite for the database."
					techs={['Next', 'React', 'Tailwind', 'TypeScript', 'SQLite']}
					github="/"
					preview="/"
				/>
			</section>
		</section>
	);
};
