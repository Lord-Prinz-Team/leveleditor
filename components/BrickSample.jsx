import Image from "next/image";
const BrickSample = (props) => {
	const { color, setSpawnedBlocks } = props;

	const extension = color.startsWith("true") ? "gif" : "png";

	const onClickHandler = () => {
		setSpawnedBlocks((res) => [
			...res,
			{
				id: Math.random() * Math.random() * Math.random(),
				element: (
					<Image
						alt={`${color}`}
						src={`/bricks/brick--${color}.${extension}`}
						width="64"
						height="64"
						draggable={false}
					/>
				),
			},
		]);
	};

	return (
		<div
			className="flex items-center content-start gap-4 text-[#ddd] px-20 hover:bg-[#323232] py-4 cursor-pointer select-none transition hover:transition"
			onClick={onClickHandler}
		>
			<Image
				alt={`${color} brick`}
				src={`/bricks/brick--${color}.${extension}`}
				width="64"
				height="64"
				draggable={false}
			/>
			<p className="w-12 text-sm">{color.toUpperCase()} BRICK</p>
		</div>
	);
};

export default BrickSample;
