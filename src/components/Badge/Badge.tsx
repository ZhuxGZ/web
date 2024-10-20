import styles from './Badge.module.scss';

interface BadgeProps {
	children: string | number | string[] | number[];
	fontWeight?: string | number;
}

export const Badge = ({ children, fontWeight }: BadgeProps) => {
	return (
		<div className={styles.container} style={{ fontWeight: fontWeight }}>
			{children}
		</div>
	);
};
