import { Button } from '../..';

export const ButtonGroup = ({ git, live }: { git?: string; live?: string }) => {
	return (
		<div>
			<Button href={git}>Source Code</Button>
			<Button href={live}>Live Preview</Button>
		</div>
	);
};
