import { Commitment, Welcome } from "@/components";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
	return (
		<>
			<section className="bg-BlackTan py-sectionPadding">
				<div className="container pt-containerPaddingTop">
					<Welcome />
				</div>
			</section>
			<section className="bg-NightBlack py-sectionPadding">
				<div className="container pt-containerPaddingTop">
					<Commitment />
				</div>
			</section>

			<section className="bg-BlackTan py-sectionPadding">
				<div className="container pt-containerPaddingTop">
					<Portfolio />
				</div>
			</section>
		</>
	);
}
