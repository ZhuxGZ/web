import { HeroProfile, Layout, TechStack, WorkExperience, Divider} from "./components";

function App() {
	return (
		<Layout>
			<HeroProfile />
			<Divider />
			<TechStack
				front={["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next", "Tailwind", "SASS"]}
				back={["NodeJS", "SQL", "GraphQL", "SQLite", "MySQL", "C#", ".NET", "Python"]}
			/>
			<Divider />
			<WorkExperience />
			{/* <Divider />
			<LatestProjects /> */}
			<Divider />
		</Layout>
	);
}

export default App;
