import { Badge } from '..';
import styles from './TechList.module.scss';

enum TECHS {
	'React',
	'Tailwind',
	'HTML',
	'CSS',
	'JavaScript',
	'SASS',
	'TypeScript',
	'Next',
	'SQLite',
	'SQL',
	'MySQL',
	'NodeJS',
	'GraphQL',
	'C#',
	'.NET',
	'Python',
}

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
