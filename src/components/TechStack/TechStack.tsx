import styles from './TechStack.module.scss';

const TECHS = {
	React: 'React',
	Tailwind: 'Tailwind',
	HTML: 'HTML',
	CSS: 'CSS',
	JS: 'JS',
	SASS: 'SASS',
	TS: 'TS',
};

type Techs = keyof typeof TECHS;

export const TechStack = ({ title, techs }: { title?: string; techs: Techs[] }) => {
	return (
		<section className={styles.container}>
			<h2>{title}</h2>
			<section className={styles.container__tech}>
				{techs.map((tech) => {
					return <img key={tech} src={`src/components/TechStack/assets/${tech}.svg`}></img>;
				})}
			</section>
		</section>
	);
};
