import { Techs } from "../TechList/TechList";
import { TechList } from "../TechList/TechList";
import styles from "./TechStack.module.scss";

export const TechStack = ({ front, back }: { front: Techs[]; back: Techs[] }) => {
	return (
		<section className={styles.container}>
			<h2>Tech Stack</h2>
			<div>
				<h3>Front End</h3>
				<TechList techs={front} />
			</div>
			<div className={styles.container__techSection}>
				<h3>Back End</h3>
				<TechList techs={back} />
			</div>
		</section>
	);
};
