import { TechList } from '../..';
import { Techs } from '../../TechList/TechList';
import styles from './Work.module.scss';

interface WorkProps {
	description: string;
	role: string;
	company: string;
	date: string;
	techs: Techs[];
	tasklist: string[];
}

export const Work = ({ description, role, company, date, techs, tasklist }: WorkProps) => {
	return (
		<div>
			<div>
				<h3 className={styles.title}>
					{role} <span className={styles.dot}>·</span> {company}
				</h3>
				<p className={styles.date}>{date}</p>
			</div>
			<div>
				<p>{description}</p>
				<ul className={styles.list}>
					{tasklist?.map((task) => {
						return (
							<li key={task}>
								<span>{task}</span>
							</li>
						);
					})}
				</ul>
			</div>
			<div className={styles.tech_list}>
				<TechList techs={techs} />
			</div>
		</div>
	);
};
