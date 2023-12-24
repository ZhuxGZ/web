import { CSSProperties } from 'react';
import { Work } from './components/Work';

export const MyWork = ({ sx }: { sx?: CSSProperties }) => {
	return (
		<section style={sx}>
			<h2>My Work</h2>
			<section>
				<Work
					role="Front End Developer"
					company="GM2DEV"
					date="JUN 2024 - NOW"
					techs={['TypeScript', 'React', 'GraphQL']}
					description="I was tasked with enhancing applications by incorporating numerous features. My commitment has consistently been to deliver these features with excellent responsiveness, ensuring a seamless and user-friendly experience."
					tasklist={[
						"Ensure the project's adaptability by making it responsive across various devices.",
						'Identify and fix reported bugs, enhancing the overall reliability of the project.',
						'Clean up and refactor existing code to prevent the buildup of technical debt.',
					]}
				/>
			</section>
		</section>
	);
};
