import BlocksDrawer from "./BlocksDrawer";
import Screen from "./Screen";

const MainCanvas = () => {
	return (
		<div className="flex">
			<Screen />
			<BlocksDrawer />
		</div>
	);
};

export default MainCanvas;
