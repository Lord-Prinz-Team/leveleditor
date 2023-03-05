import Image from "next/image";
import background from "../public/background.png";
import sidebricks from "../public/left_right-border.png";
import topbrick from "../public/border-top.png";

const Screen = () => {
	return (
		<div className="w-[1280px] h-[720px] relative overflow-hidden">
			<Image alt="background" src={background} draggable="false" />
			<Image
				alt="top bricks"
				className="absolute top-0 z-10"
				src={topbrick}
				draggable="false"
			/>
			<Image
				alt="left bricks"
				className="absolute top-0"
				src={sidebricks}
				draggable="false"
			/>
			<Image
				alt="right bricks"
				className="absolute top-0 right-0"
				src={sidebricks}
				draggable="false"
			/>
		</div>
	);
};

export default Screen;
