import { Badge } from '..';
import styles from './TechStack.module.scss';

const TECHS_FRONT = {
	React: 'React',
	Tailwind: 'Tailwind',
	HTML: 'HTML',
	CSS: 'CSS',
	JavaScript: 'JavaScript',
	SASS: 'SASS',
	TypeScript: 'TypeScript',
	Next: 'Next',
};

const TECHS_BACK = {
	SQLite: 'SQLite',
	MySQL: 'MySQL',
	NodeJS: 'NodeJS',
	GraphQL: 'GraphQL',
};

type Back = keyof typeof TECHS_BACK;
type Front = keyof typeof TECHS_FRONT;

export const TechStack = ({
	title,
	front,
	back,
}: {
	title?: string;
	front: Front[];
	back: Back[];
}) => {
	return (
		<section className={styles.container}>
			<h2>{title}</h2>
			<section>
				<h3>Front End</h3>
				<section className={styles.container__tech}>
					{front.map((tech) => {
						return (
							<Badge key={tech} fontWeight="bold">
								{tech}
							</Badge>
						);
					})}
				</section>
			</section>
			<section className={styles.container__techSection}>
				<h3>Back End</h3>
				<section className={styles.container__tech}>
					{back.map((tech) => {
						return (
							<Badge key={tech} fontWeight="bold">
								{tech}
							</Badge>
						);
					})}
				</section>
			</section>
		</section>
	);
};
