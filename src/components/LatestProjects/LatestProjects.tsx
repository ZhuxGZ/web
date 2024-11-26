import { Project } from "./components/Project";

export const LatestProjects = () => {
	return (
		<section>
			<h2>Latest Projects</h2>
			<div>
				<Project
					title="Chiwi's Pet Care Shop"
					description="This is a simple Shopify store for a small business selling pet care products. The focus was on creating an easy-to-use site with clear product listings and customer reviews. The solution has been a great way for the business to connect with pet owners and showcase their products online."
					techs={["Shopify", "Liquid"]}
					preview="https://chiwispetcare.com"
				/>
			</div>
		</section>
	);
};
