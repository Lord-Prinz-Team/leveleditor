import { useState, useEffect } from "react";

const DragableBrick = ({ X, Y, children, id, blocks, setSpawnedBlocks }) => {
	const [isDragging, setIsDragging] = useState(false);
	const [style, setStyle] = useState({});

	useEffect(() => {
		if (isDragging) {
			setStyle({
				top: `${Y}px`,
				left: `${X}px`,
			});
		}
	}, [X, Y]);

	// useEffect(() => {
	// 	window.addEventListener("contextmenu", (event) => {
	// 		event.preventDefault();

	// 		const blocksMap = blocks.filter((block) => block.id !== id);

	// 		setSpawnedBlocks(() => blocksMap);
	// 	});
	// }, []);

	const onMouseDownHandler = (event) => {
		setIsDragging(true);
	};

	const onMouseUpHandler = (event) => {
		setIsDragging(false);
	};

	return (
		<div
			className="z-40 absolute"
			style={style}
			onMouseDown={onMouseDownHandler}
			onMouseUp={onMouseUpHandler}
		>
			{children}
		</div>
	);
};

export default DragableBrick;
