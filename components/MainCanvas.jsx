import BlocksDrawer from "./BlocksDrawer";
import Screen from "./Screen";

const MainCanvas = () => {
	return (
		<div className="flex shadow-2xl">
			<Screen />
			<BlocksDrawer />
		</div>
	);
};

export default MainCanvas;
