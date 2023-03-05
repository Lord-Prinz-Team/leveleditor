import Image from "next/image";

const BrickSample = (props) => {
	const { color } = props;

	return (
		<div className="flex items-center content-start gap-4 text-[#ddd] px-20 hover:bg-[#323232] py-4 cursor-pointer select-none transition hover:transition">
			<Image
				alt={`${color} brick`}
				src={`/bricks/brick--${color}.png`}
				width="80"
				height="80"
			/>
			<p className="w-12">{color.toUpperCase()} BRICK</p>
		</div>
	);
};

export default BrickSample;
