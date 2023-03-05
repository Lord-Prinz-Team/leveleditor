import { useState, useEffect } from "react";

const DragableBrick = ({ X, Y, children, setBlocksbruh }) => {
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
