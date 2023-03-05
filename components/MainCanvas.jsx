import BlocksDrawer from "./BlocksDrawer";
import Screen from "./Screen";
import { useState } from "react";

const MainCanvas = () => {
	const [spawnedBlocks, setSpawnedBlocks] = useState([]);

	return (
		<div className="flex shadow-2xl">
			<Screen blocks={spawnedBlocks} setSpawnedBlocks={setSpawnedBlocks} />
			<BlocksDrawer setSpawnedBlocks={setSpawnedBlocks} />
		</div>
	);
};

export default MainCanvas;
