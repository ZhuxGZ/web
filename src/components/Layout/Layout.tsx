import { ReactNode } from 'react';
import { Contact, HeaderLogo } from './components/';
import styles from './Layout.module.scss';

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<header className={styles.header}>
				<HeaderLogo width={'54px'} height={'57px'} />
			</header>
			<main>{children}</main>
			<footer>
				<Contact />
			</footer>
		</>
	);
};
