import BrickSample from "./BrickSample";

const BlocksDrawer = ({ setSpawnedBlocks }) => {
	return (
		<div className="bg-[#202020] pt-8 ">
			<h3 className="text-3xl text-[#ddd] pb-6 bold text-center select-none">
				Assets
			</h3>
			<div className="flex gap-2 flex-col items-center overflow-y-scroll max-h-[628px]">
				<BrickSample color="blue" setSpawnedBlocks={setSpawnedBlocks} />
				<BrickSample color="lightblue" setSpawnedBlocks={setSpawnedBlocks} />
				<BrickSample color="green" setSpawnedBlocks={setSpawnedBlocks} />
				<BrickSample color="orange" setSpawnedBlocks={setSpawnedBlocks} />
				<BrickSample color="purple" setSpawnedBlocks={setSpawnedBlocks} />
				<BrickSample color="red" setSpawnedBlocks={setSpawnedBlocks} />
				<BrickSample color="silver" setSpawnedBlocks={setSpawnedBlocks} />
				<BrickSample color="truegold" setSpawnedBlocks={setSpawnedBlocks} />
				<BrickSample color="truesilver" setSpawnedBlocks={setSpawnedBlocks} />
				<BrickSample color="yellow" setSpawnedBlocks={setSpawnedBlocks} />
				<BrickSample color="base" setSpawnedBlocks={setSpawnedBlocks} />
			</div>
		</div>
	);
};

export default BlocksDrawer;
