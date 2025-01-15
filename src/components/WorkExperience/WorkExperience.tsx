import { CSSProperties } from "react";
import { Work } from "./components/Work";

export const WorkExperience = ({ sx }: { sx?: CSSProperties }) => {
	return (
		<section style={sx}>
			<h2>Work Experience</h2>
			<div>
				<Work
					role="Back End Developer"
					company="GM2DEV"
					date="FEB 2024 - NOW"
					techs={["C#", ".NET", "SQL"]}
					description="Worked with .NET, SQL databases and azure functions to build a data warehouse to store medical data that was needed to made accurate reports for the different areas of the company."
					tasklist={[
						"Develop azure functions to collect data from different API's.",
						"Identify improvement opportunities.",
						"Ensure that the reports produced from the data warehouse collection are similar to the reports from the individual sites.",
					]}
				/>
				<Work
					role="Front End Developer"
					company="GM2DEV"
					date="JUN 2024 - FEB 2024"
					techs={["React", "TypeScript", "SASS", "GraphQL"]}
					description="I was tasked with enhancing applications by incorporating numerous features. My commitment has consistently been to deliver these features with excellent responsiveness, ensuring a seamless and user-friendly experience."
					tasklist={[
						"Ensure the project's adaptability by making it responsive across various devices.",
						"Identify and fix reported bugs, enhancing the overall reliability of the project.",
						"Clean up and refactor existing code to prevent the buildup of technical debt.",
					]}
				/>
			</div>
		</section>
	);
};
