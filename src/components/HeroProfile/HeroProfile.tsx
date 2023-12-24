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
							I’m <span>Ignacio</span>, a self-taught developer from Argentina, from a young age i
							was very passionate about the informatics and robotics.
						</p>
						<p>
							So during the confinement in 2020 i decided to start learning web development as an
							self-taught.
						</p>
						<p>Now i'm mainly into Front End development with React and TypeScript.</p>
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
