import { Badge } from '..';
import styles from './TechList.module.scss';

const TECHS = {
	React: 'React',
	Tailwind: 'Tailwind',
	HTML: 'HTML',
	CSS: 'CSS',
	JavaScript: 'JavaScript',
	SASS: 'SASS',
	TypeScript: 'TypeScript',
	Next: 'Next',
	SQLite: 'SQLite',
	MySQL: 'MySQL',
	NodeJS: 'NodeJS',
	GraphQL: 'GraphQL',
};

export type Techs = keyof typeof TECHS;

export const TechList = ({ techs }: { techs: Techs[] }) => {
	return (
		<section className={styles.container}>
			{techs.map((tech) => {
				return (
					<Badge key={tech} fontWeight="bold">
						{tech}
					</Badge>
				);
			})}
		</section>
	);
};
