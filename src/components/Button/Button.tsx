export const Button = ({ href, children }: { href?: string; children: string }) => {
	return (
		<a href={href}>
			<button>{children}</button>
		</a>
	);
};
