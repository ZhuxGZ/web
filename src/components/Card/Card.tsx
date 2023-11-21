import styles from './Card.module.scss';

export const Card = () => {
	return (
		<div className={styles.container}>
			<section className={styles.image}></section>
			<section>
				<section className={styles.description}>
					<h2>Lorem ipsum dolor, sit amet consectetur</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, debitis at ipsum
						repudiandae doloremque obcaecati sunt laborum nostrum alias ipsa dolorum rerum doloribus
						amet vero totam reiciendis itaque explicabo animi.
					</p>
				</section>
			</section>
		</div>
	);
};
