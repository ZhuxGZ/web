import styles from './Link.module.scss';
import { ArrowSvg } from './components/ArrowSvg';

export const Link = ({
	href,
	children,
	icon,
	newTab
}: {
	href: string;
	children: string;
	icon?: boolean;
	newTab?: boolean
}) => {
	return (
		<a className={styles.link} target={newTab ? '_blank' : '_self'} style={{ display: icon ? 'flex' : 'inline-block' }} href={href}>
			{children}
			{icon && <ArrowSvg />}
		</a>
	);
};
