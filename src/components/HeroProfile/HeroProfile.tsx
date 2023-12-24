import { LinkedinSvg, GithubSvg } from '..';
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
							I’m <span>Ignacio</span>, a self-taught developer from Argentina, My passion for
							informatics and robotics has been with me since a young age.
						</p>
						<p>
							During the confinement in 2020, I made the decision to delve into web development as a
							self-learner.
						</p>
						<p>
							I believe in the power of continuous learning and adaptability in the ever-evolving
							world of technology. Each day brings new challenges and opportunities for growth.
						</p>
						<section className={styles.container__media}>
							<a href="https://www.linkedin.com/in/ignacio-berganti%C3%B1os/" target="_blank">
								<LinkedinSvg className={styles.container__media__linkedin} />
							</a>
							<a href="https://github.com/zhuxgz" target="_blank">
								<GithubSvg className={styles.container__media__github} />
							</a>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};
