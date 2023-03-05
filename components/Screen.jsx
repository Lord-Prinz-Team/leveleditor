import Image from "next/image";
import background from "../public/background.png";
import sidebricks from "../public/left_right-border.png";
import topbrick from "../public/border-top.png";

const Screen = ({ blocks }) => {
	return (
		<div className="w-[1280px] h-[720px] relative overflow-hidden">
			<div className="w-[1216px] h-[693px] translate-x-8 translate-y-7">
				{blocks.map((block, index) => (
					<div key={index}>{block}</div>
				))}
			</div>
			<Image
				className="-translate-y-[693px]"
				alt="background"
				src={background}
				draggable="false"
			/>
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
