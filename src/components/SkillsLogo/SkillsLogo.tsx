interface SkillsProps {
	skill: string[];
}

function Skills({ skill }: SkillsProps) {
	const skills = skill.join(',');

	return <img src={`https://skillicons.dev/icons?i=${skills}`} alt="" />;
}

export { Skills };
