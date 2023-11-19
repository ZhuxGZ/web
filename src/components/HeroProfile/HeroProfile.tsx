import { TechStack } from '..';
import styles from './HeroProfile.module.scss';

export const HeroProfile = () => {
	return (
		<section className={styles.container}>
			<section className={styles.container__avatar}></section>
			<section>
				<section className={styles.container__info}>
					<section className={styles.container__info__description}>
						<h2>Hi,</h2>
						<p>
							I’m <span>Ignacio</span>, a self-taught developer from Argentina, from a young age i
							was very passionate about the informatics and robotics, during the confinement in 2020
							i started to take many courses and lectures about web development.
						</p>
					</section>
					<TechStack
						title="Tech Stack"
						techs={['HTML', 'CSS', 'JS', 'TS', 'React', 'Tailwind', 'SASS']}
					/>
				</section>
			</section>
		</section>
	);
};
