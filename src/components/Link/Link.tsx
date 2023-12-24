import styles from './Link.module.scss';

export const Link = ({ href, children }: { href: string; children: string }) => {
	return (
		<a className={styles.link} href={href}>
			{children}
		</a>
	);
};
