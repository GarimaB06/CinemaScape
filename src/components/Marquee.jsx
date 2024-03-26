import DotLogo from "../assets/DotLogo";

const Marquee = ({ titles }) => {
	return (
		<div
			className="marquee"
			aria-live="polite"
			role="status"
			aria-label="Marquee for currently shown movies"
		>
			<p className="marquee-content">
				{titles.map((title, index) => (
					<span key={`${title}-${index}`}>
						<DotLogo />
						{` ${title} `}
					</span>
				))}
			</p>
			<p className="marquee-content">
				{titles.map((title, index) => (
					<span key={`${index}-${title}`}>
						<DotLogo />
						{` ${title} `}
					</span>
				))}
			</p>
		</div>
	);
};

export default Marquee;
