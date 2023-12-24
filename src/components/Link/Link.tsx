import styles from './Link.module.scss';
import { ArrowSvg } from './components/ArrowSvg';

export const Link = ({
	href,
	children,
	icon,
}: {
	href: string;
	children: string;
	icon?: boolean;
}) => {
	return (
		<a className={styles.link} href={href}>
			{children}
			{icon && <ArrowSvg />}
		</a>
	);
};
