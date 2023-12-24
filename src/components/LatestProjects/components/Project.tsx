import { TechList, Link } from '../..';
import { Techs } from '../../TechList/TechList';
import styles from './Project.module.scss';

interface ProjectProps {
	title: string;
	description: string;
	techs: Techs[];
	github?: string;
	preview?: string;
}

export const Project = ({ title, description, techs, github, preview }: ProjectProps) => {
	return (
		<section>
			<section>
				<h3>{title}</h3>
				<p>{description}</p>
			</section>
			<section>
				<TechList techs={techs} />
			</section>
			<section className={styles.links}>
				{github && (
					<Link icon href={github}>
						Github
					</Link>
				)}
				{preview && (
					<Link icon href={preview}>
						Preview
					</Link>
				)}
			</section>
		</section>
	);
};
