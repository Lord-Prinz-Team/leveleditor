import BlocksDrawer from "./BlocksDrawer";
import Screen from "./Screen";

const MainCanvas = () => {
	return (
		<div className="flex gap-3">
			<Screen />
			<BlocksDrawer />
		</div>
	);
};

export default MainCanvas;
