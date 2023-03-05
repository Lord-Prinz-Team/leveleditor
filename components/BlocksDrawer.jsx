import BrickSample from "./BrickSample";

const BlocksDrawer = () => {
	return (
		<div className="bg-[#202020] pt-8 ">
			<h3 className="text-3xl text-[#ddd] pb-6 bold text-center">Assets</h3>
			<div className="flex gap-2 flex-col items-center overflow-y-scroll max-h-[628px]">
				<BrickSample color="blue" />
				<BrickSample color="lightblue" />
				<BrickSample color="green" />
				<BrickSample color="orange" />
				<BrickSample color="purple" />
				<BrickSample color="red" />
				<BrickSample color="silver" />
				<BrickSample color="truegold" />
				<BrickSample color="truesilver" />
				<BrickSample color="yellow" />
				<BrickSample color="base" />
			</div>
		</div>
	);
};

export default BlocksDrawer;
