import Image from "next/image";
import background from "../public/background.png";
import sidebricks from "../public/left_right-border.png";
import topbrick from "../public/border-top.png";
import { useState } from "react";
import DragableBrick from "./DragableBrick";

const Screen = ({ blocks, setSpawnedBlocks }) => {
	const [mouseX, setMouseX] = useState(0);
	const [mouseY, setMouseY] = useState(0);
	const mouseMoveHandler = (event) => {
		setMouseX(event.clientX - 164 - 30);
		setMouseY(event.clientY - 148 - 12);
	};

	return (
		<div className="w-[1280px] h-[720px] relative overflow-hidden">
			<div
				className="w-[1216px] h-[693px] translate-x-8 translate-y-7 absolute"
				onMouseMove={mouseMoveHandler}
			>
				{blocks.map((block) => (
					<DragableBrick
						X={mouseX}
						Y={mouseY}
						key={block.id}
						id={block.id}
						blocks={blocks}
						setSpawnedBlocks={setSpawnedBlocks}
					>
						{block.element}
					</DragableBrick>
				))}
			</div>
			<Image
				className="z-0"
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
