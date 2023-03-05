import Image from "next/image";

const BrickSample = (props) => {
	const { color } = props;

	return (
		<div>
			<Image
				alt={`${color} brick`}
				src={`/bricks/brick--${color}.png`}
				width="64"
				height="64"
			/>
		</div>
	);
};

export default BrickSample;
